import { Play, Pause, Heart, Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { RadioStation } from '@/data/radioStations';
import { useTranslation, type Language } from '@/i18n/translations';

interface RadioCardProps {
  station: RadioStation;
  isPlaying: boolean;
  isCurrentStation: boolean;
  isFavorite: boolean;
  isLoading: boolean;
  onPlay: () => void;
  onToggleFavorite: () => void;
  language: Language;
}

export function RadioCard({
  station,
  isPlaying,
  isCurrentStation,
  isFavorite,
  isLoading,
  onPlay,
  onToggleFavorite,
  language
}: RadioCardProps) {
  const t = useTranslation(language);

  const getGenreLabel = (genre: string) => {
    const labels: Record<string, { zh: string; ja: string }> = {
      music: { zh: '音乐', ja: '音楽' },
      news: { zh: '新闻', ja: 'ニュース' },
      sports: { zh: '体育', ja: 'スポーツ' },
      talk: { zh: '谈话', ja: 'トーク' }
    };
    return labels[genre]?.[language] || genre;
  };

  const getGenreColor = (genre: string) => {
    const colors: Record<string, string> = {
      music: 'bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 dark:from-pink-900/40 dark:to-purple-900/40 dark:text-pink-300',
      news: 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 dark:from-blue-900/40 dark:to-cyan-900/40 dark:text-blue-300',
      sports: 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 dark:from-green-900/40 dark:to-emerald-900/40 dark:text-green-300',
      talk: 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 dark:from-orange-900/40 dark:to-amber-900/40 dark:text-orange-300'
    };
    return colors[genre] || 'bg-gray-100 text-gray-700';
  };

  const getCountryFlag = (code: string) => {
    const flags: Record<string, string> = {
      'GB': '🇬🇧', 'US': '🇺🇸', 'CN': '🇨🇳', 'JP': '🇯🇵', 'KR': '🇰🇷',
      'FR': '🇫🇷', 'DE': '🇩🇪', 'CA': '🇨🇦', 'AU': '🇦🇺', 'NL': '🇳🇱',
      'BE': '🇧🇪', 'MX': '🇲🇽', 'TW': '🇹🇼'
    };
    return flags[code] || '🌍';
  };

  return (
    <Card className="group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-pink-200/50 hover:-translate-y-1.5 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border border-pink-100/60 dark:border-pink-800/30 rounded-2xl">
      {/* Sakura decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="80" cy="20" r="15" fill="url(#sakuraGrad)" />
          <defs>
            <radialGradient id="sakuraGrad" cx="30%" cy="30%">
              <stop offset="0%" stopColor="#FFF0F5" />
              <stop offset="100%" stopColor="#FFB7C5" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          {/* Station Icon */}
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 via-pink-500 to-purple-600 flex items-center justify-center shadow-lg shadow-pink-300/40 group-hover:shadow-pink-400/60 group-hover:scale-105 transition-all duration-300">
            <Radio className="w-8 h-8 text-white" />
          </div>

          {/* Station Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 truncate pr-2 text-lg">
                  {station.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-1">
                  <span className="text-lg">{getCountryFlag(station.countryCode)}</span>
                  <span className="text-pink-600/70 dark:text-pink-300/70">
                    {language === 'ja' ? station.countryJa : station.country}
                  </span>
                </p>
              </div>
              <Badge variant="secondary" className={`text-xs ${getGenreColor(station.genre)} border-0`}>
                {getGenreLabel(station.genre)}
              </Badge>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 line-clamp-2 leading-relaxed">
              {language === 'ja' ? station.descriptionJa : station.description}
            </p>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-pink-100/50 dark:border-pink-800/20">
              <span className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400/60" />
                {language === 'ja' ? station.languageJa : station.language}
              </span>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-9 w-9 rounded-full transition-all duration-300 ${
                    isFavorite
                      ? 'text-pink-500 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/20 scale-110'
                      : 'text-slate-400 hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20'
                  }`}
                  onClick={onToggleFavorite}
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''} transition-transform ${isFavorite ? 'animate-heart-beat' : ''}`} />
                </Button>

                <Button
                  size="sm"
                  className={`h-9 px-4 rounded-full transition-all duration-300 shadow-md ${
                    isCurrentStation && isPlaying
                      ? 'bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white shadow-amber-300/50'
                      : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-pink-300/50 hover:shadow-lg hover:shadow-pink-300/40'
                  }`}
                  onClick={onPlay}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : isCurrentStation && isPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4 ml-0.5" />
                  )}
                  <span className="ml-1.5 text-xs font-medium">
                    {isLoading ? t.loading : isCurrentStation && isPlaying ? t.pause : t.play}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      {/* Playing Indicator */}
      {isCurrentStation && isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500">
          <div className="h-full w-1/3 bg-white/60 animate-slide-right" />
        </div>
      )}

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-pink-400/5 group-hover:via-purple-400/5 group-hover:to-pink-400/5 transition-all duration-500 pointer-events-none" />
    </Card>
  );
}
