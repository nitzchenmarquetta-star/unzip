export type Language = 'zh' | 'ja';

export const translations = {
  zh: {
    // Header
    appTitle: '全球网络收音机',
    appSubtitle: '收录全世界最受欢迎的网络广播',
    
    // Search
    searchPlaceholder: '搜索电台、国家或类型...',
    clearSearch: '清除搜索',
    
    // Favorites
    showAll: '显示全部',
    myFavorites: '我的收藏',
    noFavorites: '还没有收藏电台',
    addFavoritesHint: '点击电台卡片上的爱心图标，将喜欢的电台添加到收藏',
    browseAll: '浏览全部电台',
    
    // Stats
    totalStations: '共 {count} 个电台',
    showingFavorites: '显示收藏电台',
    
    // Empty state
    noStationsFound: '没有找到电台',
    tryDifferentSearch: '尝试使用其他关键词搜索，或选择不同的分类',
    
    // Player
    nowPlaying: '正在播放',
    play: '播放',
    pause: '暂停',
    loading: '加载中',
    
    // Genres
    genres: {
      all: '全部',
      music: '音乐',
      news: '新闻',
      sports: '体育',
      talk: '谈话'
    },
    
    // Background play notification
    backgroundPlaying: '后台播放中',
    backgroundPlayHint: '即使切换应用或锁屏，音乐仍会继续播放',
    
    // Error messages
    playError: '无法播放此电台，请尝试其他电台',
    
    // Language switch
    language: '语言',
    chinese: '中文',
    japanese: '日本語'
  },
  ja: {
    // Header
    appTitle: 'グローバルラジオ',
    appSubtitle: '世界中の人気ネットラジオを収録',
    
    // Search
    searchPlaceholder: 'ラジオ、国、ジャンルで検索...',
    clearSearch: '検索をクリア',
    
    // Favorites
    showAll: 'すべて表示',
    myFavorites: 'お気に入り',
    noFavorites: 'お気に入りがありません',
    addFavoritesHint: 'ラジオカードのハートアイコンをクリックしてお気に入りに追加',
    browseAll: 'すべてのラジオを閲覧',
    
    // Stats
    totalStations: '全 {count} ステーション',
    showingFavorites: 'お気に入りを表示中',
    
    // Empty state
    noStationsFound: 'ラジオが見つかりません',
    tryDifferentSearch: '別のキーワードを試すか、別のカテゴリを選択してください',
    
    // Player
    nowPlaying: '再生中',
    play: '再生',
    pause: '一時停止',
    loading: '読み込み中',
    
    // Genres
    genres: {
      all: 'すべて',
      music: '音楽',
      news: 'ニュース',
      sports: 'スポーツ',
      talk: 'トーク'
    },
    
    // Background play notification
    backgroundPlaying: 'バックグラウンド再生中',
    backgroundPlayHint: 'アプリを切り替えても、画面をロックしても音楽は続きます',
    
    // Error messages
    playError: 'このラジオを再生できません。別のラジオをお試しください',
    
    // Language switch
    language: '言語',
    chinese: '中文',
    japanese: '日本語'
  }
};

export function useTranslation(lang: Language) {
  return translations[lang];
}
