// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IErrorAnalysisMatrix } from "@responsible-ai/core-ui";

const defaultNumBins = 8;

export interface IMatrixLegendState {
  maxMetricValue: number;
  isErrorMetric: boolean;
}

export interface IMatrixFilterState {
  selectedFeature1?: string;
  selectedFeature2?: string;
  matrixLegendState: IMatrixLegendState;
}

export interface IMatrixAreaState {
  jsonMatrix?: IErrorAnalysisMatrix;
  maxMetricValue: number;
  selectedCells?: boolean[];
  matrixFeature1?: string;
  matrixFeature2?: string;
  disableClearAll: boolean;
  disableSelectAll: boolean;
  quantileBinning: boolean;
  numBins: number;
}

export function createInitialMatrixFilterState(): IMatrixFilterState {
  return {
    matrixLegendState: { isErrorMetric: true, maxMetricValue: 0 },
    selectedFeature1: undefined,
    selectedFeature2: undefined
  };
}

export function createInitialMatrixAreaState(): IMatrixAreaState {
  return {
    disableClearAll: true,
    disableSelectAll: false,
    jsonMatrix: undefined,
    matrixFeature1: undefined,
    matrixFeature2: undefined,
    maxMetricValue: 0,
    numBins: defaultNumBins,
    quantileBinning: false,
    selectedCells: undefined
  };
}
