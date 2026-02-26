import { useEffect, useRef, useCallback } from 'react';

interface UseBackgroundAudioProps {
  stationName: string;
  stationDescription: string;
  isPlaying: boolean;
}

export function useBackgroundAudio({
  stationName,
  stationDescription,
  isPlaying
}: UseBackgroundAudioProps) {
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Initialize silent audio context for background playback
  useEffect(() => {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: stationName || '全球网络收音机',
        artist: stationDescription || 'Global Radio',
        album: '网络广播',
        artwork: [
          { src: '/icon-96x96.png', sizes: '96x96', type: 'image/png' },
          { src: '/icon-128x128.png', sizes: '128x128', type: 'image/png' },
          { src: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-256x256.png', sizes: '256x256', type: 'image/png' },
          { src: '/icon-384x384.png', sizes: '384x384', type: 'image/png' },
          { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
        ]
      });

      navigator.mediaSession.setActionHandler('play', () => {
        // Handled by parent component
      });

      navigator.mediaSession.setActionHandler('pause', () => {
        // Handled by parent component
      });

      navigator.mediaSession.setActionHandler('previoustrack', () => {
        // Could implement station switching
      });

      navigator.mediaSession.setActionHandler('nexttrack', () => {
        // Could implement station switching
      });
    }
  }, [stationName, stationDescription]);

  // Update playback state
  useEffect(() => {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.playbackState = isPlaying ? 'playing' : 'paused';
    }
  }, [isPlaying]);

  // Keep audio alive in background using Web Audio API
  const keepAlive = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    const ctx = audioContextRef.current;
    
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    // Create a silent oscillator to keep audio context alive
    if (!oscillatorRef.current) {
      oscillatorRef.current = ctx.createOscillator();
      gainNodeRef.current = ctx.createGain();
      
      oscillatorRef.current.frequency.value = 0; // Silent
      gainNodeRef.current.gain.value = 0; // No volume
      
      oscillatorRef.current.connect(gainNodeRef.current);
      gainNodeRef.current.connect(ctx.destination);
      
      oscillatorRef.current.start();
    }
  }, []);

  const stopKeepAlive = useCallback(() => {
    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current.disconnect();
      oscillatorRef.current = null;
    }
    if (gainNodeRef.current) {
      gainNodeRef.current.disconnect();
      gainNodeRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      stopKeepAlive();
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [stopKeepAlive]);

  return { keepAlive, stopKeepAlive };
}

// Request wake lock to prevent screen from sleeping
export function useWakeLock(isPlaying: boolean) {
  const wakeLockRef = useRef<any>(null);

  useEffect(() => {
    const requestWakeLock = async () => {
      try {
        if ('wakeLock' in navigator && isPlaying) {
          wakeLockRef.current = await (navigator as any).wakeLock.request('screen');
        }
      } catch (err) {
        console.log('Wake Lock not supported or failed:', err);
      }
    };

    const releaseWakeLock = async () => {
      if (wakeLockRef.current) {
        try {
          await wakeLockRef.current.release();
          wakeLockRef.current = null;
        } catch (err) {
          console.log('Failed to release wake lock:', err);
        }
      }
    };

    if (isPlaying) {
      requestWakeLock();
    } else {
      releaseWakeLock();
    }

    return () => {
      releaseWakeLock();
    };
  }, [isPlaying]);
}
