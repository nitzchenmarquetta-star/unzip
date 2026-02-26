export interface RadioStation {
  id: string;
  name: string;
  country: string;
  countryJa: string;
  countryCode: string;
  genre: string;
  description: string;
  descriptionJa: string;
  streamUrl: string;
  language: string;
  languageJa: string;
}

export const radioStations: RadioStation[] = [
  // 新闻电台
  {
    id: "bbc-world",
    name: "BBC World Service",
    country: "英国",
    countryJa: "イギリス",
    countryCode: "GB",
    genre: "news",
    description: "全球最具影响力的新闻广播，提供40多种语言的节目",
    descriptionJa: "世界で最も影響力のあるニュース放送局、40以上の言語で放送",
    streamUrl: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "npr",
    name: "NPR News",
    country: "美国",
    countryJa: "アメリカ",
    countryCode: "US",
    genre: "news",
    description: "美国公共广播电台，提供深度新闻和访谈",
    descriptionJa: "アメリカ公共ラジオ、深いニュースとインタビューを提供",
    streamUrl: "https://npr-ice.streamguys1.com/live.mp3",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "cnn",
    name: "CNN Radio",
    country: "美国",
    countryJa: "アメリカ",
    countryCode: "US",
    genre: "news",
    description: "CNN新闻广播，实时报道全球重大事件",
    descriptionJa: "CNNニュースラジオ、世界の重大ニュースをリアルタイムで報道",
    streamUrl: "https://tunein.streamguys1.com/cnn",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "france-info",
    name: "France Info",
    country: "法国",
    countryJa: "フランス",
    countryCode: "FR",
    genre: "news",
    description: "法国24小时新闻广播电台",
    descriptionJa: "フランスの24時間ニュースラジオ放送局",
    streamUrl: "https://icecast.radiofrance.fr/franceinfo-midfi.mp3",
    language: "法语",
    languageJa: "フランス語"
  },
  {
    id: "deutsche-welle",
    name: "Deutsche Welle",
    country: "德国",
    countryJa: "ドイツ",
    countryCode: "DE",
    genre: "news",
    description: "德国之声国际广播电台",
    descriptionJa: "ドイツの国際放送局、ドイチェ・ヴェレ",
    streamUrl: "https://dw.audiostream.io/dw/1028/mp3/64/dw",
    language: "德语/英语",
    languageJa: "ドイツ語/英語"
  },
  {
    id: "radio-china",
    name: "中国之声",
    country: "中国",
    countryJa: "中国",
    countryCode: "CN",
    genre: "news",
    description: "中央人民广播电台中国之声",
    descriptionJa: "中国中央人民ラジオ放送・中国の声",
    streamUrl: "https://lhttp.qingting.fm/live/386/64k.mp3",
    language: "中文",
    languageJa: "中国語"
  },
  {
    id: "nhk-world",
    name: "NHK World Radio",
    country: "日本",
    countryJa: "日本",
    countryCode: "JP",
    genre: "news",
    description: "日本放送协会国际广播，提供日语和英语新闻",
    descriptionJa: "NHKワールドラジオ、日本語と英語のニュースを提供",
    streamUrl: "https://nhkworld.webcdn.stream.ne.jp/nhk-world-radio/playlist.m3u8",
    language: "日语/英语",
    languageJa: "日本語/英語"
  },

  // 音乐电台
  {
    id: "kexp",
    name: "KEXP 90.3 FM",
    country: "美国",
    countryJa: "アメリカ",
    countryCode: "US",
    genre: "music",
    description: "西雅图独立音乐电台，发现新音乐的绝佳去处",
    descriptionJa: "シアトルのインディーミュージック局、新しい音楽を発見する最高の場所",
    streamUrl: "https://kexp-mp3-128.streamguys1.com/kexp128.mp3",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "nts-1",
    name: "NTS Radio 1",
    country: "英国",
    countryJa: "イギリス",
    countryCode: "GB",
    genre: "music",
    description: "伦敦实验音乐电台，前卫与创新的音乐体验",
    descriptionJa: "ロンドンの実験音楽ラジオ、前衛的で革新的な音楽体験",
    streamUrl: "https://stream-relay-geo.ntslive.net/stream",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "nts-2",
    name: "NTS Radio 2",
    country: "英国",
    countryJa: "イギリス",
    countryCode: "GB",
    genre: "music",
    description: "NTS第二频道，更多元化的音乐选择",
    descriptionJa: "NTS第2チャンネル、より多様な音楽選択",
    streamUrl: "https://stream-relay-geo.ntslive.net/stream2",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "rinse-fm",
    name: "Rinse FM",
    country: "英国",
    countryJa: "イギリス",
    countryCode: "GB",
    genre: "music",
    description: "伦敦电子音乐传奇电台，近30年电音文化先锋",
    descriptionJa: "ロンドンの電子音楽レジェンド局、30年の電音文化の先駆者",
    streamUrl: "https://rinse.fm/streams/rinse_fm_mp3",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "kcrw",
    name: "KCRW 89.9 FM",
    country: "美国",
    countryJa: "アメリカ",
    countryCode: "US",
    genre: "music",
    description: "洛杉矶公共电台，音乐与文化节目的领导者",
    descriptionJa: "ロサンゼルスの公共ラジオ、音楽と文化番組のリーダー",
    streamUrl: "https://kcrw.streamguys1.com/kcrw_192k_mp3_on_air",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "worldwide-fm",
    name: "Worldwide FM",
    country: "英国",
    countryJa: "イギリス",
    countryCode: "GB",
    genre: "music",
    description: "Gilles Peterson创办的全球音乐之旅",
    descriptionJa: "ジル・ピーターソンが創設した世界音楽の旅",
    streamUrl: "https://worldwidefm.out.airtime.pro/worldwidefm_a",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "dublab",
    name: "Dublab",
    country: "美国",
    countryJa: "アメリカ",
    countryCode: "US",
    genre: "music",
    description: "洛杉矶非营利音乐电台，支持独立艺术家",
    descriptionJa: "ロサンゼルスの非営利音楽ラジオ、インディーズアーティストを支援",
    streamUrl: "https://dublab.out.airtime.pro/dublab_a",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "the-lot",
    name: "The Lot Radio",
    country: "美国",
    countryJa: "アメリカ",
    countryCode: "US",
    genre: "music",
    description: "纽约布鲁克林地下音乐电台",
    descriptionJa: "ニューヨーク・ブルックリンのアンダーグラウンド音楽ラジオ",
    streamUrl: "https://thelot.out.airtime.pro/thelot_a",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "di-fm",
    name: "DI.FM",
    country: "美国",
    countryJa: "アメリカ",
    countryCode: "US",
    genre: "music",
    description: "全球最大电子音乐电台网络",
    descriptionJa: "世界最大の電子音楽ラジオネットワーク",
    streamUrl: "https://pub1.diforfree.org/di_eurodance_hi",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "jazz24",
    name: "Jazz24",
    country: "美国",
    countryJa: "アメリカ",
    countryCode: "US",
    genre: "music",
    description: "24小时爵士乐电台",
    descriptionJa: "24時間ジャズ音楽ラジオ",
    streamUrl: "https://live.wostreaming.net/direct/ppm-jazz24mp3-ibc1",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "classical-mpr",
    name: "Classical MPR",
    country: "美国",
    countryJa: "アメリカ",
    countryCode: "US",
    genre: "music",
    description: "明尼苏达公共电台古典音乐频道",
    descriptionJa: "ミネソタ公共ラジオ・クラシック音楽チャンネル",
    streamUrl: "https://cms.stream.publicradio.org/cms.mp3",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "radio-paradise",
    name: "Radio Paradise",
    country: "美国",
    countryJa: "アメリカ",
    countryCode: "US",
    genre: "music",
    description: "听众支持的 eclectic 摇滚音乐电台",
    descriptionJa: "リスナー支援のエクレクティック・ロック音楽ラジオ",
    streamUrl: "https://stream.radioparadise.com/aac-320",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "somafm-groove",
    name: "SomaFM Groove Salad",
    country: "美国",
    countryJa: "アメリカ",
    countryCode: "US",
    genre: "music",
    description: "环境电子音乐，轻松惬意的听觉体验",
    descriptionJa: "アンビエント電子音楽、リラックスした聴覚体験",
    streamUrl: "https://ice4.somafm.com/groovesalad-128-mp3",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "somafm-lush",
    name: "SomaFM Lush",
    country: "美国",
    countryJa: "アメリカ",
    countryCode: "US",
    genre: "music",
    description: "女声主导的独立流行音乐",
    descriptionJa: "女性ボーカル中心のインディーポップ音楽",
    streamUrl: "https://ice4.somafm.com/lush-128-mp3",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "j1-hits",
    name: "J1 Hits",
    country: "日本",
    countryJa: "日本",
    countryCode: "JP",
    genre: "music",
    description: "日本最新流行歌曲电台",
    descriptionJa: "日本の最新ヒット曲ラジオ、J-POPを24時間放送",
    streamUrl: "https://jenny.torontocast.com:2000/stream/j1hits/stream",
    language: "日语",
    languageJa: "日本語"
  },
  {
    id: "j1-gold",
    name: "J1 Gold",
    country: "日本",
    countryJa: "日本",
    countryCode: "JP",
    genre: "music",
    description: "日本流行金曲电台",
    descriptionJa: "日本のゴールデンヒット曲ラジオ、懐かしいJ-POP",
    streamUrl: "https://jenny.torontocast.com:2000/stream/j1gold/stream",
    language: "日语",
    languageJa: "日本語"
  },
  {
    id: "jpop-sakura",
    name: "J-Pop Sakura",
    country: "日本",
    countryJa: "日本",
    countryCode: "JP",
    genre: "music",
    description: "日本流行音乐电台",
    descriptionJa: "日本のポピュラーミュージックラジオ、桜のような美しい音楽",
    streamUrl: "https://cast1.torontocast.com:2170/stream",
    language: "日语",
    languageJa: "日本語"
  },
  {
    id: "fm-yokohama",
    name: "FM Yokohama",
    country: "日本",
    countryJa: "日本",
    countryCode: "JP",
    genre: "music",
    description: "横滨都市音乐电台",
    descriptionJa: "横浜の都市音楽ラジオ、最新のヒット曲をお届け",
    streamUrl: "https://fmyokohama.stream.ne.jp/fmyokohama/stream.mp3",
    language: "日语",
    languageJa: "日本語"
  },

  // 体育电台
  {
    id: "espn-radio",
    name: "ESPN Radio",
    country: "美国",
    countryJa: "アメリカ",
    countryCode: "US",
    genre: "sports",
    description: "全球领先的体育广播电台",
    descriptionJa: "世界をリードするスポーツラジオ放送局",
    streamUrl: "https://live.wostreaming.net/direct/espn-networkmp3-48",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "fox-sports",
    name: "Fox Sports Radio",
    country: "美国",
    countryJa: "アメリカ",
    countryCode: "US",
    genre: "sports",
    description: "福克斯体育广播网络",
    descriptionJa: "フォックス・スポーツ・ラジオ・ネットワーク",
    streamUrl: "https://stream.revma.ihrhls.com/zc4732",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "talksport",
    name: "TalkSPORT",
    country: "英国",
    countryJa: "イギリス",
    countryCode: "GB",
    genre: "sports",
    description: "英国最大的体育广播电台",
    descriptionJa: "イギリス最大のスポーツラジオ放送局",
    streamUrl: "https://radio.talksport.com/stream",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "nbs-sports",
    name: "NBS Sports Radio",
    country: "日本",
    countryJa: "日本",
    countryCode: "JP",
    genre: "sports",
    description: "日本体育广播，棒球和相扑赛事直播",
    descriptionJa: "日本スポーツラジオ、野球と相撲の試合を生放送",
    streamUrl: "https://radio-stream.nhk.jp/sports/stream.mp3",
    language: "日语",
    languageJa: "日本語"
  },

  // 谈话/文化电台
  {
    id: "wnyc",
    name: "WNYC 93.9 FM",
    country: "美国",
    countryJa: "アメリカ",
    countryCode: "US",
    genre: "talk",
    description: "纽约公共广播电台",
    descriptionJa: "ニューヨーク公共ラジオ放送局",
    streamUrl: "https://fm939.wnyc.org/wnycfm-web",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "wbez",
    name: "WBEZ 91.5 FM",
    country: "美国",
    countryJa: "アメリカ",
    countryCode: "US",
    genre: "talk",
    description: "芝加哥公共电台，This American Life 的发源地",
    descriptionJa: "シカゴ公共ラジオ、「This American Life」の発祥地",
    streamUrl: "https://stream.wbez.org/wbez128",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "bbc-radio-4",
    name: "BBC Radio 4",
    country: "英国",
    countryJa: "イギリス",
    countryCode: "GB",
    genre: "talk",
    description: "BBC谈话和文化节目电台",
    descriptionJa: "BBCトーク＆カルチャー番組ラジオ",
    streamUrl: "https://stream.live.vc.bbcmedia.co.uk/bbc_radio_fourfm",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "bbc-radio-6",
    name: "BBC 6 Music",
    country: "英国",
    countryJa: "イギリス",
    countryCode: "GB",
    genre: "music",
    description: "BBC另类音乐电台",
    descriptionJa: "BBCオルタナティブ・ミュージック・ラジオ",
    streamUrl: "https://stream.live.vc.bbcmedia.co.uk/bbc_6music",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "tbs-radio",
    name: "TBS Radio",
    country: "日本",
    countryJa: "日本",
    countryCode: "JP",
    genre: "talk",
    description: "东京放送，日本知名谈话节目电台",
    descriptionJa: "TBSラジオ、日本の有名トーク番組放送局",
    streamUrl: "https://radiko.jp/v3/station/stream/TBS.m3u8",
    language: "日语",
    languageJa: "日本語"
  },

  // 亚洲电台
  {
    id: "kbs-world",
    name: "KBS World Radio",
    country: "韩国",
    countryJa: "韓国",
    countryCode: "KR",
    genre: "news",
    description: "韩国国际广播电台",
    descriptionJa: "韓国国際放送局、KBSワールド・ラジオ",
    streamUrl: "https://world.kbs.co.kr/live_stream/stream.mp3",
    language: "韩语/英语",
    languageJa: "韓国語/英語"
  },
  {
    id: "arirang",
    name: "Arirang Radio",
    country: "韩国",
    countryJa: "韓国",
    countryCode: "KR",
    genre: "music",
    description: "韩国国际音乐广播",
    descriptionJa: "韓国国際音楽放送、アリラン・ラジオ",
    streamUrl: "https://amdlive-ch01-ctnd-com.akamaized.net/arirang_radio/arirang_radio_audio.m3u8",
    language: "英语/韩语",
    languageJa: "英語/韓国語"
  },
  {
    id: "radio-taiwan",
    name: "RTI 中央广播电台",
    country: "中国台湾",
    countryJa: "台湾",
    countryCode: "TW",
    genre: "news",
    description: "台湾国际广播电台",
    descriptionJa: "台湾国際放送局、ラジオ台湾インターナショナル",
    streamUrl: "https://stream.rti.org.tw/live/RTI-1",
    language: "中文",
    languageJa: "中国語"
  },

  // 欧洲其他电台
  {
    id: "radio-france",
    name: "Radio France",
    country: "法国",
    countryJa: "フランス",
    countryCode: "FR",
    genre: "music",
    description: "法国公共音乐电台",
    descriptionJa: "フランス公共音楽ラジオ、FIP",
    streamUrl: "https://icecast.radiofrance.fr/fip-midfi.mp3",
    language: "法语",
    languageJa: "フランス語"
  },
  {
    id: "radio-nova",
    name: "Radio Nova",
    country: "法国",
    countryJa: "フランス",
    countryCode: "FR",
    genre: "music",
    description: "巴黎独立音乐电台",
    descriptionJa: "パリのインディーミュージック・ラジオ",
    streamUrl: "https://novazz.ice.infomaniak.ch/novazz-128.mp3",
    language: "法语",
    languageJa: "フランス語"
  },
  {
    id: "wdr-2",
    name: "WDR 2",
    country: "德国",
    countryJa: "ドイツ",
    countryCode: "DE",
    genre: "music",
    description: "德国西部广播电台",
    descriptionJa: "ドイツ西部放送局、WDR 2",
    streamUrl: "https://wdr-wdr2-rheinland.icecastssl.wdr.de/wdr/wdr2/rheinland/mp3/128/stream.mp3",
    language: "德语",
    languageJa: "ドイツ語"
  },
  {
    id: "radio-1-be",
    name: "Radio 1 Belgium",
    country: "比利时",
    countryJa: "ベルギー",
    countryCode: "BE",
    genre: "music",
    description: "比利时另类音乐电台",
    descriptionJa: "ベルギーのオルタナティブ・ミュージック・ラジオ",
    streamUrl: "https://icecast.vrtcdn.be/radio1_high.mp3",
    language: "荷兰语",
    languageJa: "オランダ語"
  },
  {
    id: "studio-brussel",
    name: "Studio Brussel",
    country: "比利时",
    countryJa: "ベルギー",
    countryCode: "BE",
    genre: "music",
    description: "比利时青年音乐电台",
    descriptionJa: "ベルギーの若者向け音楽ラジオ、スタジオ・ブリュッセル",
    streamUrl: "https://icecast.vrtcdn.be/stubru_high.mp3",
    language: "荷兰语",
    languageJa: "オランダ語"
  },
  {
    id: "radio-3-nl",
    name: "NPO 3FM",
    country: "荷兰",
    countryJa: "オランダ",
    countryCode: "NL",
    genre: "music",
    description: "荷兰公共青年音乐电台",
    descriptionJa: "オランダ公共若者音楽ラジオ、NPO 3FM",
    streamUrl: "https://icecast.omroep.nl/3fm-bb-mp3",
    language: "荷兰语",
    languageJa: "オランダ語"
  },
  {
    id: "radio-2-nl",
    name: "NPO Radio 2",
    country: "荷兰",
    countryJa: "オランダ",
    countryCode: "NL",
    genre: "music",
    description: "荷兰成人当代音乐电台",
    descriptionJa: "オランダのアダルト・コンテンポラリー音楽ラジオ",
    streamUrl: "https://icecast.omroep.nl/radio2-bb-mp3",
    language: "荷兰语",
    languageJa: "オランダ語"
  },

  // 拉丁音乐
  {
    id: "klove",
    name: "K-Love",
    country: "美国",
    countryJa: "アメリカ",
    countryCode: "US",
    genre: "music",
    description: "当代基督教音乐电台",
    descriptionJa: "コンテンポラリー・クリスチャン・ミュージック・ラジオ",
    streamUrl: "https://emf.streamguys1.com/sk001_mp3_high_web",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "latin-pop",
    name: "Latin Pop",
    country: "墨西哥",
    countryJa: "メキシコ",
    countryCode: "MX",
    genre: "music",
    description: "拉丁流行音乐电台",
    descriptionJa: "ラテン・ポップ・ミュージック・ラジオ",
    streamUrl: "https://stream.revma.ihrhls.com/zc4422",
    language: "西班牙语",
    languageJa: "スペイン語"
  },

  // 澳大利亚
  {
    id: "triple-j",
    name: "Triple J",
    country: "澳大利亚",
    countryJa: "オーストラリア",
    countryCode: "AU",
    genre: "music",
    description: "澳大利亚国家青年音乐电台",
    descriptionJa: "オーストラリア国営若者音楽ラジオ、トリプルJ",
    streamUrl: "https://live-radio01.mediahubaustralia.com/2JJ/mp3/",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "abc-news",
    name: "ABC News Radio",
    country: "澳大利亚",
    countryJa: "オーストラリア",
    countryCode: "AU",
    genre: "news",
    description: "澳大利亚广播公司新闻电台",
    descriptionJa: "オーストラリア放送協会ニュースラジオ",
    streamUrl: "https://live-radio01.mediahubaustralia.com/PBW/mp3/",
    language: "英语",
    languageJa: "英語"
  },

  // 加拿大
  {
    id: "cbc-radio-1",
    name: "CBC Radio 1",
    country: "加拿大",
    countryJa: "カナダ",
    countryCode: "CA",
    genre: "news",
    description: "加拿大广播公司新闻电台",
    descriptionJa: "カナダ放送協会ニュースラジオ、CBC Radio 1",
    streamUrl: "https://cbcradiolive.akamaized.net/hls/live/2041057/ES_R1V_MTL/master.m3u8",
    language: "英语",
    languageJa: "英語"
  },
  {
    id: "cbc-music",
    name: "CBC Music",
    country: "加拿大",
    countryJa: "カナダ",
    countryCode: "CA",
    genre: "music",
    description: "加拿大广播公司音乐电台",
    descriptionJa: "カナダ放送協会音楽ラジオ、CBC Music",
    streamUrl: "https://cbcradiolive.akamaized.net/hls/live/2041059/ES_R2V_TOR/master.m3u8",
    language: "英语",
    languageJa: "英語"
  }
];

export const genres = [
  { id: "all", name: "全部", nameJa: "すべて", icon: "🌍" },
  { id: "music", name: "音乐", nameJa: "音楽", icon: "🎵" },
  { id: "news", name: "新闻", nameJa: "ニュース", icon: "📰" },
  { id: "sports", name: "体育", nameJa: "スポーツ", icon: "⚽" },
  { id: "talk", name: "谈话", nameJa: "トーク", icon: "💬" }
];

export const countries = [
  { code: "US", name: "美国", nameJa: "アメリカ", flag: "🇺🇸" },
  { code: "GB", name: "英国", nameJa: "イギリス", flag: "🇬🇧" },
  { code: "CN", name: "中国", nameJa: "中国", flag: "🇨🇳" },
  { code: "JP", name: "日本", nameJa: "日本", flag: "🇯🇵" },
  { code: "KR", name: "韩国", nameJa: "韓国", flag: "🇰🇷" },
  { code: "FR", name: "法国", nameJa: "フランス", flag: "🇫🇷" },
  { code: "DE", name: "德国", nameJa: "ドイツ", flag: "🇩🇪" },
  { code: "CA", name: "加拿大", nameJa: "カナダ", flag: "🇨🇦" },
  { code: "AU", name: "澳大利亚", nameJa: "オーストラリア", flag: "🇦🇺" },
  { code: "NL", name: "荷兰", nameJa: "オランダ", flag: "🇳🇱" },
  { code: "BE", name: "比利时", nameJa: "ベルギー", flag: "🇧🇪" },
  { code: "MX", name: "墨西哥", nameJa: "メキシコ", flag: "🇲🇽" },
  { code: "TW", name: "中国台湾", nameJa: "台湾", flag: "🇹🇼" }
];
