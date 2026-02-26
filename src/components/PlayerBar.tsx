import { Play, Pause, Volume2, VolumeX, Heart, Radio, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import type { RadioStation } from '@/data/radioStations';
import type { Language } from '@/i18n/translations';

interface PlayerBarProps {
  station: RadioStation | null;
  isPlaying: boolean;
  volume: number;
  isLoading: boolean;
  isFavorite: boolean;
  onPlay: () => void;
  onPause: () => void;
  onVolumeChange: (volume: number) => void;
  onToggleFavorite: () => void;
  onClose: () => void;
  language: Language;
}

export function PlayerBar({
  station,
  isPlaying,
  volume,
  isLoading,
  isFavorite,
  onPlay,
  onPause,
  onVolumeChange,
  onToggleFavorite,
  onClose,
  language
}: PlayerBarProps) {
  if (!station) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border-t border-pink-200/60 dark:border-pink-800/40 shadow-2xl shadow-pink-200/30 z-50">
      {/* Visualizer Bars */}
      {isPlaying && (
        <div className="absolute top-0 left-0 right-0 flex justify-center gap-0.5 -translate-y-full pb-1">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="w-1 bg-gradient-to-t from-pink-400 to-purple-400 rounded-full animate-equalizer"
              style={{
                height: '20px',
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${0.5 + Math.random() * 0.5}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          {/* Station Icon */}
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 via-pink-500 to-purple-600 flex items-center justify-center shadow-lg shadow-pink-300/40 animate-pulse-slow">
            <Radio className="w-7 h-7 text-white" />
          </div>

          {/* Station Info */}
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 truncate text-lg">
              {station.name}
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
              <span className="text-pink-500">
                {language === 'ja' ? station.countryJa : station.country}
              </span>
              <span className="mx-2">·</span>
              <span className="text-slate-400">
                {language === 'ja' ? station.descriptionJa : station.description}
              </span>
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Favorite Button */}
            <Button
              variant="ghost"
              size="icon"
              className={`h-10 w-10 rounded-full transition-all duration-300 ${
                isFavorite
                  ? 'text-pink-500 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/20 scale-110'
                  : 'text-slate-400 hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20'
              }`}
              onClick={onToggleFavorite}
            >
              <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
            </Button>

            {/* Play/Pause Button */}
            <Button
              size="icon"
              className={`h-14 w-14 rounded-full shadow-xl transition-all duration-300 ${
                isPlaying
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white shadow-amber-300/50 hover:shadow-amber-300/70 hover:scale-105'
                  : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-pink-300/50 hover:shadow-pink-300/70 hover:scale-105'
              }`}
              onClick={isPlaying ? onPause : onPlay}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6 ml-0.5" />
              )}
            </Button>

            {/* Volume Control */}
            <div className="hidden sm:flex items-center gap-2 w-36 bg-slate-100/50 dark:bg-slate-800/50 rounded-full px-3 py-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-slate-500 hover:text-pink-500 hover:bg-transparent"
                onClick={() => onVolumeChange(volume === 0 ? 0.7 : 0)}
              >
                {volume === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              <Slider
                value={[volume * 100]}
                onValueChange={(value) => onVolumeChange(value[0] / 100)}
                max={100}
                step={1}
                className="flex-1"
              />
            </div>

            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-full"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500">
        {isPlaying && (
          <div 
            className="h-full bg-white/60 animate-slide-right"
            style={{ width: '30%' }}
          />
        )}
      </div>
    </div>
  );
}
