import { DataAxis, DatasetInfo } from "../../../entities/Chart/ChartJS";

export interface ChartDispatcher {
  setAxisYLimitManual(axisId: string, manual: boolean): void;
  setAxisYLimitMin(axisId: string, value?: number): void;
  setAxisYLimitMax(axisId: string, value?: number): void;
  setAxisYType(axisId: string, type: "linear" | "logarithmic"): void;
  addAxisY(dataAxisSettings: DataAxis): void;

  addDataset(dataset: DatasetInfo): void;
  setDatasetOptimized(index: number, optimized: boolean): void;
  setDatasetVisible(index: number, visible: boolean): void;
  doRemoveDataset(index: number, removeAxis: string): void;

  /** Window Time ID */
  setWindowTime(windowTime: number): void;
  setTimeReferenceEnd(timeReferenceEnd: boolean): void;
  setSingleTooltipEnabled(enabled: boolean): void;
  setZooming(zooming: boolean): void;
}
