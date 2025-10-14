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
  trigrams?: {
    upper: Trigram;
    lower: Trigram;
  };
}

export namespace Hexagram {
  export function fromLines(lines: HexagramLine[], existingHexagrams: Hexagram[] = [], existingTrigrams: Trigram[] = []): Hexagram {
    // Try to find an existing hexagram with matching lines
    const existingHexagram = existingHexagrams.find(hexagram =>
      hexagram.lines.length === lines.length &&
      hexagram.lines.every((line, i) => line.type === lines[i].type)
    );

    if (existingHexagram) {

      // Add trigrams to the hexagram
      existingHexagram.trigrams = Hexagram.getTrigrams(existingHexagram, existingTrigrams);
      return existingHexagram;
    }

    // Create a new hexagram
    const hexagram: Hexagram = {
      number: -1, // Indicates a custom hexagram
      name: 'Custom Hexagram',
      interpretation: 'This is a custom hexagram generated from lines.',
      lines: [...lines] // Create a copy of the lines array
    };

    // Add trigrams to the hexagram
    hexagram.trigrams = Hexagram.getTrigrams(hexagram, existingTrigrams);

    return hexagram;
  }

  export function getTrigrams(hexagram: Hexagram, existingTrigrams: Trigram[] = []): { upper: Trigram, lower: Trigram } {
    if (hexagram.lines.length !== 6) {
      throw new Error('Hexagram must have exactly 6 lines');
    }

    const lowerLines = hexagram.lines.slice(0, 3); // Lines 1-3 (bottom to middle)
    const upperLines = hexagram.lines.slice(3);    // Lines 4-6 (middle to top)

    return {
      lower: Trigram.fromLines(lowerLines, existingTrigrams),
      upper: Trigram.fromLines(upperLines, existingTrigrams)
    };
  }
}

export namespace Trigram {
  export function fromLines(lines: HexagramLine[], existingTrigrams: Trigram[] = []): Trigram {
    // Try to find an existing trigram with matching lines
    const existingTrigram = existingTrigrams.find(trigram =>
      trigram.lines.length === lines.length &&
      trigram.lines.every((line, i) => line.type === lines[i].type)
    );

    // Return existing trigram if found, otherwise create a new one with default values
    return existingTrigram || {
      name: 'Custom Trigram',
      lines: [...lines], // Create a copy of the lines array
      nature: lines.filter(line => line.type === 'yang' || line.type === 'changing-yang').length > 1 ? 'yang' : 'yin'
    };
  }
}
