type d = number;

/**
 * 날짜 타입
 * @format yyyy-MM-dd
 */
export type DateYMD = `${d}${d}${d}${d}-${d}${d}-${d}${d}`;

/**
 * 날짜 타입
 * @format yyyy-MM
 */
export type DateYM = `${d}${d}${d}${d}-${d}${d}`;

/**
 * 시간 타입
 * @format HH:mm:ss
 */
export type TimeHMS = `${d}${d}:${d}${d}:${d}${d}`;

/**
 * 시간 타입
 * @format HH:mm
 */
export type TimeHM = `${d}${d}:${d}${d}`;

/**
 * 날짜 시간 타입
 * @format yyyy-MM-dd HH:mm:ss
 */
export type DateTime = `${DateYMD} ${TimeHMS}`;

/**
 * 날짜 시간 타입
 * - T 로 구분
 * @format yyyy-MM-ddTHH:mm:ss
 */
export type DateTimeWithT = `${DateYMD}T${TimeHMS}`;

/**
 * 날짜 시간 타입
 * - UTC 로 구분
 * @format yyyy-MM-ddTHH:mm:ss
 */
export type DateTimeWithUTC = `${DateYMD}T${TimeHMS}Z`;

/**
 * 분기 타입
 */
export type Quater = 1 | 2 | 3 | 4;
