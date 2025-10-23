import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';

// Configure the date format for the date picker
export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

import { NumerologyService } from './numerology.service';
import { BirthDate, NumerologyReading } from './numerology.types';

@Component({
  selector: 'app-numerology',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatChipsModule,
    MatExpansionModule,
    MatTabsModule,
  ],
  templateUrl: './numerology.component.html',
  styleUrl: './numerology.component.scss',
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'vi-VN' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ],
})
export class NumerologyComponent {
  maxDate = new Date();
  // Date picker configuration
  startDate = new Date(1990, 0, 1);
  minDate = new Date(1900, 0, 1); // Set minimum date to January 1, 1900
  numerologyForm: FormGroup;

  isCalculating = false;
  reading: NumerologyReading | null = null;

  // Date filter to prevent selecting future dates
  dateFilter = (d: Date | null): boolean => {
    if (!d) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return d >= this.minDate && d <= today;
  };

  constructor(
    private fb: FormBuilder,
    private numerologyService: NumerologyService,
  ) {
    this.numerologyForm = this.fb.group({
      birthDate: [null, [Validators.required, this.dateValidator()]],
    });
  }

  private dateValidator() {
    return (control: FormControl) => {
      const value = control.value;
      if (!value) {
        return null;
      }
      const date = value instanceof Date ? value : new Date(value);
      return isNaN(date.getTime()) ? { invalidDate: true } : null;
    };
  }

  calculateNumerology(): void {
    if (this.numerologyForm.invalid) return;

    this.isCalculating = true;
    const dateValue = this.numerologyForm.value.birthDate;

    if (!dateValue) return;

    // Convert Date object to BirthDate interface
    const birthDate: BirthDate = {
      day: new Date(dateValue).getDate(),
      month: new Date(dateValue).getMonth() + 1,
      year: new Date(dateValue).getFullYear(),
    };

    // Simulate async calculation for better UX
    setTimeout(() => {
      try {
        this.reading = this.numerologyService.calculateNumerology(birthDate);
      } catch (error) {
        console.error('Error calculating numerology:', error);
      } finally {
        this.isCalculating = false;
      }
    }, 500);
  }

  clearForm(): void {
    this.numerologyForm.reset();
    this.reading = null;
  }

  formatBirthDate(): string {
    if (!this.reading) return '';
    const { day, month, year } = this.reading.birthDate;
    return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
  }

  getPersonalYearDescription(): string {
    if (!this.reading?.personalYear) return '';
    return this.getNumberDescription(this.reading.personalYear);
  }

  getPersonalMonthDescription(): string {
    if (!this.reading?.personalMonth) return '';
    return this.getNumberDescription(this.reading.personalMonth);
  }

  getPersonalDayDescription(): string {
    if (!this.reading?.personalDay) return '';
    return this.getNumberDescription(this.reading.personalDay);
  }

  private getNumberDescription(number: number): string {
    const descriptions = [
      'New beginnings and leadership energy',
      'Cooperation and harmony',
      'Creativity and self-expression',
      'Stability and hard work',
      'Freedom and adventure',
      'Responsibility and nurturing',
      'Spiritual wisdom and analysis',
      'Power and material success',
      'Humanitarianism and completion',
    ];
    return descriptions[number - 1] || 'Unknown energy';
  }

  getMissingDigitMeaning(digit: number): string {
    const meanings: { [key: number]: string } = {
      1: 'Thiếu khả năng lãnh đạo và tính độc lập',
      2: 'Thiếu kỹ năng hợp tác và ngoại giao',
      3: 'Thiếu sự sáng tạo và khả năng biểu đạt',
      4: 'Thiếu tính ổn định và khả năng tổ chức',
      5: 'Thiếu sự tự do và khả năng thích ứng',
      6: 'Thiếu trách nhiệm và khả năng nuôi dưỡng',
      7: 'Thiếu sự hiểu biết và khả năng phân tích',
      8: 'Thiếu quyền lực và khả năng quản lý',
      9: 'Thiếu lòng nhân đạo và khả năng hoàn thành',
    };
    return meanings[digit] || 'Cần phát triển năng lượng này';
  }
}
