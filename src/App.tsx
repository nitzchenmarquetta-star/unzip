import { useState, useMemo } from 'react';
import { Radio, Search, Heart, Globe, Music, Newspaper, Trophy, MessageCircle, Languages } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioCard } from '@/components/RadioCard';
import { PlayerBar } from '@/components/PlayerBar';
import { BackgroundPlayNotification } from '@/components/BackgroundPlayNotification';
import { SakuraBackground } from '@/components/sakura/SakuraBackground';
import { SakuraBranch, FloatingSakura } from '@/components/sakura/SakuraDecoration';
import { ClickEffects } from '@/components/ClickEffects';
import { radioStations, genres, type RadioStation } from '@/data/radioStations';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import { useFavorites } from '@/hooks/useFavorites';
import { useBackgroundAudio, useWakeLock } from '@/hooks/useBackgroundAudio';
import { useTranslation, type Language } from '@/i18n/translations';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [currentStation, setCurrentStation] = useState<RadioStation | null>(null);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [language, setLanguage] = useState<Language>('zh');
  const [showBgNotification, setShowBgNotification] = useState(true);

  const t = useTranslation(language);
  const { isPlaying, volume, isLoading, error, toggle, setVolume } = useAudioPlayer();
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  
  // Background audio support
  useBackgroundAudio({
    stationName: currentStation?.name || '',
    stationDescription: currentStation?.description || '',
    isPlaying
  });
  
  // Keep screen awake while playing
  useWakeLock(isPlaying);

  const filteredStations = useMemo(() => {
    let stations = radioStations;

    // Filter by favorites
    if (showFavoritesOnly) {
      stations = stations.filter(station => favorites.includes(station.id));
    }

    // Filter by genre
    if (selectedGenre !== 'all') {
      stations = stations.filter(station => station.genre === selectedGenre);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      stations = stations.filter(
        station =>
          station.name.toLowerCase().includes(query) ||
          station.country.toLowerCase().includes(query) ||
          station.countryJa.includes(query) ||
          station.description.toLowerCase().includes(query) ||
          station.descriptionJa.includes(query)
      );
    }

    return stations;
  }, [searchQuery, selectedGenre, showFavoritesOnly, favorites]);

  const handlePlay = (station: RadioStation) => {
    if (currentStation?.id === station.id) {
      toggle(station.streamUrl);
    } else {
      setCurrentStation(station);
      toggle(station.streamUrl);
    }
  };

  const getGenreIcon = (genreId: string) => {
    const icons: Record<string, React.ReactNode> = {
      all: <Globe className="w-4 h-4" />,
      music: <Music className="w-4 h-4" />,
      news: <Newspaper className="w-4 h-4" />,
      sports: <Trophy className="w-4 h-4" />,
      talk: <MessageCircle className="w-4 h-4" />
    };
    return icons[genreId] || <Radio className="w-4 h-4" />;
  };

  const getGenreName = (genre: typeof genres[0]) => {
    return language === 'ja' ? genre.nameJa : genre.name;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50/80 via-indigo-50/60 to-purple-50/80 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Sakura Background Animation */}
      <SakuraBackground />
      
      {/* Click Effects */}
      <ClickEffects />
      
      {/* Sakura Branch Decorations */}
      <SakuraBranch 
        className="fixed top-0 left-0 w-48 h-48 md:w-64 md:h-64 z-20 opacity-80" 
        position="left" 
      />
      <SakuraBranch 
        className="fixed top-0 right-0 w-48 h-48 md:w-64 md:h-64 z-20 opacity-80" 
        position="right" 
      />
      
      {/* Floating Sakura Petals */}
      <FloatingSakura count={8} />
      
      {/* Background Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-300/10 dark:bg-indigo-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      {/* Background Play Notification */}
      {isPlaying && showBgNotification && (
        <BackgroundPlayNotification 
          onClose={() => setShowBgNotification(false)}
          language={language}
        />
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-pink-200/50 dark:border-pink-800/30 shadow-lg shadow-pink-100/20 dark:shadow-none">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-400 via-pink-500 to-purple-600 flex items-center justify-center shadow-lg shadow-pink-300/50 animate-glow">
                <Radio className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  {t.appTitle}
                </h1>
                <p className="text-xs text-pink-600/70 dark:text-pink-300/70">
                  {t.appSubtitle}
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-md sm:ml-auto">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-400 group-focus-within:text-pink-500 transition-colors" />
                <Input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 h-11 bg-white/80 dark:bg-slate-800/80 border-pink-200 dark:border-pink-800/50 focus-visible:ring-2 focus-visible:ring-pink-400 rounded-xl transition-all hover:shadow-md hover:shadow-pink-100/50"
                />
              </div>
            </div>

            {/* Language & Favorites Buttons */}
            <div className="flex items-center gap-2">
              {/* Language Switch */}
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-pink-200 dark:border-pink-800/50 hover:bg-pink-50 dark:hover:bg-pink-900/20 rounded-full"
                onClick={() => setLanguage(language === 'zh' ? 'ja' : 'zh')}
              >
                <Languages className="w-4 h-4 text-pink-500" />
                <span className="text-sm">{language === 'zh' ? '中文' : '日本語'}</span>
              </Button>

              {/* Favorites Button */}
              <Button
                variant={showFavoritesOnly ? 'default' : 'outline'}
                size="sm"
                className={`gap-2 rounded-full transition-all ${
                  showFavoritesOnly
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-lg shadow-pink-300/50'
                    : 'border-pink-200 dark:border-pink-800/50 hover:bg-pink-50 dark:hover:bg-pink-900/20'
                }`}
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
              >
                <Heart className={`w-4 h-4 ${showFavoritesOnly ? 'fill-current' : ''}`} />
                <span className="hidden sm:inline">
                  {showFavoritesOnly ? t.showAll : t.myFavorites}
                </span>
                {favorites.length > 0 && (
                  <span className="ml-1 text-xs bg-white/20 px-1.5 py-0.5 rounded-full">
                    {favorites.length}
                  </span>
                )}
              </Button>
            </div>
          </div>

          {/* Genre Tabs */}
          <div className="mt-4">
            <Tabs value={selectedGenre} onValueChange={setSelectedGenre}>
              <TabsList className="bg-white/60 dark:bg-slate-800/60 p-1.5 rounded-xl backdrop-blur-sm">
                {genres.map((genre) => (
                  <TabsTrigger
                    key={genre.id}
                    value={genre.id}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg gap-1.5 transition-all px-4"
                  >
                    {getGenreIcon(genre.id)}
                    <span className="hidden sm:inline">{getGenreName(genre)}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 pb-32 relative z-10">
        {/* Stats */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4 text-sm">
            <span className="text-pink-700 dark:text-pink-300">
              {t.totalStations.replace('{count}', String(filteredStations.length))}
            </span>
            {showFavoritesOnly && (
              <span className="text-pink-500 font-medium animate-pulse">
                {t.showingFavorites}
              </span>
            )}
          </div>
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchQuery('')}
              className="text-pink-500 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-900/20"
            >
              {t.clearSearch}
            </Button>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 rounded-xl text-pink-600 dark:text-pink-400 text-sm animate-shake">
            {t.playError}
          </div>
        )}

        {/* Empty State */}
        {filteredStations.length === 0 && (
          <div className="text-center py-20 relative">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 flex items-center justify-center shadow-xl shadow-pink-200/50">
              <Radio className="w-12 h-12 text-pink-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">
              {showFavoritesOnly ? t.noFavorites : t.noStationsFound}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              {showFavoritesOnly ? t.addFavoritesHint : t.tryDifferentSearch}
            </p>
            {showFavoritesOnly && (
              <Button
                variant="outline"
                className="mt-4 border-pink-300 hover:bg-pink-50 dark:border-pink-700 dark:hover:bg-pink-900/20 rounded-full"
                onClick={() => setShowFavoritesOnly(false)}
              >
                {t.browseAll}
              </Button>
            )}
          </div>
        )}

        {/* Station Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredStations.map((station, index) => (
            <div 
              key={station.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <RadioCard
                station={station}
                isPlaying={isPlaying}
                isCurrentStation={currentStation?.id === station.id}
                isFavorite={isFavorite(station.id)}
                isLoading={isLoading && currentStation?.id === station.id}
                onPlay={() => handlePlay(station)}
                onToggleFavorite={() => toggleFavorite(station.id)}
                language={language}
              />
            </div>
          ))}
        </div>
      </main>

      {/* Player Bar */}
      <PlayerBar
        station={currentStation}
        isPlaying={isPlaying}
        volume={volume}
        isLoading={isLoading}
        isFavorite={currentStation ? isFavorite(currentStation.id) : false}
        onPlay={() => currentStation && toggle(currentStation.streamUrl)}
        onPause={() => currentStation && toggle(currentStation.streamUrl)}
        onVolumeChange={setVolume}
        onToggleFavorite={() => currentStation && toggleFavorite(currentStation.id)}
        onClose={() => setCurrentStation(null)}
        language={language}
      />
    </div>
  );
}

export default App;
