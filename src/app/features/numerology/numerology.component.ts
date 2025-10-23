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
    return this.getNumberDescription(this.reading.personalYear, 'year');
  }

  getPersonalMonthDescription(): string {
    if (!this.reading?.personalMonth) return '';
    return this.getNumberDescription(this.reading.personalMonth, 'month');
  }

  getPersonalDayDescription(): string {
    if (!this.reading?.personalDay) return '';
    return this.getNumberDescription(this.reading.personalDay, 'day');
  }

  private getNumberDescription(number: number, type: 'year' | 'month' | 'day' = 'year'): string {
    const descriptions = {
      year: [
        `Năm của sự khởi đầu mới và lãnh đạo. Đây là thời điểm tuyệt vời để bắt đầu dự án mới, đặt mục tiêu mới và thể hiện khả năng lãnh đạo của bạn. Năng lượng số 1 mang đến sự độc lập và quyết tâm.`,
        `Năm của hợp tác và cân bằng. Đây là thời điểm để xây dựng mối quan hệ, hợp tác với người khác và tìm kiếm sự hòa hợp. Số 2 mang đến năng lượng nhạy cảm và ngoại giao.`,
        `Năm của sáng tạo và giao tiếp. Đây là thời điểm để thể hiện bản thân, phát triển tài năng nghệ thuật và mở rộng mạng lưới xã hội. Số 3 mang đến niềm vui và lạc quan.`,
        `Năm của ổn định và xây dựng nền tảng. Đây là thời điểm để làm việc chăm chỉ, tổ chức lại cuộc sống và xây dựng nền tảng vững chắc cho tương lai. Số 4 đại diện cho sự kiên nhẫn và kỷ luật.`,
        `Năm của tự do và thay đổi. Đây là thời điểm để khám phá, phiêu lưu và chấp nhận những trải nghiệm mới. Số 5 mang đến sự linh hoạt và thích nghi.`,
        `Năm của trách nhiệm gia đình và chăm sóc. Đây là thời điểm để tập trung vào gia đình, nhà cửa và các mối quan hệ gần gũi. Số 6 đại diện cho tình yêu thương và sự hy sinh.`,
        `Năm của tâm linh và khám phá nội tâm. Đây là thời điểm để học hỏi, nghiên cứu và phát triển trí tuệ. Số 7 mang đến sự khôn ngoan và chiều sâu tâm hồn.`,
        `Năm của thành công vật chất và quyền lực. Đây là thời điểm để tập trung vào sự nghiệp, tài chính và đạt được thành tựu. Số 8 đại diện cho sự thịnh vượng và quyền lực.`,
        `Năm của hoàn thành và nhân đạo. Đây là thời điểm để kết thúc chu kỳ, buông bỏ những gì không còn phù hợp và phục vụ cộng đồng. Số 9 đại diện cho sự hoàn thiện và lòng vị tha.`
      ],
      month: [
        `Tháng của sáng kiến mới. Thời điểm tốt để bắt đầu các dự án mới và thể hiện khả năng lãnh đạo.`,
        `Tháng của hợp tác. Tập trung vào các mối quan hệ và tìm kiếm sự hòa hợp trong giao tiếp.`,
        `Tháng sáng tạo. Thể hiện bản thân và tận hưởng niềm vui trong giao tiếp xã hội.`,
        `Tháng ổn định. Tập trung vào công việc và xây dựng nền tảng vững chắc.`,
        `Tháng của sự thay đổi. Sẵn sàng đón nhận những điều mới mẻ và phiêu lưu.`,
        `Tháng của gia đình. Dành thời gian chăm sóc người thân và tạo không gian ấm cúng.`,
        `Tháng chiêm nghiệm. Dành thời gian cho bản thân, học hỏi và phát triển nội tâm.`,
        `Tháng thành công. Tập trung vào mục tiêu tài chính và sự nghiệp.`,
        `Tháng kết thúc. Hoàn thành công việc dở dang và chuẩn bị cho khởi đầu mới.`
      ],
      day: [
        `Ngày hành động. Tập trung vào các mục tiêu cá nhân và thể hiện sự độc lập.`,
        `Ngày hợp tác. Làm việc nhóm hiệu quả và thể hiện sự nhạy cảm với người khác.`,
        `Ngày sáng tạo. Thể hiện bản thân thông qua nghệ thuật và giao tiếp.`,
        `Ngày tổ chức. Sắp xếp công việc và xây dựng nền tảng vững chắc.`,
        `Ngày thay đổi. Mở lòng đón nhận những điều bất ngờ và mới mẻ.`,
        `Ngày yêu thương. Chăm sóc gia đình và tạo sự hòa thuận trong các mối quan hệ.`,
        `Ngày chiêm nghiệm. Dành thời gian cho bản thân và phát triển tâm linh.`,
        `Ngày thành công. Tập trung vào mục tiêu tài chính và đạt được kết quả.`,
        `Ngày hoàn thiện. Kết thúc công việc và chuẩn bị cho điều mới mẻ.`
      ]
    };

    return descriptions[type]?.[number - 1] || `Năng lượng số ${number} - ${['', 'Lãnh đạo', 'Hợp tác', 'Sáng tạo', 'Ổn định', 'Tự do', 'Trách nhiệm', 'Tâm linh', 'Thành công', 'Nhân đạo'][number]}`;
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
