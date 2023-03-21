/** 카테고리 */
export type ChartCategory =
  | string
  | number
  | {
      name: string | number;
      categories: ChartCategory[];
    };

/** 막대차트 데이터 */
export type ColumnChart = {
  categories: number[];
  data: {
    [key in string]: {
      value: number;
      tooltip: {
        [pos in 'top' | 'bottom']: {
          message: string;
          value: string;
        };
      };
    };
  };
};

/**
 * 누적막대차트 데이터
 */
export type StackedColumnChart = {
  [key: string]: {
    name: string;
    categories: string[] | ChartCategory[];
    data: number[];
  };
};
