export interface StatisticsRequest {
  lowerLimit: number;
  upperLimit: number;
  values: number[];
}

export interface StatisticsResult {
  mean: number;
  median: number;
  stdDeviation: number;
  variance: number;
  outOfSpecCount: number;
}
