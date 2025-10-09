import { Hexagram, Trigram } from './book-of-changes.types';

export const YI_JING_TRIGRAMS: Trigram[] = [
  {
    name: 'Càn (乾) ☰',
    nature: 'yang',
    lines: [ // Bottom-to-top: solid, solid, solid
      { type: 'yang', value: 9 },
      { type: 'yang', value: 9 },
      { type: 'yang', value: 9 }
    ]
  },
  {
    name: 'Đoài (兌) ☱',
    nature: 'yin',
    lines: [ // Bottom-to-top: solid, solid, broken
      { type: 'yang', value: 9 },
      { type: 'yang', value: 9 },
      { type: 'yin', value: 6 }
    ]
  },
  {
    name: 'Ly (離) ☲',
    nature: 'yin',
    lines: [ // Bottom-to-top: solid, broken, solid
      { type: 'yang', value: 9 },
      { type: 'yin', value: 6 },
      { type: 'yang', value: 9 }
    ]
  },
  {
    name: 'Chấn (震) ☳',
    nature: 'yang',
    lines: [ // Bottom-to-top: solid, broken, broken
      { type: 'yang', value: 9 },
      { type: 'yin', value: 6 },
      { type: 'yin', value: 6 }
    ]
  },
  {
    name: 'Tốn (巽) ☴',
    nature: 'yin',
    lines: [ // Bottom-to-top: broken, solid, solid
      { type: 'yin', value: 6 },
      { type: 'yang', value: 9 },
      { type: 'yang', value: 9 }
    ]
  },
  {
    name: 'Khảm (坎) ☵',
    nature: 'yang',
    lines: [ // Bottom-to-top: broken, solid, broken
      { type: 'yin', value: 6 },
      { type: 'yang', value: 9 },
      { type: 'yin', value: 6 }
    ]
  },
  {
    name: 'Cấn (艮) ☶',
    nature: 'yang',
    lines: [ // Bottom-to-top: broken, broken, solid
      { type: 'yin', value: 6 },
      { type: 'yin', value: 6 },
      { type: 'yang', value: 9 }
    ]
  },
  {
    name: 'Khôn (坤) ☷',
    nature: 'yin',
    lines: [ // Bottom-to-top: broken, broken, broken
      { type: 'yin', value: 6 },
      { type: 'yin', value: 6 },
      { type: 'yin', value: 6 }
    ]
  }
];

export const YI_JING_HEXAGRAMS: Hexagram[] = [
  {
    number: 1,
    name: 'Thuần Càn (Càn/Càn) - Sáng Tạo',
    interpretation: 'Trời trên Trời. Năng lượng thuần dương, mạnh mẽ, sáng tạo và khởi đầu. Biểu thị sức mạnh, sự chủ động, nguồn cảm hứng và tiềm năng vô hạn. Cần hành động quyết đoán và kiên trì.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 },
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 2,
    name: 'Thuần Khôn (Khôn/Khôn) - Tiếp Nhận',
    interpretation: 'Đất trên Đất. Năng lượng thuần âm, nuôi dưỡng, tiếp thu và bền bỉ. Biểu thị sự kiên nhẫn, khiêm tốn, hỗ trợ và khả năng hiện thực hóa ý tưởng. Cần thuận theo tự nhiên và kiên trì.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 },
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 3,
    name: 'Thủy Lôi Truân (Khảm/Chấn) - Khó Khăn Ban Đầu',
    interpretation: 'Nước trên Sấm. Sự nảy mầm trong gian khó. Tượng trưng cho những trở ngại lúc khởi đầu, cần sự kiên nhẫn, cẩn trọng và tìm kiếm sự giúp đỡ để vượt qua. Mọi thứ còn hỗn loạn nhưng đầy tiềm năng.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 },
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 4,
    name: 'Sơn Thủy Mông (Cấn/Khảm) - Non Nớt',
    interpretation: 'Núi trên Nước. Sự mông lung, thiếu kinh nghiệm. Tượng trưng cho sự thiếu hiểu biết, cần được giáo dục và hướng dẫn. Người thầy cần kiên nhẫn, người học trò cần khiêm tốn và chân thành.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 },
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 5,
    name: 'Thủy Thiên Nhu (Khảm/Càn) - Chờ Đợi',
    interpretation: 'Nước trên Trời. Cần kiên nhẫn chờ đợi thời cơ. Tượng trưng cho việc phải dừng lại, nuôi dưỡng sức mạnh và chuẩn bị. Hành động vội vàng sẽ dẫn đến thất bại. Hãy tin tưởng vào quá trình.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 },
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 6,
    name: 'Thiên Thủy Tụng (Càn/Khảm) - Tranh Chấp',
    interpretation: 'Trời trên Nước. Xung đột và mâu thuẫn. Tượng trưng cho sự đối đầu, kiện tụng. Lời khuyên là nên tìm kiếm sự hòa giải, tránh đẩy tranh chấp đi quá xa. Cần một người trung gian khôn ngoan.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 },
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 7,
    name: 'Địa Thủy Sư (Khôn/Khảm) - Quân Đội',
    interpretation: 'Đất trên Nước. Kỷ luật và tổ chức. Tượng trưng cho sức mạnh tập thể, cần có sự lãnh đạo tài tình, mục tiêu chính nghĩa và kỷ luật nghiêm ngặt để đạt được thành công.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 },
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 8,
    name: 'Thủy Địa Tỷ (Khảm/Khôn) - Đoàn Kết',
    interpretation: 'Nước trên Đất. Sự hợp tác và gắn kết. Tượng trưng cho việc tìm kiếm sự liên minh, đoàn kết vì một mục tiêu chung. Cần có sự chân thành và một người lãnh đạo trung tâm để quy tụ mọi người.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 },
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 9,
    name: 'Phong Thiên Tiểu Súc (Tốn/Càn) - Tích Lũy Nhỏ',
    interpretation: 'Gió trên Trời. Sức mạnh nhỏ kiềm chế sức mạnh lớn. Tượng trưng cho việc tích lũy dần dần, kiên nhẫn chờ đợi. Những nỗ lực nhỏ sẽ mang lại kết quả trong tương lai.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 },
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 10,
    name: 'Thiên Trạch Lý (Càn/Đoài) - Cư Xử',
    interpretation: 'Trời trên Hồ. Cư xử đúng đắn, cẩn trọng. Tượng trưng cho việc bước đi trên con đường nguy hiểm nhưng có thể thành công nếu tuân thủ các quy tắc và lễ nghi. Cần sự khiêm tốn và tôn trọng.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 },
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 11,
    name: 'Địa Thiên Thái (Khôn/Càn) - Thịnh Vượng',
    interpretation: 'Đất trên Trời. Giai đoạn hòa hợp, thịnh vượng và may mắn. Tượng trưng cho sự giao thoa giữa âm và dương, mọi việc hanh thông. Cần tận dụng thời cơ này để phát triển.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 },
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 12,
    name: 'Thiên Địa Bĩ (Càn/Khôn) - Bế Tắc',
    interpretation: 'Trời trên Đất. Giai đoạn suy thoái, chia rẽ và bế tắc. Tượng trưng cho sự mất kết nối, hỗn loạn. Cần phải ẩn mình, kiên nhẫn chờ đợi thời cơ qua đi, không nên thực hiện các kế hoạch lớn.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 },
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 13,
    name: 'Thiên Hỏa Đồng Nhân (Càn/Ly) - Đồng Lòng',
    interpretation: 'Trời trên Lửa. Sự đoàn kết, hợp tác vì mục tiêu chung. Tượng trưng cho tình bạn, cộng đồng và sự hòa hợp. Cần sự công bằng, vô tư và cởi mở để duy trì sự đoàn kết.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 },
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 14,
    name: 'Hỏa Thiên Đại Hữu (Ly/Càn) - Sở Hữu Lớn',
    interpretation: 'Lửa trên Trời. Sự giàu có, thịnh vượng và thành công lớn. Tượng trưng cho việc sở hữu nhiều của cải vật chất lẫn tinh thần. Cần khiêm tốn, hào phóng và chia sẻ để giữ được sự thịnh vượng.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 },
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 15,
    name: 'Địa Sơn Khiêm (Khôn/Cấn) - Khiêm Tốn',
    interpretation: 'Đất trên Núi. Đức tính khiêm tốn và giản dị. Tượng trưng cho việc tự hạ mình nhưng lại được tôn trọng và thành công. Khiêm tốn là chìa khóa để cân bằng và vượt qua mọi việc.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 },
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 16,
    name: 'Lôi Địa Dự (Chấn/Khôn) - Vui Vẻ',
    interpretation: 'Sấm trên Đất. Sự nhiệt tình, vui vẻ và chuẩn bị trước. Tượng trưng cho sự hăng hái và có kế hoạch. Cần chia sẻ niềm vui và quyền lực để thu hút người khác đi theo.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 },
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 17,
    name: 'Trạch Lôi Tùy (Đoài/Chấn) - Đi Theo',
    interpretation: 'Hồ trên Sấm. Sự đi theo một cách linh hoạt và thích ứng. Tượng trưng cho việc học hỏi, làm theo người có kinh nghiệm hoặc một lý tưởng. Cần có mục đích đúng đắn khi đi theo.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 },
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 18,
    name: 'Sơn Phong Cổ (Cấn/Tốn) - Sửa Chữa',
    interpretation: 'Núi trên Gió. Khắc phục những sai lầm, thói hư tật xấu đã có từ lâu. Tượng trưng cho việc phải làm lại, sửa chữa những gì đã bị hư hỏng. Cần hành động kiên quyết và cẩn trọng.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 },
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 19,
    name: 'Địa Trạch Lâm (Khôn/Đoài) - Giám Sát',
    interpretation: 'Đất trên Hồ. Sự tiếp cận, giám sát và lãnh đạo. Tượng trưng cho thời điểm thuận lợi đang đến gần, cần phải chủ động nắm bắt và quan tâm đến người khác. Sự thịnh vượng này sẽ không kéo dài.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 },
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 20,
    name: 'Phong Địa Quan (Tốn/Khôn) - Quan Sát',
    interpretation: 'Gió trên Đất. Nhìn nhận, chiêm nghiệm và làm gương. Tượng trưng cho việc quan sát từ trên cao, đánh giá tình hình một cách khách quan trước khi hành động. Là tấm gương cho người khác noi theo.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 },
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 21,
    name: 'Hỏa Lôi Phệ Hạp (Ly/Chấn) - Cắn Nuốt',
    interpretation: 'Lửa trên Sấm. Vượt qua trở ngại bằng hành động quyết đoán. Tượng trưng cho việc phải dùng luật pháp, hình phạt để loại bỏ chướng ngại. Cần sự công minh và dứt khoát.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 },
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 22,
    name: 'Sơn Hỏa Bí (Cấn/Ly) - Trang Sức',
    interpretation: 'Núi trên Lửa. Vẻ đẹp hình thức, sự trang hoàng. Tượng trưng cho việc làm đẹp, tô điểm cho sự việc nhưng không nên quá chú trọng vào bề ngoài mà quên đi nội dung cốt lõi bên trong.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 },
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 23,
    name: 'Sơn Địa Bác (Cấn/Khôn) - Sụp Đổ',
    interpretation: 'Núi trên Đất. Sự xói mòn, sụp đổ và tan rã. Tượng trưng cho thời kỳ suy thoái, cái xấu lấn át cái tốt. Cần phải ẩn mình, thuận theo thời thế và chờ đợi chu kỳ mới bắt đầu.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 },
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 24,
    name: 'Địa Lôi Phục (Khôn/Chấn) - Trở Lại',
    interpretation: 'Đất trên Sấm. Sự quay trở lại của ánh sáng và điều tốt đẹp. Tượng trưng cho sự phục hồi sau một thời kỳ suy tàn. Mọi việc bắt đầu lại một cách tự nhiên, không nên vội vã.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 },
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 25,
    name: 'Thiên Lôi Vô Vọng (Càn/Chấn) - Thuận Tự Nhiên',
    interpretation: 'Trời trên Sấm. Hành động một cách tự nhiên, trong sáng. Tượng trưng cho sự hồn nhiên, không toan tính. Hãy làm theo lẽ trời và lương tâm, thành công sẽ đến bất ngờ.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 },
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 26,
    name: 'Sơn Thiên Đại Súc (Cấn/Càn) - Tích Trữ Lớn',
    interpretation: 'Núi trên Trời. Nuôi dưỡng và tích lũy năng lượng lớn. Tượng trưng cho việc kiềm chế sức mạnh để bồi đắp đức hạnh và tài năng. Cần học hỏi từ quá khứ để chuẩn bị cho tương lai.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 },
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 27,
    name: 'Sơn Lôi Di (Cấn/Chấn) - Nuôi Dưỡng',
    interpretation: 'Núi trên Sấm. Sự nuôi dưỡng cả thể chất và tinh thần. Tượng trưng cho việc ăn uống, lời nói và tu dưỡng đạo đức. Cần cẩn trọng trong việc tiếp nhận và cung cấp "thức ăn".',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 },
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 28,
    name: 'Trạch Phong Đại Quá (Đoài/Tốn) - Gánh Nặng Quá Sức',
    interpretation: 'Hồ trên Gió. Tình huống đặc biệt, gánh nặng quá lớn. Tượng trưng cho một cấu trúc yếu, cần phải hành động phi thường để cứu vãn tình thế. Cần dũng cảm và linh hoạt.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 },
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 29,
    name: 'Thuần Khảm (Khảm/Khảm) - Nguy Hiểm',
    interpretation: 'Nước trên Nước. Nguy hiểm chồng chất. Tượng trưng cho sự hiểm trở, thử thách. Cần giữ vững sự chân thành, bình tĩnh và kiên trì rèn luyện để vượt qua. Nguy hiểm cũng là cơ hội để trưởng thành.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 },
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 30,
    name: 'Thuần Ly (Ly/Ly) - Sáng Rõ',
    interpretation: 'Lửa trên Lửa. Sự sáng suốt, trí tuệ và phụ thuộc. Tượng trưng cho sự rõ ràng, vẻ đẹp và văn minh. Cần nương tựa vào những điều đúng đắn để duy trì sự sáng suốt, giống như lửa bám vào vật cháy.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 },
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 31,
    name: 'Trạch Sơn Hàm (Đoài/Cấn) - Cảm Ứng',
    interpretation: 'Hồ trên Núi. Sự tương tác, cảm ứng giữa hai thế lực. Tượng trưng cho sự hấp dẫn, lôi cuốn, tình yêu và hôn nhân. Cần có sự chân thành, cởi mở và vô tư để có sự cảm ứng tốt đẹp.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 },
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 32,
    name: 'Lôi Phong Hằng (Chấn/Tốn) - Bền Lâu',
    interpretation: 'Sấm trên Gió. Sự lâu dài, bền vững. Tượng trưng cho mối quan hệ vợ chồng, sự kiên định và quy luật của vũ trụ. Cần duy trì sự chính đáng và thích ứng liên tục để có được sự bền vững.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 },
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 33,
    name: 'Thiên Sơn Độn (Càn/Cấn) - Rút Lui',
    interpretation: 'Trời trên Núi. Sự rút lui chiến lược. Tượng trưng cho việc lùi lại để bảo toàn sức lực khi thời thế không thuận lợi. Đây là sự rút lui khôn ngoan, không phải là trốn chạy.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 },
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 34,
    name: 'Lôi Thiên Đại Tráng (Chấn/Càn) - Hùng Mạnh',
    interpretation: 'Sấm trên Trời. Sức mạnh to lớn, thịnh vượng. Tượng trưng cho giai đoạn năng lượng dồi dào, cần được sử dụng một cách đúng đắn và chính trực, tránh lạm dụng sức mạnh.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 },
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 35,
    name: 'Hỏa Địa Tấn (Ly/Khôn) - Tiến Lên',
    interpretation: 'Lửa trên Đất. Sự tiến bộ, phát triển nhanh chóng. Tượng trưng cho mặt trời mọc, thời kỳ được công nhận và thăng tiến. Cần giữ vững đức độ và sự sáng suốt.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 },
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 36,
    name: 'Địa Hỏa Minh Di (Khôn/Ly) - Che Dấu Ánh Sáng',
    interpretation: 'Đất trên Lửa. Ánh sáng bị che lấp, thời kỳ khó khăn. Tượng trưng cho hoàn cảnh bị đàn áp, phải che giấu tài năng và sự khôn ngoan của mình để bảo toàn bản thân. Cần kiên trì và thận trọng.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 },
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 37,
    name: 'Phong Hỏa Gia Nhân (Tốn/Ly) - Người Nhà',
    interpretation: 'Gió trên Lửa. Mối quan hệ trong gia đình. Tượng trưng cho trật tự, vai trò và trách nhiệm của mỗi thành viên. Lời nói cần có nội dung, hành động cần có chuẩn mực để gia đình hòa thuận.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 },
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 38,
    name: 'Hỏa Trạch Khuê (Ly/Đoài) - Chia Lìa',
    interpretation: 'Lửa trên Hồ. Sự đối lập, xa cách và mâu thuẫn. Tượng trưng cho sự hiểu lầm, bất hòa. Tuy nhiên, trong sự khác biệt vẫn có thể tìm thấy điểm chung và hợp tác trong những việc nhỏ.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 },
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 39,
    name: 'Thủy Sơn Kiển (Khảm/Cấn) - Gian Nan',
    interpretation: 'Nước trên Núi. Trở ngại và khó khăn phía trước. Tượng trưng cho tình thế tiến thoái lưỡng nan. Cần dừng lại, tìm kiếm sự giúp đỡ của người tài và tự xem xét lại bản thân để tìm ra lối thoát.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 },
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 40,
    name: 'Lôi Thủy Giải (Chấn/Khảm) - Cởi Mở',
    interpretation: 'Sấm trên Nước. Sự giải thoát khỏi khó khăn, tháo gỡ vấn đề. Tượng trưng cho cơn mưa sau hạn hán, các trở ngại được giải tỏa. Cần hành động nhanh chóng và khoan dung với người khác.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 },
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 41,
    name: 'Sơn Trạch Tổn (Cấn/Đoài) - Hao Hụt',
    interpretation: 'Núi trên Hồ. Sự hy sinh lợi ích cá nhân vì lợi ích lớn hơn. Tượng trưng cho việc giảm bớt cái bên dưới để làm lợi cho cái bên trên. Cần có sự chân thành trong việc cho đi, cuối cùng sẽ được lợi.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 },
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 42,
    name: 'Phong Lôi Ích (Tốn/Chấn) - Lợi Ích',
    interpretation: 'Gió trên Sấm. Sự tăng tiến, làm lợi cho người khác. Tượng trưng cho việc hy sinh cái trên để làm lợi cho cái dưới. Đây là thời điểm thuận lợi để thực hiện các dự án lớn, hành động vì cộng đồng.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 },
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 43,
    name: 'Trạch Thiên Quải (Đoài/Càn) - Quyết Đoán',
    interpretation: 'Hồ trên Trời. Đưa ra quyết định dứt khoát. Tượng trưng cho việc phải loại bỏ một yếu tố tiêu cực. Cần hành động công khai, cương quyết nhưng phải thận trọng, không dùng bạo lực.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 },
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 44,
    name: 'Thiên Phong Cấu (Càn/Tốn) - Gặp Gỡ',
    interpretation: 'Trời trên Gió. Cuộc gặp gỡ bất ngờ, thường mang yếu tố tiêu cực. Tượng trưng cho sự khởi đầu của một ảnh hưởng xấu. Cần phải cảnh giác và ngăn chặn ngay từ đầu.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 },
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 45,
    name: 'Trạch Địa Tụy (Đoài/Khôn) - Tụ Họp',
    interpretation: 'Hồ trên Đất. Sự tập hợp, quy tụ. Tượng trưng cho việc mọi người cùng nhau tụ họp lại. Cần có một mục đích chung và sự chuẩn bị để phòng ngừa những rủi ro bất ngờ.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 },
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 46,
    name: 'Địa Phong Thăng (Khôn/Tốn) - Đi Lên',
    interpretation: 'Đất trên Gió. Sự thăng tiến, phát triển không ngừng. Tượng trưng cho sự tăng trưởng thuận lợi, từng bước một. Cần có sự kiên trì và tìm kiếm sự giúp đỡ của người có kinh nghiệm.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 },
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 47,
    name: 'Trạch Thủy Khốn (Đoài/Khảm) - Cùng Cực',
    interpretation: 'Hồ trên Nước. Sự khốn cùng, kiệt quệ. Tượng trưng cho hoàn cảnh khó khăn, bị giới hạn. Dù lời nói không được lắng nghe, cần giữ vững chí khí và niềm tin vào tương lai.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 },
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 48,
    name: 'Thủy Phong Tỉnh (Khảm/Tốn) - Giếng Nước',
    interpretation: 'Nước trên Gió. Nguồn sống nuôi dưỡng cộng đồng. Tượng trưng cho những cấu trúc xã hội, phúc lợi chung không thay đổi. Cần duy trì và chia sẻ nguồn lực này một cách bền vững.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 },
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 49,
    name: 'Trạch Hỏa Cách (Đoài/Ly) - Cải Cách',
    interpretation: 'Hồ trên Lửa. Cuộc cách mạng, sự thay đổi triệt để. Tượng trưng cho việc loại bỏ cái cũ để xây dựng cái mới. Cần có sự chuẩn bị kỹ lưỡng và được sự ủng hộ của mọi người để thành công.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 },
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 50,
    name: 'Hỏa Phong Đỉnh (Ly/Tốn) - Cái Đỉnh',
    interpretation: 'Lửa trên Gió. Sự nuôi dưỡng hiền tài, chuyển hóa. Tượng trưng cho cái vạc, nơi biến đổi thức ăn thô thành tinh. Cần có sự hợp tác và đúng vị trí để tạo ra những giá trị mới cho xã hội.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 },
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 51,
    name: 'Thuần Chấn (Chấn/Chấn) - Chấn Động',
    interpretation: 'Sấm trên Sấm. Sự kiện gây sốc, đột ngột. Tượng trưng cho sự kinh sợ nhưng cũng là cơ hội để thức tỉnh và tự xem xét lại bản thân. Cần giữ bình tĩnh, thận trọng để vượt qua.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 },
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 52,
    name: 'Thuần Cấn (Cấn/Cấn) - Giữ Lại',
    interpretation: 'Núi trên Núi. Sự tĩnh tại, dừng lại đúng lúc. Tượng trưng cho việc giữ cho tâm trí bình lặng, không bị ngoại cảnh chi phối. Biết khi nào nên dừng lại là một trí tuệ lớn.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 },
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 53,
    name: 'Phong Sơn Tiệm (Tốn/Cấn) - Tuần Tự',
    interpretation: 'Gió trên Núi. Sự phát triển dần dần, theo đúng trình tự. Tượng trưng cho việc một cô gái về nhà chồng, mọi thứ cần tuân theo lễ nghi và tuần tự. Cần kiên nhẫn và bền bỉ.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 },
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 54,
    name: 'Lôi Trạch Quy Muội (Chấn/Đoài) - Em Gái Về Nhà Chồng',
    interpretation: 'Sấm trên Hồ. Mối quan hệ không chính đáng, sai trật tự. Tượng trưng cho một sự kết hợp vội vàng, dựa trên cảm tính và sẽ không bền lâu. Cần nhận thức được sự bất thường của tình hình.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 },
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 55,
    name: 'Lôi Hỏa Phong (Chấn/Ly) - Sung Túc',
    interpretation: 'Sấm trên Lửa. Sự thịnh vượng, phong phú đạt đến đỉnh điểm. Tượng trưng cho thời kỳ thành công rực rỡ. Tuy nhiên, cần lo xa vì sau đỉnh cao là sự suy giảm. Hãy như mặt trời giữa trưa, tỏa sáng và vô tư.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 },
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 56,
    name: 'Hỏa Sơn Lữ (Ly/Cấn) - Lữ Khách',
    interpretation: 'Lửa trên Núi. Tình cảnh của người lữ hành xa nhà. Tượng trưng cho sự cô đơn, tạm bợ, cần phải cẩn trọng và khiêm tốn trong cách cư xử để được an toàn và chấp nhận.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 },
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 57,
    name: 'Thuần Tốn (Tốn/Tốn) - Thuận Theo',
    interpretation: 'Gió trên Gió. Sự thâm nhập nhẹ nhàng, uyển chuyển. Tượng trưng cho việc thuận theo, làm theo mệnh lệnh một cách linh hoạt. Sức mạnh của sự mềm mỏng có thể thâm nhập vào mọi nơi.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 },
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 58,
    name: 'Thuần Đoài (Đoài/Đoài) - Vui Vẻ',
    interpretation: 'Hồ trên Hồ. Sự vui vẻ, giao tiếp và trao đổi. Tượng trưng cho niềm vui khi cùng bạn bè học hỏi, thảo luận. Sự vui vẻ chân chính đến từ sự chính trực và cởi mở.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 },
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 59,
    name: 'Phong Thủy Hoán (Tốn/Khảm) - Tan Rã',
    interpretation: 'Gió trên Nước. Sự phân tán, ly tán. Tượng trưng cho việc giải tỏa những tắc nghẽn, hiểu lầm. Cần một sức mạnh tinh thần, một đức tin chung để quy tụ lại những gì đã tan rã.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 },
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 60,
    name: 'Thủy Trạch Tiết (Khảm/Đoài) - Tiết Chế',
    interpretation: 'Nước trên Hồ. Sự giới hạn, điều độ. Tượng trưng cho việc đặt ra giới hạn, quy tắc để ngăn chặn sự lãng phí. Sự tiết chế vui vẻ sẽ dẫn đến thành công, sự tiết chế cay đắng sẽ thất bại.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 },
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 61,
    name: 'Phong Trạch Trung Phu (Tốn/Đoài) - Lòng Tin',
    interpretation: 'Gió trên Hồ. Lòng tin chân thành từ bên trong. Tượng trưng cho sự thành tín có sức cảm hóa cả những vật vô tri. Lòng tin là nền tảng vững chắc nhất cho mọi mối quan hệ và hành động.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 },
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yang', value: 9 }
    ]
  },
  {
    number: 62,
    name: 'Lôi Sơn Tiểu Quá (Chấn/Cấn) - Vượt Qua Một Chút',
    interpretation: 'Sấm trên Núi. Vượt quá giới hạn trong những việc nhỏ. Tượng trưng cho việc cẩn trọng, khiêm tốn và chú ý đến chi tiết. Nên làm những việc nhỏ, không nên làm việc lớn. Bay thấp sẽ an toàn hơn bay cao.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 },
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 63,
    name: 'Thủy Hỏa Ký Tế (Khảm/Ly) - Đã Xong',
    interpretation: 'Nước trên Lửa. Mọi việc đã hoàn thành, trật tự hoàn hảo. Tượng trưng cho sự thành công, cân bằng. Tuy nhiên, đây cũng là lúc phải cẩn trọng, đề phòng rủi ro để duy trì trật tự, vì đỉnh cao cũng là khởi đầu của suy thoái.',
    lines: [
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 },
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 }
    ]
  },
  {
    number: 64,
    name: 'Hỏa Thủy Vị Tế (Ly/Khảm) - Chưa Xong',
    interpretation: 'Lửa trên Nước. Mọi việc còn dang dở, chưa hoàn tất. Tượng trưng cho sự hỗn loạn trước khi trật tự mới được thiết lập. Đây là thời điểm của tiềm năng và hy vọng, cần sự khôn ngoan và thận trọng để vượt qua.',
    lines: [
      { type: 'yin', value: 6 }, { type: 'yang', value: 9 }, { type: 'yin', value: 6 },
      { type: 'yang', value: 9 }, { type: 'yin', value: 6 }, { type: 'yang', value: 9 }
    ]
  }
];
