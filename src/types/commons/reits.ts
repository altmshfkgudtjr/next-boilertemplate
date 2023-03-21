/**
 * 섹터 타입
 * @link https://docs.google.com/spreadsheets/d/1cZQVqqrqti9105eNpQV0wRZPbSQce0YDEHi2x9595Qk/edit#gid=0
 */
export type Sector =
  | '복합형'
  | '오피스형'
  | '리테일형'
  | '물류센터형'
  | '호텔형'
  | '주거형'
  | '헬스케어형'
  | '데이터센터형'
  | '인프라형'
  | '셀프스토리지형'
  | '목재형'
  | '특수형'
  | '대출형';

/**
 * 부동산타입 타입
 * @link https://docs.google.com/spreadsheets/d/1cZQVqqrqti9105eNpQV0wRZPbSQce0YDEHi2x9595Qk/edit#gid=0
 */
export type Type =
  | '오피스'
  | '리테일'
  | '물류센터'
  | '호텔'
  | '주거'
  | '헬스케어'
  | '데이터센터'
  | '인프라'
  | '셀프스토리지'
  | '목재'
  | '주유소'
  | '통신탑'
  | '카지노'
  | '주차장'
  | '교도소';

/**
 * 법적형태 타입
 * @link https://docs.google.com/spreadsheets/d/1cZQVqqrqti9105eNpQV0wRZPbSQce0YDEHi2x9595Qk/edit#gid=0
 */
export type LegalType = '위탁관리' | '자기관리' | '기업구조조정 ';

/**
 * 상장시장 타입
 * @link https://docs.google.com/spreadsheets/d/1cZQVqqrqti9105eNpQV0wRZPbSQce0YDEHi2x9595Qk/edit#gid=0
 */
export type Exchange = 'KOSPI' | 'NYSE' | 'NASDAQ' | 'TSE' | 'SGX';
