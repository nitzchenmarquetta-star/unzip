import { X, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation, type Language } from '@/i18n/translations';

interface BackgroundPlayNotificationProps {
  onClose: () => void;
  language: Language;
}

export function BackgroundPlayNotification({ onClose, language }: BackgroundPlayNotificationProps) {
  const t = useTranslation(language);

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-fade-in-down">
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-3 rounded-2xl shadow-xl shadow-pink-300/50 flex items-center gap-4 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <Volume2 className="w-4 h-4" />
          </div>
          <div>
            <p className="font-medium text-sm">{t.backgroundPlaying}</p>
            <p className="text-xs text-white/80">{t.backgroundPlayHint}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 text-white/70 hover:text-white hover:bg-white/20 rounded-full"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
