export interface ColumnChartDataElement {
    x: number; // e.g. 2019
    y: number | null; // [0, 100]
    label: string; // e.g. 'Global Rating'
  }
  
  export type ColumnChartData = Array<ColumnChartDataElement>;
  