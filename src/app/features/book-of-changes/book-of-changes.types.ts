export interface HexagramLine {
  type: 'yin' | 'yang' | 'changing-yin' | 'changing-yang';
  value: number;
}

export interface Trigram {
  name: string;
  lines: HexagramLine[];
  nature: 'yang' | 'yin';
}

export interface Hexagram {
  number: number;
  name: string;
  interpretation: string;
  lines: HexagramLine[];
}
