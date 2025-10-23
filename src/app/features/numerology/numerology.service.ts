import { Injectable } from '@angular/core';
import { BirthDate, LifePathNumber, BirthChartMatrix, NumerologyReading, BirthChartPosition } from './numerology.types';

@Injectable({
  providedIn: 'root'
})
export class NumerologyService {

  private readonly LIFE_PATH_MEANINGS: { [key: number]: Omit<LifePathNumber, 'number'> } = {
    1: {
      explanation: 'The number 1 is the number of leadership, independence, and new beginnings. You are a natural-born leader with strong willpower and determination.',
      characteristics: ['Independent', 'Ambitious', 'Original', 'Pioneering', 'Determined'],
      strengths: ['Leadership abilities', 'Strong willpower', 'Innovation', 'Self-reliance', 'Courage'],
      challenges: ['Can be stubborn', 'May appear arrogant', 'Tendency to be self-centered', 'Impatient', 'Difficulty accepting advice']
    },
    2: {
      explanation: 'The number 2 represents harmony, cooperation, and diplomatic skills. You are sensitive, intuitive, and excel in partnerships and teamwork.',
      characteristics: ['Cooperative', 'Diplomatic', 'Sensitive', 'Intuitive', 'Harmonious'],
      strengths: ['Excellent mediator', 'Strong intuition', 'Natural diplomat', 'Supportive partner', 'Artistic abilities'],
      challenges: ['Can be indecisive', 'Overly sensitive', 'Tendency to avoid confrontation', 'May lack self-confidence', 'Can be influenced easily']
    },
    3: {
      explanation: 'The number 3 is associated with creativity, self-expression, and social interaction. You are artistic, optimistic, and have a natural gift for communication.',
      characteristics: ['Creative', 'Expressive', 'Social', 'Optimistic', 'Enthusiastic'],
      strengths: ['Excellent communication skills', 'Creative expression', 'Social charm', 'Optimism', 'Inspirational abilities'],
      challenges: ['Can be scattered', 'Tendency to procrastinate', 'May avoid responsibility', 'Overly dramatic', 'Difficulty with focus']
    },
    4: {
      explanation: 'The number 4 represents stability, hard work, and practical organization. You are reliable, methodical, and excel in building solid foundations.',
      characteristics: ['Practical', 'Organized', 'Reliable', 'Hard-working', 'Stable'],
      strengths: ['Strong work ethic', 'Organizational skills', 'Reliability', 'Practical wisdom', 'Attention to detail'],
      challenges: ['Can be rigid', 'Tendency to be stubborn', 'May resist change', 'Can be overly serious', 'Difficulty expressing emotions']
    },
    5: {
      explanation: 'The number 5 symbolizes freedom, adventure, and versatility. You are adaptable, curious, and thrive on change and new experiences.',
      characteristics: ['Adventurous', 'Versatile', 'Curious', 'Progressive', 'Free-spirited'],
      strengths: ['Adaptability', 'Curiosity', 'Versatility', 'Progressive thinking', 'Love for freedom'],
      challenges: ['Can be restless', 'Tendency to be irresponsible', 'Difficulty with commitment', 'May be unreliable', 'Restless nature']
    },
    6: {
      explanation: 'The number 6 is the number of responsibility, nurturing, and service to others. You are caring, protective, and excel in creating harmony in relationships.',
      characteristics: ['Nurturing', 'Responsible', 'Harmonious', 'Protective', 'Compassionate'],
      strengths: ['Strong sense of responsibility', 'Nurturing abilities', 'Creating harmony', 'Protective instincts', 'Compassion'],
      challenges: ['Can be overly protective', 'Tendency to be self-sacrificing', 'May worry too much', 'Difficulty saying no', 'Can be judgmental']
    },
    7: {
      explanation: 'The number 7 represents spirituality, introspection, and analytical thinking. You are wise, intuitive, and excel in research and analysis.',
      characteristics: ['Analytical', 'Spiritual', 'Introspective', 'Wise', 'Mysterious'],
      strengths: ['Strong analytical skills', 'Spiritual wisdom', 'Intuition', 'Research abilities', 'Independent thinking'],
      challenges: ['Can be reclusive', 'Tendency to be critical', 'May seem aloof', 'Difficulty expressing emotions', 'Perfectionist tendencies']
    },
    8: {
      explanation: 'The number 8 symbolizes power, authority, and material success. You are ambitious, business-minded, and have strong executive abilities.',
      characteristics: ['Ambitious', 'Authoritative', 'Business-minded', 'Powerful', 'Successful'],
      strengths: ['Executive abilities', 'Business acumen', 'Leadership skills', 'Financial wisdom', 'Organizational talent'],
      challenges: ['Can be materialistic', 'Tendency to be workaholic', 'May lack compassion', 'Difficulty delegating', 'Can be demanding']
    },
    9: {
      explanation: 'The number 9 represents humanitarianism, compassion, and universal love. You are idealistic, generous, and dedicated to making the world a better place.',
      characteristics: ['Humanitarian', 'Compassionate', 'Idealistic', 'Generous', 'Universal'],
      strengths: ['Humanitarian instincts', 'Compassion', 'Generosity', 'Idealistic vision', 'Universal understanding'],
      challenges: ['Can be overly emotional', 'Tendency to be self-sacrificing', 'May be impractical', 'Difficulty with boundaries', 'Can be naive']
    }
  };

  private readonly BIRTH_CHART_POSITIONS: string[] = [
    'Digit 1', 'Digit 2', 'Digit 3',
    'Digit 4', 'Digit 5', 'Digit 6',
    'Digit 7', 'Digit 8', 'Digit 9'
  ];

  calculateNumerology(birthDate: BirthDate): NumerologyReading {
    const lifePathNumber = this.calculateLifePathNumber(birthDate);
    const birthChart = this.calculateBirthChart(birthDate);
    const personalYear = this.calculatePersonalYear(birthDate);
    const personalMonth = this.calculatePersonalMonth(birthDate);
    const personalDay = this.calculatePersonalDay(birthDate);

    // Extract digits and calculate missing digits
    const dateString = `${birthDate.day}${birthDate.month}${birthDate.year}`;
    const digits = dateString.split('').map(d => parseInt(d));
    const digitFrequencies: { [key: number]: number } = {};
    for (let i = 1; i <= 9; i++) {
      digitFrequencies[i] = 0;
    }
    digits.forEach(digit => {
      if (digit >= 1 && digit <= 9) {
        digitFrequencies[digit]++;
      }
    });

    const missingDigits = Object.keys(digitFrequencies)
      .map(Number)
      .filter(digit => digitFrequencies[digit] === 0);

    const arrowPatterns = this.getArrowPatterns(digitFrequencies);

    return {
      birthDate,
      lifePathNumber,
      birthChart,
      personalYear,
      personalMonth,
      personalDay,
      missingDigits,
      arrowPatterns
    };
  }

  calculateLifePathNumber(birthDate: BirthDate): LifePathNumber {
    const lifePathNum = this.reduceToSingleDigit(
      birthDate.day + birthDate.month + birthDate.year
    );

    const meaning = this.LIFE_PATH_MEANINGS[lifePathNum];
    if (!meaning) {
      throw new Error(`Life path number ${lifePathNum} not found`);
    }

    return {
      number: lifePathNum,
      ...meaning
    };
  }

  calculateBirthChart(birthDate: BirthDate): BirthChartMatrix {
    // Extract all digits from birth date
    const dateString = `${birthDate.day}${birthDate.month}${birthDate.year}`;
    const digits = dateString.split('').map(d => parseInt(d));

    // Count frequency of each digit (1-9) - Vietnamese numerology excludes 0
    const digitFrequencies: { [key: number]: number } = {};
    for (let i = 1; i <= 9; i++) {
      digitFrequencies[i] = 0;
    }

    digits.forEach(digit => {
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
        const meaning = this.getDigitMeaning(digit, frequency);

        positions[row][col] = {
          position: positionName,
          number: frequency,
          meaning,
          description: this.getDigitDescription(digit, frequency)
        };
      }
    }

    // Calculate chart number based on total digit sum (excluding 0)
    const chartNumber = this.reduceToSingleDigit(
      digits.filter(d => d >= 1 && d <= 9).reduce((sum, digit) => sum + digit, 0)
    );

    return {
      positions,
      chartNumber,
      chartDescription: this.getChartDescription(chartNumber)
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
    return this.reduceToSingleDigit(birthDate.day + (currentDate.getMonth() + 1) + currentDate.getDate());
  }

  private getDigitMeaning(digit: number, frequency: number): string {
    const meanings: { [key: number]: string[] } = {
      1: ['Lãnh đạo', 'Độc lập', 'Sáng tạo', 'Tự lực'],
      2: ['Hợp tác', 'Hòa hợp', 'Cân bằng', 'Đối tác'],
      3: ['Sáng tạo', 'Biểu đạt', 'Giao tiếp', 'Vui vẻ'],
      4: ['Ổn định', 'Cấu trúc', 'Lao động', 'Nền tảng'],
      5: ['Tự do', 'Thay đổi', 'Phiêu lưu', 'Đa dạng'],
      6: ['Trách nhiệm', 'Nuôi dưỡng', 'Phục vụ', 'Hòa hợp'],
      7: ['Tâm linh', 'Trí tuệ', 'Phân tích', 'Nội tâm'],
      8: ['Quyền lực', 'Quyền uy', 'Thành công', 'Tổ chức'],
      9: ['Nhân đạo', 'Từ bi', 'Tình yêu', 'Hoàn thành']
    };

    const digitMeanings = meanings[digit] || ['Năng lượng chưa biết'];

    // Enhanced meanings based on frequency
    if (frequency === 0) {
      return `${digitMeanings[0]} (Thiếu - ${this.getMissingDigitMeaning(digit)})`;
    } else if (frequency === 1) {
      return `${digitMeanings[0]} (Cân bằng)`;
    } else if (frequency === 2) {
      return `${digitMeanings[0]} (Tăng cường)`;
    } else if (frequency >= 3) {
      return `${digitMeanings[0]} (Quá nhiều - ${this.getOverAbundanceMeaning(digit)})`;
    }

    return `${digitMeanings[0]} (${frequency > 1 ? 'Tăng cường' : 'Cân bằng'})`;
  }

  private getOverAbundanceMeaning(digit: number){
    const overAbundance: { [key: number]: string } = {
      1: 'Có thể trở nên độc đoán, thiếu kiên nhẫn',
      2: 'Có thể quá nhạy cảm, khó quyết đoán',
      3: 'Có thể phân tán, thiếu tập trung',
      4: 'Có thể cứng nhắc, thiếu linh hoạt',
      5: 'Có thể bất ổn, thiếu cam kết',
      6: 'Có thể lo lắng quá mức, hy sinh bản thân',
      7: 'Có thể cô lập, quá cầu toàn',
      8: 'Có thể thực dụng, thiếu tình cảm',
      9: 'Có thể lý tưởng hóa, thiếu thực tế'
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
      9: 'Thiếu lòng nhân đạo và khả năng hoàn thành'
    };
    return missing[digit] || 'Cần phát triển năng lượng này';
  }

  private getDigitDescription(digit: number, frequency: number): string {
    const descriptions: { [key: number]: string[] } = {
      1: [
        'Chữ số 1 đại diện cho khả năng lãnh đạo, tính độc lập và sự khởi đầu mới',
        'Chữ số 1 cho thấy sự sáng tạo, tự lực và tinh thần tiên phong',
        'Chữ số 1 biểu thị ý chí mạnh mẽ và quyết tâm',
        'Chữ số 1 đại diện cho cá tính và khả năng tự biểu đạt'
      ],
      2: [
        'Chữ số 2 đại diện cho sự hòa hợp, hợp tác và kỹ năng ngoại giao',
        'Chữ số 2 cho thấy sự nhạy cảm, trực giác và quan hệ đối tác',
        'Chữ số 2 biểu thị sự cân bằng và nhu cầu đồng hành',
        'Chữ số 2 đại diện cho sự song song và sức mạnh của hai'
      ],
      3: [
        'Chữ số 3 đại diện cho sự sáng tạo, tự biểu đạt và tương tác xã hội',
        'Chữ số 3 cho thấy khả năng nghệ thuật và kỹ năng giao tiếp',
        'Chữ số 3 biểu thị sự lạc quan, nhiệt tình và vui vẻ',
        'Chữ số 3 đại diện cho sự phát triển và mở rộng'
      ],
      4: [
        'Chữ số 4 đại diện cho sự ổn định, lao động và tổ chức thực tiễn',
        'Chữ số 4 cho thấy sự đáng tin cậy, cấu trúc và cách tiếp cận có phương pháp',
        'Chữ số 4 biểu thị việc xây dựng nền tảng vững chắc và an ninh',
        'Chữ số 4 đại diện cho kỷ luật và chú ý đến chi tiết'
      ],
      5: [
        'Chữ số 5 đại diện cho tự do, phiêu lưu và tính đa dạng',
        'Chữ số 5 cho thấy khả năng thích ứng, tò mò và tình yêu thay đổi',
        'Chữ số 5 biểu thị tư duy tiến bộ và trải nghiệm mới',
        'Chữ số 5 đại diện cho việc phá vỡ giới hạn'
      ],
      6: [
        'Chữ số 6 đại diện cho trách nhiệm, nuôi dưỡng và phục vụ người khác',
        'Chữ số 6 cho thấy bản năng bảo vệ, quan tâm và giá trị gia đình',
        'Chữ số 6 biểu thị việc tạo ra sự hòa hợp và chữa lành',
        'Chữ số 6 đại diện cho sự cân bằng giữa vật chất và tinh thần'
      ],
      7: [
        'Chữ số 7 đại diện cho tâm linh, nội tâm và tư duy phân tích',
        'Chữ số 7 cho thấy trí tuệ, trực giác và khả năng nghiên cứu',
        'Chữ số 7 biểu thị nhu cầu phản ánh nội tâm và tìm kiếm chân lý',
        'Chữ số 7 đại diện cho bí ẩn và sự hiểu biết sâu sắc'
      ],
      8: [
        'Chữ số 8 đại diện cho quyền lực, quyền uy và thành công vật chất',
        'Chữ số 8 cho thấy khả năng kinh doanh và điều hành',
        'Chữ số 8 biểu thị trí tuệ tài chính và tài năng tổ chức',
        'Chữ số 8 đại diện cho thành tựu và sự công nhận'
      ],
      9: [
        'Chữ số 9 đại diện cho nhân đạo, từ bi và tình yêu vũ trụ',
        'Chữ số 9 cho thấy lý tưởng, lòng hào phóng và cống hiến phục vụ',
        'Chữ số 9 biểu thị sự hoàn thành chu kỳ và sự hiểu biết vũ trụ',
        'Chữ số 9 đại diện cho sự vị tha và mục đích cao cả'
      ]
    };

    const digitDescriptions = descriptions[digit] || ['Chữ số này mang năng lượng và ý nghĩa đặc biệt'];
    return digitDescriptions[Math.min(frequency, digitDescriptions.length - 1)] || digitDescriptions[0];
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
      'Biểu đồ của bạn thể hiện bản năng nhân đạo và lòng từ bi.'
    ];

    return descriptions[chartNumber - 1] || 'Biểu đồ thần số học của bạn tiết lộ những năng lượng và tiềm năng độc đáo.';
  }

  private getArrowPatterns(digitFrequencies: { [key: number]: number }): string[] {
    const arrows: string[] = [];
    const freq = digitFrequencies;
    
    // Check for missing digits (digits 1-9 that don't appear in the birth date)
    const missingDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(d => !(d in freq) || freq[d] === 0);
    
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
      arrows.push('⤵️ Mũi tên quyết tâm thiếu: Cần phát triển ý chí, kiên định hơn trong cuộc sống');
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
      number = number.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return number === 0 ? 9 : number;
  }
}
