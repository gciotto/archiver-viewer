import { TIME_IDS } from "../../lib/timeAxisPreferences";
export interface ChartState {
  actionsStack: any[];
  autoScroll: boolean;
  dataAxis: any[]; // @todo: Transform into an object
  datasets: any[]; // @todo: Transform into an object
  loading: boolean;
  singleTooltip: boolean;
  timeEnd: string;
  timeReferenceEnd: boolean;
  timeStart: string;
  windowTime: number;
  zooming: boolean;
}

const initialState: ChartState = {
  actionsStack: [],
  autoScroll: false,
  dataAxis: [], // @todo: Transform into an object
  datasets: [], // @todo: Transform into an object
  loading: false,
  singleTooltip: true,
  timeEnd: null,
  timeReferenceEnd: true,
  timeStart: null,
  windowTime: TIME_IDS.MIN_30,
  zooming: false,
};
export default initialState;