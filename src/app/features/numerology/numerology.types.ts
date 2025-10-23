export interface BirthDate {
  day: number;
  month: number;
  year: number;
}

export interface LifePathNumber {
  number: number;
  explanation: string;
  characteristics: string[];
  strengths: string[];
  challenges: string[];
}

export interface BirthChartMatrix {
  positions: BirthChartPosition[][];
  chartNumber: number;
  chartDescription: string;
}

export interface BirthChartPosition {
  position: string;
  number: number;
  meaning: string;
  description: string;
}

export interface NumerologyReading {
  birthDate: BirthDate;
  lifePathNumber: LifePathNumber;
  birthChart: BirthChartMatrix;
  personalYear?: number;
  personalMonth?: number;
  personalDay?: number;
  missingDigits?: number[];
  arrowPatterns?: string[];
}

export interface NumerologyCalculationResult {
  reading: NumerologyReading;
  timestamp: Date;
}
