export interface PricingPlan {
  id: string;
  name: string;
  tier: "essential" | "plus" | "premium";
  duration: string;
  priceVND: number;
  originalPriceVND?: number;
  isHot?: boolean;
  isPartnerDeal?: boolean;
  note?: string;
  description: string;
  suitableFor: string;
  benefits: string[];
  features: string[];
}

export const pricingData: PricingPlan[] = [
  // NHÓM 1: Gói 1 tháng Chính Hãng
  {
    id: "essential-1m",
    name: "Essential 1 Tháng",
    tier: "essential",
    duration: "1 Tháng",
    priceVND: 250000,
    isPartnerDeal: true,
    description: "Gói cơ bản cho nhà giao dịch cá nhân muốn nâng cấp trải nghiệm.",
    suitableFor: "Người mới bắt đầu, cần nhiều chỉ báo hơn bản miễn phí.",
    benefits: ["5 chỉ báo trên mỗi biểu đồ", "2 biểu đồ trên mỗi tab", "20 cảnh báo giá"],
    features: ["Không quảng cáo", "Hồ sơ khối lượng", "Khung thời gian tùy chỉnh"],
  },
  {
    id: "plus-1m",
    name: "Plus 1 Tháng",
    tier: "plus",
    duration: "1 Tháng",
    priceVND: 299000,
    isPartnerDeal: true,
    note: "Hết hàng",
    description: "Gói nâng cao cho phân tích kỹ thuật chuyên sâu.",
    suitableFor: "Nhà giao dịch bán chuyên, cần nhiều biểu đồ và cảnh báo hơn.",
    benefits: ["10 chỉ báo trên mỗi biểu đồ", "4 biểu đồ trên mỗi tab", "100 cảnh báo giá"],
    features: ["Biểu đồ Renko/Kagi", "Trích xuất dữ liệu biểu đồ", "Cảnh báo kỹ thuật"],
  },
  {
    id: "premium-1m",
    name: "Premium 1 Tháng",
    tier: "premium",
    duration: "1 Tháng",
    priceVND: 399000,
    isPartnerDeal: true,
    isHot: true,
    description: "Gói cao cấp nhất với đầy đủ tính năng mạnh mẽ nhất.",
    suitableFor: "Nhà giao dịch chuyên nghiệp, cần dữ liệu nhanh và cảnh báo không hết hạn.",
    benefits: ["25 chỉ báo trên mỗi biểu đồ", "8 biểu đồ trên mỗi tab", "400 cảnh báo giá"],
    features: ["Cảnh báo theo giây", "Cảnh báo không hết hạn", "Dữ liệu Backtest 20k thanh"],
  },

  // NHÓM 2: Tài khoản chính hãng Essential
  {
    id: "essential-2m",
    name: "Essential 2 Tháng",
    tier: "essential",
    duration: "2 Tháng",
    priceVND: 420000,
    isHot: true,
    description: "Gói Essential dùng liền mạch trong 2 tháng.",
    suitableFor: "Nhà giao dịch muốn ổn định trong thời gian ngắn.",
    benefits: ["Dùng riêng 100%", "Bảo hành toàn thời gian", "Hỗ trợ 1-1"],
    features: ["Mọi tính năng Essential", "Đăng ký email chính chủ"],
  },
  {
    id: "essential-3m",
    name: "Essential 3 Tháng",
    tier: "essential",
    duration: "3 Tháng",
    priceVND: 599000,
    isHot: true,
    description: "Gói Essential tiết kiệm cho 1 quý giao dịch.",
    suitableFor: "Nhà giao dịch theo quý.",
    benefits: ["Giá tốt hơn gói 1 tháng", "Ổn định cao", "Hỗ trợ kỹ thuật"],
    features: ["Mọi tính năng Essential", "Đăng ký email chính chủ"],
  },
  {
    id: "essential-6m",
    name: "Essential 6 Tháng",
    tier: "essential",
    duration: "6 Tháng",
    priceVND: 1200000,
    description: "Gói Essential cho nửa năm giao dịch.",
    suitableFor: "Nhà giao dịch cam kết trung hạn.",
    benefits: ["Tiết kiệm đáng kể", "Không lo gián đoạn", "Tặng tài liệu trading"],
    features: ["Mọi tính năng Essential", "Đăng ký email chính chủ"],
  },
  {
    id: "essential-14m",
    name: "Essential 14 Tháng",
    tier: "essential",
    duration: "14 Tháng",
    priceVND: 3500000,
    note: "Gói 395 ngày dùng liền mạch, đăng ký email chính chủ",
    description: "Gói Essential dài hạn nhất, cực kỳ tiết kiệm.",
    suitableFor: "Nhà giao dịch chuyên nghiệp gắn bó lâu dài.",
    benefits: ["Giá rẻ nhất tính theo tháng", "Dùng 14 tháng liên tục", "Ưu tiên hỗ trợ"],
    features: ["Mọi tính năng Essential", "Đăng ký email chính chủ"],
  },

  // NHÓM 3: Tài khoản chính hãng Plus
  {
    id: "plus-2m",
    name: "Plus 2 Tháng",
    tier: "plus",
    duration: "2 Tháng",
    priceVND: 849000,
    description: "Gói Plus nâng cao cho 2 tháng sử dụng.",
    suitableFor: "Nhà giao dịch cần tính năng Plus trong ngắn hạn.",
    benefits: ["Dùng riêng 100%", "Bảo hành toàn thời gian", "Hỗ trợ 1-1"],
    features: ["Mọi tính năng Plus", "Đăng ký email chính chủ"],
  },
  {
    id: "plus-4m",
    name: "Plus 4 Tháng",
    tier: "plus",
    duration: "4 Tháng",
    priceVND: 1600000,
    description: "Gói Plus cho 4 tháng giao dịch chuyên sâu.",
    suitableFor: "Nhà giao dịch cần phân tích đa khung thời gian.",
    benefits: ["Giá ưu đãi", "Hỗ trợ kỹ thuật 24/7", "Tặng bộ indicator VIP"],
    features: ["Mọi tính năng Plus", "Đăng ký email chính chủ"],
  },
  {
    id: "plus-6m",
    name: "Plus 6 Tháng",
    tier: "plus",
    duration: "6 Tháng",
    priceVND: 2480000,
    description: "Gói Plus cho nửa năm giao dịch chuyên nghiệp.",
    suitableFor: "Nhà giao dịch bán chuyên nghiệp.",
    benefits: ["Tiết kiệm lớn", "Ổn định tuyệt đối", "Hỗ trợ 1-1"],
    features: ["Mọi tính năng Plus", "Đăng ký email chính chủ"],
  },
  {
    id: "plus-1y",
    name: "Plus 1 Năm (13 Tháng)",
    tier: "plus",
    duration: "13 Tháng",
    priceVND: 6385000,
    isHot: true,
    note: "Tặng thêm 1 tháng, gói 395 ngày dùng liền mạch, đăng ký email chính chủ",
    description: "Gói Plus dài hạn, tối ưu chi phí phân tích.",
    suitableFor: "Nhà giao dịch chuyên nghiệp cần Plus lâu dài.",
    benefits: ["Tặng thêm 1 tháng", "Giá đối tác cực tốt", "Hỗ trợ trọn đời"],
    features: ["Mọi tính năng Plus", "Đăng ký email chính chủ"],
  },

  // NHÓM 4: Tài khoản chính hãng Premium
  {
    id: "premium-2m",
    name: "Premium 2 Tháng",
    tier: "premium",
    duration: "2 Tháng",
    priceVND: 1700000,
    description: "Trải nghiệm Premium đỉnh cao trong 2 tháng.",
    suitableFor: "Nhà giao dịch chuyên nghiệp cần sức mạnh tối đa.",
    benefits: ["Đầy đủ tính năng nhất", "Dữ liệu nhanh nhất", "Hỗ trợ ưu tiên"],
    features: ["Mọi tính năng Premium", "Đăng ký email chính chủ"],
  },
  {
    id: "premium-4m",
    name: "Premium 4 Tháng",
    tier: "premium",
    duration: "4 Tháng",
    priceVND: 3300000,
    description: "Gói Premium cho 4 tháng giao dịch không giới hạn.",
    suitableFor: "Scalper, Day Trader chuyên nghiệp.",
    benefits: ["Tiết kiệm so với gói tháng", "Cảnh báo không giới hạn", "Hỗ trợ 1-1"],
    features: ["Mọi tính năng Premium", "Đăng ký email chính chủ"],
  },
  {
    id: "premium-13m",
    name: "Premium 13 Tháng",
    tier: "premium",
    duration: "13 Tháng",
    priceVND: 12000000,
    isHot: true,
    note: "Gói 395 ngày dùng liền mạch, đăng ký email chính chủ",
    description: "Gói Premium dài hạn, đẳng cấp nhất dành cho Pro Trader.",
    suitableFor: "Quỹ đầu tư, Nhà giao dịch chuyên nghiệp.",
    benefits: ["Giá tốt nhất thị trường", "Dùng 13 tháng liên tục", "Đặc quyền đối tác"],
    features: ["Mọi tính năng Premium", "Đăng ký email chính chủ"],
  },
];
