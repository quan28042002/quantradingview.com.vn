export interface FeatureGroup {
  title: string;
  features: {
    name: string;
    description: string;
    highlightPlan?: string;
  }[];
}

export const featureLibraryData: FeatureGroup[] = [
  {
    title: "Biểu đồ & Phân tích",
    features: [
      { name: "Biểu đồ trên mỗi tab", description: "Xem nhiều biểu đồ cùng lúc để so sánh các mã hoặc khung thời gian.", highlightPlan: "Premium: 8 biểu đồ" },
      { name: "Chỉ báo trên mỗi biểu đồ", description: "Sử dụng nhiều chỉ báo kỹ thuật để xác nhận tín hiệu giao dịch.", highlightPlan: "Premium: 25 chỉ báo" },
      { name: "Chỉ báo trên chỉ báo", description: "Tính toán chỉ báo dựa trên dữ liệu của một chỉ báo khác.", highlightPlan: "Plus/Premium" },
      { name: "Biểu đồ Renko / Kagi / Line Break / Point & Figure", description: "Các loại biểu đồ chuyên sâu giúp loại bỏ nhiễu giá.", highlightPlan: "Plus/Premium" },
      { name: "Khung thời gian tùy chỉnh", description: "Tạo khung thời gian riêng như 2 phút, 3 giờ, 2 ngày...", highlightPlan: "Tất cả các gói" },
      { name: "Khoảng thời gian tính theo giây", description: "Xem biến động giá cực nhanh cho Scalping.", highlightPlan: "Premium" },
      { name: "Khoảng thời gian dựa theo tick", description: "Phân tích từng giao dịch nhỏ nhất trên thị trường.", highlightPlan: "Premium" },
      { name: "So sánh các mã", description: "Chồng các biểu đồ lên nhau để xem tương quan giá.", highlightPlan: "Tất cả các gói" },
      { name: "Hơn 110 công cụ vẽ thông minh", description: "Đầy đủ công cụ từ Fibonacci đến các mô hình sóng Elliott.", highlightPlan: "Tất cả các gói" },
      { name: "Mô hình biểu đồ tự động", description: "Tự động phát hiện các mô hình như Vai Đầu Vai, Tam Giác...", highlightPlan: "Premium" },
      { name: "Auto fib thoái lui", description: "Tự động vẽ các mức Fibonacci quan trọng trên biểu đồ.", highlightPlan: "Tất cả các gói" },
      { name: "Phân tích đa khung thời gian", description: "Xem nhiều khung thời gian trên cùng một tab biểu đồ.", highlightPlan: "Plus/Premium" },
    ],
  },
  {
    title: "Cảnh báo & Theo dõi",
    features: [
      { name: "Cảnh báo giá", description: "Nhận thông báo ngay khi giá chạm mức bạn quan tâm.", highlightPlan: "Premium: 400 cảnh báo" },
      { name: "Cảnh báo kỹ thuật", description: "Cảnh báo dựa trên các điều kiện chỉ báo phức tạp.", highlightPlan: "Plus/Premium" },
      { name: "Cảnh báo danh sách theo dõi", description: "Nhận thông báo cho bất kỳ mã nào trong Watchlist.", highlightPlan: "Tất cả các gói" },
      { name: "Cảnh báo đa điều kiện", description: "Kết hợp nhiều điều kiện để tạo cảnh báo chính xác.", highlightPlan: "Plus/Premium" },
      { name: "Cảnh báo theo giây", description: "Cảnh báo tức thì dựa trên dữ liệu giây.", highlightPlan: "Premium" },
      { name: "Cảnh báo không hết hạn", description: "Cảnh báo luôn hoạt động cho đến khi bạn tắt.", highlightPlan: "Premium" },
      { name: "Nhiều danh sách theo dõi", description: "Phân loại các mã theo nhóm ngành hoặc chiến lược.", highlightPlan: "Tất cả các gói" },
      { name: "Gắn cờ màu các mã", description: "Đánh dấu nhanh các mã tiềm năng bằng màu sắc.", highlightPlan: "Tất cả các gói" },
    ],
  },
  {
    title: "Dữ liệu & Lịch sử",
    features: [
      { name: "Thanh lịch sử có sẵn", description: "Xem lại dữ liệu quá khứ để phân tích xu hướng dài hạn.", highlightPlan: "Premium: 20k thanh" },
      { name: "Kết nối đồng thời với biểu đồ", description: "Mở nhiều cửa sổ biểu đồ đồng bộ dữ liệu.", highlightPlan: "Premium: 50 kết nối" },
      { name: "Trích xuất dữ liệu biểu đồ", description: "Tải dữ liệu giá về máy để phân tích bằng Excel/Python.", highlightPlan: "Plus/Premium" },
      { name: "Dữ liệu tài chính cổ phiếu", description: "Báo cáo thu nhập, bảng cân đối kế toán trực tiếp trên biểu đồ.", highlightPlan: "Tất cả các gói" },
      { name: "Dữ liệu kinh tế toàn cầu", description: "Lãi suất, GDP, CPI từ các tổ chức uy tín.", highlightPlan: "Tất cả các gói" },
      { name: "Tin tức ngữ cảnh thời gian thực", description: "Cập nhật tin tức mới nhất liên quan đến mã đang xem.", highlightPlan: "Tất cả các gói" },
      { name: "Lịch kinh tế và thu nhập", description: "Theo dõi các sự kiện quan trọng sắp diễn ra.", highlightPlan: "Tất cả các gói" },
      { name: "Đường cong lợi suất", description: "Phân tích thị trường trái phiếu chuyên sâu.", highlightPlan: "Tất cả các gói" },
      { name: "Luồng dữ liệu nhanh", description: "Tốc độ cập nhật giá nhanh nhất từ các sàn giao dịch.", highlightPlan: "Premium" },
      { name: "Nguồn cấp dữ liệu dự phòng", description: "Đảm bảo dữ liệu luôn ổn định và chính xác.", highlightPlan: "Premium" },
    ],
  },
  {
    title: "Backtest / Pine / Tự động hóa",
    features: [
      { name: "Pine Script", description: "Ngôn ngữ lập trình riêng để tạo chỉ báo và chiến lược.", highlightPlan: "Tất cả các gói" },
      { name: "Kiểm tra lại chiến lược", description: "Chạy thử chiến lược trên dữ liệu quá khứ để xem hiệu quả.", highlightPlan: "Tất cả các gói" },
      { name: "Backtesting chuyên sâu", description: "Phân tích chi tiết từng lệnh trong quá trình thử nghiệm.", highlightPlan: "Plus/Premium" },
      { name: "Xuất dữ liệu chiến lược", description: "Lưu kết quả backtest để báo cáo hoặc phân tích thêm.", highlightPlan: "Plus/Premium" },
      { name: "Thời hạn thực hiện tính toán", description: "Ưu tiên tài nguyên máy chủ cho các script phức tạp.", highlightPlan: "Premium" },
      { name: "Kính lúp Bar Magnifier", description: "Xem chi tiết biến động bên trong một thanh nến khi backtest.", highlightPlan: "Plus/Premium" },
    ],
  },
];
