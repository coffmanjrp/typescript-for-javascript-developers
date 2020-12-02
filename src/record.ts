export {};

// Record<K, T>

type Prefectures = 'Tokyo' | 'Hokkaido' | 'Okinawa' | 'Shiga';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

// const covid19Japan: {
//   Tokyo: Covid19InfectionInfo;
//   Hokkaido: Covid19InfectionInfo;
//   Okinawa: Covid19InfectionInfo;
//   Shiga: Covid19InfectionInfo;
// } = {
//   Tokyo: {
//     kanji_name: '東京',
//     confirmed_cases: 41311,
//   },
//   Hokkaido: {
//     kanji_name: '北海道',
//     confirmed_cases: 9075,
//   },
//   Okinawa: {
//     kanji_name: '沖縄',
//     confirmed_cases: 4353,
//   },
//   Shiga: {
//     kanji_name: '滋賀',
//     confirmed_cases: true,
//   },
// };

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: {
    kanji_name: '東京',
    confirmed_cases: 41311,
  },
  Hokkaido: {
    kanji_name: '北海道',
    confirmed_cases: 9075,
  },
  Okinawa: {
    kanji_name: '沖縄',
    confirmed_cases: 4353,
  },
  Shiga: {
    kanji_name: '滋賀',
    confirmed_cases: 793,
  },
};
