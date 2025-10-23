import { Injectable } from '@angular/core';
import {
  BirthDate,
  LifePathNumber,
  BirthChartMatrix,
  NumerologyReading,
  BirthChartPosition,
} from './numerology.types';

@Injectable({
  providedIn: 'root',
})
export class NumerologyService {
  private readonly LIFE_PATH_MEANINGS: { [key: number]: Omit<LifePathNumber, 'number'> } = {
    1: {
      explanation:
        'Số 1 đại diện cho sự lãnh đạo, độc lập và khởi đầu mới. Bạn là người có tinh thần lãnh đạo bẩm sinh với ý chí mạnh mẽ và quyết tâm cao.',
      characteristics: ['Độc lập', 'Tham vọng', 'Nguyên bản', 'Tiên phong', 'Kiên định'],
      strengths: ['Khả năng lãnh đạo', 'Ý chí mạnh mẽ', 'Đổi mới', 'Tự lực', 'Can đảm'],
      challenges: [
        'Cứng đầu',
        'Có vẻ kiêu ngạo',
        'Xu hướng tự cho mình là trung tâm',
        'Thiếu kiên nhẫn',
        'Khó tiếp thu lời khuyên',
      ],
    },
    2: {
      explanation:
        'Số 2 đại diện cho sự hòa hợp, hợp tác và kỹ năng ngoại giao. Bạn nhạy cảm, trực giác tốt và xuất sắc trong quan hệ đối tác và làm việc nhóm.',
      characteristics: ['Hợp tác', 'Ngoại giao', 'Nhạy cảm', 'Trực giác', 'Hòa hợp'],
      strengths: [
        'Hòa giải giỏi',
        'Trực giác mạnh mẽ',
        'Nhà ngoại giao bẩm sinh',
        'Đối tác hỗ trợ',
        'Năng khiếu nghệ thuật',
      ],
      challenges: [
        'Thiếu quyết đoán',
        'Quá nhạy cảm',
        'Tránh đối đầu',
        'Thiếu tự tin',
        'Dễ bị ảnh hưởng',
      ],
    },
    3: {
      explanation:
        'Số 3 gắn liền với sự sáng tạo, thể hiện bản thân và giao tiếp xã hội. Bạn nghệ sĩ, lạc quan và có tài năng giao tiếp bẩm sinh.',
      characteristics: ['Sáng tạo', 'Biểu cảm', 'Hướng ngoại', 'Lạc quan', 'Nhiệt tình'],
      strengths: [
        'Kỹ năng giao tiếp xuất sắc',
        'Khả năng sáng tạo',
        'Duyên dáng xã hội',
        'Tinh thần lạc quan',
        'Khả năng truyền cảm hứng',
      ],
      challenges: [
        'Dễ phân tán',
        'Hay trì hoãn',
        'Tránh trách nhiệm',
        'Quá kịch tính',
        'Khó tập trung',
      ],
    },
    4: {
      explanation:
        'Số 4 đại diện cho sự ổn định, chăm chỉ và tổ chức thực tế. Bạn đáng tin cậy, có phương pháp và xuất sắc trong việc xây dựng nền tảng vững chắc.',
      characteristics: ['Thực tế', 'Có tổ chức', 'Đáng tin cậy', 'Chăm chỉ', 'Ổn định'],
      strengths: [
        'Đạo đức làm việc mạnh mẽ',
        'Kỹ năng tổ chức',
        'Độ tin cậy',
        'Khôn ngoan thực tế',
        'Chú ý đến chi tiết',
      ],
      challenges: [
        'Cứng nhắc',
        'Bướng bỉnh',
        'Kháng cự thay đổi',
        'Quá nghiêm túc',
        'Khó biểu đạt cảm xúc',
      ],
    },
    5: {
      explanation:
        'Số 5 tượng trưng cho tự do, phiêu lưu và sự đa dạng. Bạn thích nghi tốt, tò mò và phát triển mạnh nhờ sự thay đổi và trải nghiệm mới.',
      characteristics: ['Mạo hiểm', 'Đa năng', 'Tò mò', 'Tiến bộ', 'Tự do'],
      strengths: ['Khả năng thích ứng', 'Tính tò mò', 'Đa năng', 'Tư duy tiến bộ', 'Yêu tự do'],
      challenges: [
        'Bồn chồn',
        'Thiếu trách nhiệm',
        'Khó cam kết',
        'Không đáng tin cậy',
        'Tính khí thất thường',
      ],
    },
    6: {
      explanation:
        'Số 6 là con số của trách nhiệm, sự nuôi dưỡng và phục vụ người khác. Bạn chu đáo, bảo vệ và xuất sắc trong việc tạo ra sự hòa hợp trong các mối quan hệ.',
      characteristics: ['Nuôi dưỡng', 'Có trách nhiệm', 'Hòa hợp', 'Bảo vệ', 'Nhân ái'],
      strengths: [
        'Ý thức trách nhiệm cao',
        'Khả năng nuôi dưỡng',
        'Tạo sự hòa hợp',
        'Bản năng bảo vệ',
        'Lòng trắc ẩn',
      ],
      challenges: [
        'Bảo bọc quá mức',
        'Hy sinh bản thân',
        'Lo lắng thái quá',
        'Khó từ chối',
        'Dễ phán xét',
      ],
    },
    7: {
      explanation:
        'Số 7 đại diện cho tâm linh, nội tâm và tư duy phân tích. Bạn khôn ngoan, trực giác và xuất sắc trong nghiên cứu và phân tích.',
      characteristics: ['Phân tích', 'Tâm linh', 'Nội tâm', 'Khôn ngoan', 'Bí ẩn'],
      strengths: [
        'Kỹ năng phân tích mạnh mẽ',
        'Trí tuệ tâm linh',
        'Trực giác',
        'Khả năng nghiên cứu',
        'Tư duy độc lập',
      ],
      challenges: [
        'Sống khép kín',
        'Xu hướng chỉ trích',
        'Có vẻ xa cách',
        'Khó biểu đạt cảm xúc',
        'Theo chủ nghĩa hoàn hảo',
      ],
    },
    8: {
      explanation:
        'Số 8 tượng trưng cho quyền lực, uy tín và thành công vật chất. Bạn đầy tham vọng, có tư duy kinh doanh và khả năng điều hành mạnh mẽ.',
      characteristics: ['Tham vọng', 'Có uy quyền', 'Tư duy kinh doanh', 'Quyền lực', 'Thành công'],
      strengths: [
        'Khả năng điều hành',
        'Nhạy bén kinh doanh',
        'Kỹ năng lãnh đạo',
        'Khôn ngoan tài chính',
        'Tài năng tổ chức',
      ],
      challenges: [
        'Vật chất thái quá',
        'Nghiện công việc',
        'Thiếu lòng trắc ẩn',
        'Khó ủy quyền',
        'Yêu cầu cao',
      ],
    },
    9: {
      explanation:
        'Số 9 đại diện cho chủ nghĩa nhân đạo, lòng trắc ẩn và tình yêu thương vô điều kiện. Bạn lý tưởng hóa, hào phóng và cống hiến để làm thế giới tốt đẹp hơn.',
      characteristics: ['Nhân đạo', 'Nhân ái', 'Lý tưởng hóa', 'Hào phóng', 'Toàn diện'],
      strengths: [
        'Bản năng nhân đạo',
        'Lòng trắc ẩn',
        'Sự hào phóng',
        'Tầm nhìn lý tưởng',
        'Hiểu biết toàn diện',
      ],
      challenges: [
        'Dễ xúc động',
        'Hy sinh bản thân',
        'Thiếu thực tế',
        'Khó đặt ranh giới',
        'Ngây thơ',
      ],
    },
  };

  private readonly BIRTH_CHART_POSITIONS: string[] = [
    'Số 1',
    'Số 2',
    'Số 3',
    'Số 4',
    'Số 5',
    'Số 6',
    'Số 7',
    'Số 8',
    'Số 9',
  ];

  calculateNumerology(birthDate: BirthDate): NumerologyReading {
    const lifePathNumber = this.calculateLifePathNumber(birthDate);
    const birthChart = this.calculateBirthChart(birthDate);
    const personalYear = this.calculatePersonalYear(birthDate);
    const personalMonth = this.calculatePersonalMonth(birthDate);
    const personalDay = this.calculatePersonalDay(birthDate);

    // Extract digits and calculate missing digits
    const dateString = `${birthDate.day}${birthDate.month}${birthDate.year}`;
    const digits = dateString.split('').map((d) => parseInt(d));
    const digitFrequencies: { [key: number]: number } = {};
    for (let i = 1; i <= 9; i++) {
      digitFrequencies[i] = 0;
    }
    digits.forEach((digit) => {
      if (digit >= 1 && digit <= 9) {
        digitFrequencies[digit]++;
      }
    });

    const missingDigits = Object.keys(digitFrequencies)
      .map(Number)
      .filter((digit) => digitFrequencies[digit] === 0);

    const arrowPatterns = this.getArrowPatterns(digitFrequencies);

    return {
      birthDate,
      lifePathNumber,
      birthChart,
      personalYear,
      personalMonth,
      personalDay,
      missingDigits,
      arrowPatterns,
    };
  }

  calculateLifePathNumber(birthDate: BirthDate): LifePathNumber {
    const lifePathNum = this.reduceToSingleDigit(birthDate.day + birthDate.month + birthDate.year);

    const meaning = this.LIFE_PATH_MEANINGS[lifePathNum];
    if (!meaning) {
      throw new Error(`Life path number ${lifePathNum} not found`);
    }

    return {
      number: lifePathNum,
      ...meaning,
    };
  }

  calculateBirthChart(birthDate: BirthDate): BirthChartMatrix {
    // Extract all digits from birth date
    const dateString = `${birthDate.day}${birthDate.month}${birthDate.year}`;
    const digits = dateString.split('').map((d) => parseInt(d));

    // Count frequency of each digit (1-9) - Vietnamese numerology excludes 0
    const digitFrequencies: { [key: number]: number } = {};
    for (let i = 1; i <= 9; i++) {
      digitFrequencies[i] = 0;
    }

    digits.forEach((digit) => {
      if (digit >= 1 && digit <= 9) {
        digitFrequencies[digit]++;
      }
    });

    const positions: BirthChartPosition[][] = [];

    // Generate 3x3 matrix showing digit frequencies (1-9)
    for (let row = 0; row < 3; row++) {
      positions[row] = [];
      for (let col = 0; col < 3; col++) {
        const digit = row * 3 + col + 1; // 1-9 for Vietnamese numerology
        const frequency = digitFrequencies[digit];
        const positionName = this.BIRTH_CHART_POSITIONS[row * 3 + col];
        const meaning = this.getDigitMeaning(digit, frequency)[1];

        positions[row][col] = {
          position: positionName,
          number: frequency,
          shortMeaning: this.getDigitMeaning(digit, frequency)[0],
          meaning,
          description: this.getDigitDescription(digit, frequency),
        };
      }
    }

    // Calculate chart number based on total digit sum (excluding 0)
    const chartNumber = this.reduceToSingleDigit(
      digits.filter((d) => d >= 1 && d <= 9).reduce((sum, digit) => sum + digit, 0),
    );

    return {
      positions,
      chartNumber,
      chartDescription: this.getChartDescription(chartNumber),
    };
  }

  calculatePersonalYear(birthDate: BirthDate): number {
    const currentYear = new Date().getFullYear();
    return this.reduceToSingleDigit(birthDate.month + birthDate.day + currentYear);
  }

  calculatePersonalMonth(birthDate: BirthDate): number {
    const currentDate = new Date();
    return this.reduceToSingleDigit(birthDate.day + (currentDate.getMonth() + 1));
  }

  calculatePersonalDay(birthDate: BirthDate): number {
    const currentDate = new Date();
    return this.reduceToSingleDigit(
      birthDate.day + (currentDate.getMonth() + 1) + currentDate.getDate(),
    );
  }

  private getDigitMeaning(digit: number, frequency: number): string[] {
    const meanings: { [key: number]: string[] } = {
      1: ['Lãnh đạo', 'Độc lập', 'Sáng tạo', 'Tự lực'],
      2: ['Hợp tác', 'Hòa hợp', 'Cân bằng', 'Đối tác'],
      3: ['Sáng tạo', 'Biểu đạt', 'Giao tiếp', 'Vui vẻ'],
      4: ['Ổn định', 'Cấu trúc', 'Lao động', 'Nền tảng'],
      5: ['Tự do', 'Thay đổi', 'Phiêu lưu', 'Đa dạng'],
      6: ['Trách nhiệm', 'Nuôi dưỡng', 'Phục vụ', 'Hòa hợp'],
      7: ['Tâm linh', 'Trí tuệ', 'Phân tích', 'Nội tâm'],
      8: ['Quyền lực', 'Quyền uy', 'Thành công', 'Tổ chức'],
      9: ['Nhân đạo', 'Từ bi', 'Tình yêu', 'Hoàn thành'],
    };

    const digitMeanings = meanings[digit] || ['Năng lượng chưa biết'];

    // Enhanced meanings based on frequency
    if (frequency === 0) {
      return [
        digitMeanings[0],
        `${digitMeanings[0]} (Thiếu - ${this.getMissingDigitMeaning(digit)})`,
      ];
    } else if (frequency === 1) {
      return [digitMeanings[0], `${digitMeanings[0]} (Cân bằng)`];
    } else if (frequency === 2) {
      return [digitMeanings[0], `${digitMeanings[0]} (Tăng cường)`];
    } else if (frequency >= 3) {
      return [
        digitMeanings[0],
        `${digitMeanings[0]} (Quá nhiều - ${this.getOverAbundanceMeaning(digit)})`,
      ];
    }

    return [digitMeanings[0], `${digitMeanings[0]} (${frequency > 1 ? 'Tăng cường' : 'Cân bằng'})`];
  }

  private getOverAbundanceMeaning(digit: number) {
    const overAbundance: { [key: number]: string } = {
      1: 'Có thể trở nên độc đoán, thiếu kiên nhẫn',
      2: 'Có thể quá nhạy cảm, khó quyết đoán',
      3: 'Có thể phân tán, thiếu tập trung',
      4: 'Có thể cứng nhắc, thiếu linh hoạt',
      5: 'Có thể bất ổn, thiếu cam kết',
      6: 'Có thể lo lắng quá mức, hy sinh bản thân',
      7: 'Có thể cô lập, quá cầu toàn',
      8: 'Có thể thực dụng, thiếu tình cảm',
      9: 'Có thể lý tưởng hóa, thiếu thực tế',
    };
    return overAbundance[digit] || 'Cần cân bằng năng lượng';
  }

  private getMissingDigitMeaning(digit: number): string {
    const missing: { [key: number]: string } = {
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
    return missing[digit] || 'Cần phát triển năng lượng này';
  }

  private getDigitDescription(digit: number, frequency: number): string {
    const descriptions: { [key: number]: string[] } = {
      1: [
        'Chữ số 1 đại diện cho khả năng lãnh đạo, tính độc lập và sự khởi đầu mới',
        'Chữ số 1 cho thấy sự sáng tạo, tự lực và tinh thần tiên phong',
        'Chữ số 1 biểu thị ý chí mạnh mẽ và quyết tâm',
        'Chữ số 1 đại diện cho cá tính và khả năng tự biểu đạt',
      ],
      2: [
        'Chữ số 2 đại diện cho sự hòa hợp, hợp tác và kỹ năng ngoại giao',
        'Chữ số 2 cho thấy sự nhạy cảm, trực giác và quan hệ đối tác',
        'Chữ số 2 biểu thị sự cân bằng và nhu cầu đồng hành',
        'Chữ số 2 đại diện cho sự song song và sức mạnh của hai',
      ],
      3: [
        'Chữ số 3 đại diện cho sự sáng tạo, tự biểu đạt và tương tác xã hội',
        'Chữ số 3 cho thấy khả năng nghệ thuật và kỹ năng giao tiếp',
        'Chữ số 3 biểu thị sự lạc quan, nhiệt tình và vui vẻ',
        'Chữ số 3 đại diện cho sự phát triển và mở rộng',
      ],
      4: [
        'Chữ số 4 đại diện cho sự ổn định, lao động và tổ chức thực tiễn',
        'Chữ số 4 cho thấy sự đáng tin cậy, cấu trúc và cách tiếp cận có phương pháp',
        'Chữ số 4 biểu thị việc xây dựng nền tảng vững chắc và an ninh',
        'Chữ số 4 đại diện cho kỷ luật và chú ý đến chi tiết',
      ],
      5: [
        'Chữ số 5 đại diện cho tự do, phiêu lưu và tính đa dạng',
        'Chữ số 5 cho thấy khả năng thích ứng, tò mò và tình yêu thay đổi',
        'Chữ số 5 biểu thị tư duy tiến bộ và trải nghiệm mới',
        'Chữ số 5 đại diện cho việc phá vỡ giới hạn',
      ],
      6: [
        'Chữ số 6 đại diện cho trách nhiệm, nuôi dưỡng và phục vụ người khác',
        'Chữ số 6 cho thấy bản năng bảo vệ, quan tâm và giá trị gia đình',
        'Chữ số 6 biểu thị việc tạo ra sự hòa hợp và chữa lành',
        'Chữ số 6 đại diện cho sự cân bằng giữa vật chất và tinh thần',
      ],
      7: [
        'Chữ số 7 đại diện cho tâm linh, nội tâm và tư duy phân tích',
        'Chữ số 7 cho thấy trí tuệ, trực giác và khả năng nghiên cứu',
        'Chữ số 7 biểu thị nhu cầu phản ánh nội tâm và tìm kiếm chân lý',
        'Chữ số 7 đại diện cho bí ẩn và sự hiểu biết sâu sắc',
      ],
      8: [
        'Chữ số 8 đại diện cho quyền lực, quyền uy và thành công vật chất',
        'Chữ số 8 cho thấy khả năng kinh doanh và điều hành',
        'Chữ số 8 biểu thị trí tuệ tài chính và tài năng tổ chức',
        'Chữ số 8 đại diện cho thành tựu và sự công nhận',
      ],
      9: [
        'Chữ số 9 đại diện cho nhân đạo, từ bi và tình yêu vũ trụ',
        'Chữ số 9 cho thấy lý tưởng, lòng hào phóng và cống hiến phục vụ',
        'Chữ số 9 biểu thị sự hoàn thành chu kỳ và sự hiểu biết vũ trụ',
        'Chữ số 9 đại diện cho sự vị tha và mục đích cao cả',
      ],
    };

    const digitDescriptions = descriptions[digit] || [
      'Chữ số này mang năng lượng và ý nghĩa đặc biệt',
    ];
    return (
      digitDescriptions[Math.min(frequency, digitDescriptions.length - 1)] || digitDescriptions[0]
    );
  }

  private getChartDescription(chartNumber: number): string {
    const descriptions = [
      'Biểu đồ của bạn cho thấy tiềm năng lãnh đạo mạnh mẽ với tư duy đổi mới.',
      'Bạn có bản chất hòa hợp với kỹ năng ngoại giao xuất sắc.',
      'Biểu đồ của bạn thể hiện khả năng sáng tạo và xã hội tuyệt vời.',
      'Bạn thực tế và đáng tin cậy với kỹ năng tổ chức mạnh mẽ.',
      'Biểu đồ của bạn gợi ý tình yêu tự do và phiêu lưu.',
      'Bạn nuôi dưỡng và có trách nhiệm với bản chất quan tâm.',
      'Biểu đồ của bạn cho thấy trí tuệ và tư duy phân tích.',
      'Bạn có giác quan kinh doanh mạnh mẽ và khả năng điều hành.',
      'Biểu đồ của bạn thể hiện bản năng nhân đạo và lòng từ bi.',
    ];

    return (
      descriptions[chartNumber - 1] ||
      'Biểu đồ thần số học của bạn tiết lộ những năng lượng và tiềm năng độc đáo.'
    );
  }

  private getArrowPatterns(digitFrequencies: { [key: number]: number }): string[] {
    const arrows: string[] = [];
    const freq = digitFrequencies;

    // Check for missing digits (digits 1-9 that don't appear in the birth date)
    const missingDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((d) => !(d in freq) || freq[d] === 0);

    // Existing arrow patterns (when digits are present)
    // Mũi tên quyết tâm (1-4-7)
    if (freq[1] > 0 && freq[4] > 0 && freq[7] > 0) {
      arrows.push('🠗 Mũi tên quyết tâm: Ý chí mạnh mẽ, khả năng vượt qua thử thách');
    }
    // Mũi tên cảm xúc (2-5-8)
    if (freq[2] > 0 && freq[5] > 0 && freq[8] > 0) {
      arrows.push('🠔 Mũi tên cảm xúc: Nhạy cảm, trực giác tốt, khả năng giao tiếp');
    }
    // Mũi tên trí tuệ (3-6-9)
    if (freq[3] > 0 && freq[6] > 0 && freq[9] > 0) {
      arrows.push('🠖 Mũi tên trí tuệ: Sáng tạo, khả năng phân tích, trí tuệ cao');
    }
    // Mũi tên vật chất (4-5-6)
    if (freq[4] > 0 && freq[5] > 0 && freq[6] > 0) {
      arrows.push('🠕 Mũi tên vật chất: Thực tế, khả năng xây dựng, ổn định tài chính');
    }
    // Mũi tên tâm linh (7-8-9)
    if (freq[7] > 0 && freq[8] > 0 && freq[9] > 0) {
      arrows.push('🠘 Mũi tên tâm linh: Trí tuệ sâu sắc, khả năng lãnh đạo, tâm linh');
    }
    // Mũi tên cá nhân (1-2-3)
    if (freq[1] > 0 && freq[2] > 0 && freq[3] > 0) {
      arrows.push('🠛 Mũi tên cá nhân: Phát triển bản thân, khả năng tự nhận thức');
    }

    // Missing digit arrow patterns
    // Mũi tên quyết tâm thiếu (1-4-7)
    if (missingDigits.includes(1) && missingDigits.includes(4) && missingDigits.includes(7)) {
      arrows.push(
        '⤵️ Mũi tên quyết tâm thiếu: Cần phát triển ý chí, kiên định hơn trong cuộc sống',
      );
    }
    // Mũi tên cảm xúc thiếu (2-5-8)
    if (missingDigits.includes(2) && missingDigits.includes(5) && missingDigits.includes(8)) {
      arrows.push('⤴️ Mũi tên cảm xúc thiếu: Cần rèn luyện sự nhạy cảm và trực giác');
    }
    // Mũi tên trí tuệ thiếu (3-6-9)
    if (missingDigits.includes(3) && missingDigits.includes(6) && missingDigits.includes(9)) {
      arrows.push('⤵️ Mũi tên trí tuệ thiếu: Cần phát triển tư duy phân tích và sáng tạo');
    }
    // Mũi tên vật chất thiếu (4-5-6)
    if (missingDigits.includes(4) && missingDigits.includes(5) && missingDigits.includes(6)) {
      arrows.push('⤴️ Mũi tên vật chất thiếu: Cần chú ý hơn đến khía cạnh tài chính và vật chất');
    }
    // Mũi tên tâm linh thiếu (7-8-9)
    if (missingDigits.includes(7) && missingDigits.includes(8) && missingDigits.includes(9)) {
      arrows.push('⤴️ Mũi tên tâm linh thiếu: Cần phát triển đời sống tâm linh và nội tâm');
    }
    // Mũi tên cá nhân thiếu (1-2-3)
    if (missingDigits.includes(1) && missingDigits.includes(2) && missingDigits.includes(3)) {
      arrows.push('⤵️ Mũi tên cá nhân thiếu: Cần phát triển bản thân và khả năng tự nhận thức');
    }

    return arrows;
  }

  private reduceToSingleDigit(number: number): number {
    while (number > 9) {
      number = number
        .toString()
        .split('')
        .reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return number === 0 ? 9 : number;
  }
}
