export const TIME_AXIS_ID = "x-axis-0";
export const TIME_AXIS_INDEX = 0;
export const TIME_IDS = {
  YEAR: 0,
  MONTH_9: 1,
  MONTH_6: 2,
  MONTH_3: 3,
  MONTH_1: 4,
  WEEK2: 5,
  WEEK1: 6,
  DAY25: 7,
  DAY1: 8,
  HOUR18: 9,
  HOUR12: 10,
  HOUR_8: 11,
  HOUR_4: 12,
  HOUR2: 13,
  HOUR1: 14,
  MIN_30: 15,
  MIN10: 16,
  MIN_5: 17,
  MIN1: 18,
  SEG_30: 19,
};
export const TIME_AXIS_PREFERENCES = [
  {
    // 1 year
    text: "1Y",
    unit: "month",
    unitStepSize: 2,
    milliseconds: 365 * 24 * 3600 * 1000,
    optimized: true,
    bins: 2000,
    id: TIME_IDS.YEAR,
  },
  {
    // 9 month
    text: "9M",
    unit: "day",
    unitStepSize: 4,
    milliseconds: 9 * 30 * 24 * 3600 * 1000,
    optimized: true,
    bins: 1200,
    id: TIME_IDS.MONTH_9,
  },
  {
    // 6 month
    text: "6M",
    unit: "day",
    unitStepSize: 4,
    milliseconds: 6 * 30 * 24 * 3600 * 1000,
    optimized: true,
    bins: 1200,
    id: TIME_IDS.MONTH_6,
  },
  {
    // 3 month
    text: "3M",
    unit: "day",
    unitStepSize: 4,
    milliseconds: 3 * 30 * 24 * 3600 * 1000,
    optimized: true,
    bins: 1200,
    id: TIME_IDS.MONTH_3,
  },
  {
    // 1 month
    text: "1M",
    unit: "day",
    unitStepSize: 4,
    milliseconds: 30 * 24 * 3600 * 1000,
    optimized: true,
    bins: 800,
    id: TIME_IDS.MONTH,
  },
  {
    // 2 weeks
    text: "2w",
    unit: "day",
    unitStepSize: 2,
    milliseconds: 2 * 7 * 24 * 3600 * 1000,
    optimized: true,
    bins: 800,
    id: TIME_IDS.WEEK2,
  },
  {
    // 1 week
    text: "1w",
    unit: "day",
    unitStepSize: 2,
    milliseconds: 7 * 24 * 3600 * 1000,
    optimized: true,
    bins: 800,
    id: TIME_IDS.WEEK1,
  },
  {
    // 2.5 days
    text: "2.5d",
    unit: "hour",
    unitStepSize: 12,
    milliseconds: 2.5 * 24 * 3600 * 1000,
    optimized: true,
    bins: 800,
    id: TIME_IDS.DAY25,
  },
  {
    // 1 day
    text: "1d",
    unit: "hour",
    unitStepSize: 3,
    milliseconds: 24 * 3600 * 1000,
    optimized: true,
    bins: 800,
    id: TIME_IDS.DAY1,
  },
  {
    // 18 hours
    text: "18h",
    unit: "hour",
    unitStepSize: 2,
    milliseconds: 18 * 3600 * 1000,
    optimized: true,
    bins: 800,
    id: TIME_IDS.HOUR18,
  },
  {
    // 12 hours
    text: "12h",
    unit: "hour",
    unitStepSize: 2,
    milliseconds: 12 * 3600 * 1000,
    optimized: true,
    bins: 800,
    id: TIME_IDS.HOUR12,
  },
  {
    // 8 hours
    text: "8h",
    unit: "hour",
    unitStepSize: 2,
    milliseconds: 8 * 3600 * 1000,
    optimized: true,
    bins: 800,
    id: TIME_IDS.HOUR_8,
  },
  {
    // 4 hours
    text: "4h",
    unit: "hour",
    unitStepSize: 2,
    milliseconds: 4 * 3600 * 1000,
    optimized: true,
    bins: 400,
    id: TIME_IDS.HOUR_4,
  },
  {
    // 2 hours
    text: "2h",
    unit: "minute",
    unitStepSize: 15,
    milliseconds: 2 * 3600 * 1000,
    optimized: true,
    bins: 400,
    id: TIME_IDS.HOUR2,
  },
  {
    // 1 hour
    text: "1h",
    unit: "minute",
    unitStepSize: 15,
    milliseconds: 3600 * 1000,
    optimized: false,
    bins: 200,
    id: TIME_IDS.HOUR1,
  },
  {
    // 30 minutes
    text: "30m",
    unit: "minute",
    unitStepSize: 3,
    milliseconds: 30 * 60 * 1000,
    optimized: false,
    bins: 200,
    id: TIME_IDS.MIN_30,
  },
  {
    // 10 minutes
    text: "10m",
    unit: "minute",
    unitStepSize: 2,
    milliseconds: 10 * 60 * 1000,
    optimized: false,
    bins: 50,
    id: TIME_IDS.MIN10,
  },
  {
    // 5 minutes
    text: "5m",
    unit: "second",
    unitStepSize: 30,
    milliseconds: 5 * 60 * 1000,
    optimized: false,
    bins: 50,
    id: TIME_IDS.MIN_5,
  },
  {
    // 1 minute
    text: "1m",
    unit: "second",
    unitStepSize: 15,
    milliseconds: 60 * 1000,
    optimized: false,
    bins: 50,
    id: TIME_IDS.MIN1,
  },
  {
    // 30 seconds
    text: "30s",
    unit: "second",
    unitStepSize: 3,
    milliseconds: 30 * 1000,
    optimized: false,
    bins: 50,
    id: TIME_IDS.SEG_30,
  },
];
