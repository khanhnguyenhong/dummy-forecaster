import { HexagramLine, Trigram, Hexagram, HexagramReading } from './book-of-changes.types';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { YI_JING_HEXAGRAMS, YI_JING_TRIGRAMS } from './hexagrams-data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-book-of-changes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './book-of-changes.component.html',
  styleUrl: './book-of-changes.component.scss'
})
export class BookOfChangesComponent {
  heaven = 1;
  earth = 1;
  change = 1;
  askingIssue = '';
  currentHexagram: Hexagram | null = null;
  resultHexagram: Hexagram | null = null;

  // Import hexagrams data from separate file
  private hexagrams: Hexagram[] = YI_JING_HEXAGRAMS;

  // Define the 8 trigrams (Bát Quái)
  private trigrams: Trigram[] = YI_JING_TRIGRAMS;

  isValidInput(): boolean {
    return this.heaven > 0 && this.earth > 0 && this.change > 0;
  }

  generateHexagram(): void {
    if (!this.isValidInput()) return;

    // Step 1: Convert numbers to trigrams using modulo 8
    const heavenTrigram = this.numberToTrigram(this.heaven);
    const earthTrigram = this.numberToTrigram(this.earth);

    // Step 2: Form situation hexagram by combining trigrams
    const situationLines = [...earthTrigram.lines, ...heavenTrigram.lines];

    // Step 3: Apply changes based on the changes number
    const { resultLines } = this.applyChange(situationLines, this.change - 1);

    // Step 4: Find corresponding hexagrams from database
    const situationHexagram = this.findHexagramByLines(situationLines);
    const resultHexagram = this.findHexagramByLines(resultLines);

    // Step 5: Store results
    this.currentHexagram = situationHexagram;
    console.log({resultHexagram})
    this.resultHexagram = resultHexagram;
  }

  private numberToTrigram(number: number): Trigram {
    // Convert any number to a trigram using modulo 8
    const trigramIndex = (number - 1) % 8;
    return this.trigrams[Math.abs(trigramIndex)];
  }

  private applyChange(situationLines: HexagramLine[], changeNumber: number): { resultLines: HexagramLine[] } {
    const resultLines = [...situationLines];
        const currentLine = situationLines[changeNumber];
        // Toggle yin/yang and mark as changing
        if (currentLine.type === 'yin') {
          resultLines[changeNumber] = { type: 'yang', value: 9 };
        } else if (currentLine.type === 'yang') {
          resultLines[changeNumber] = { type: 'yin', value: 6 };
        }
    return { resultLines };
  }

  private findHexagramByLines(lines: HexagramLine[]): Hexagram {
    // Find the hexagram in our database that matches the given lines
    for (const hexagram of this.hexagrams) {
      if (this.linesMatch(hexagram.lines, lines)) {
        return hexagram;
      }
    }

    // If no exact match, return the first one as fallback
    return this.hexagrams[0];
  }

  private linesMatch(lines1: HexagramLine[], lines2: HexagramLine[]): boolean {
    if (lines1.length !== lines2.length) return false;

    for (let i = 0; i < lines1.length; i++) {
      if (lines1[i].type !== lines2[i].type) return false;
    }

    return true;
  }

  getHeavenTrigram(): Trigram {
    return this.numberToTrigram(this.heaven);
  }

  getEarthTrigram(): Trigram {
    return this.numberToTrigram(this.earth);
  }

  generatePrompt(): void {
    const prompt = `Bạn là một chuyên gia kinh dịch, hãy tính giúp tôi quẻ có Thiên là ${this.heaven}, Địa là ${this.earth}, biến quẻ ${this.change} cho việc ${this.askingIssue}. Để tránh nhầm lẫn, hãy phân tính quẻ và phân tích từng bước để có quẻ hỗ, quẻ biến rồi sau đó phân tích quẻ theo 2 hướng tốt và xấu.`
    // copy prompt to clipboard
    navigator.clipboard.writeText(prompt);
  }
}
