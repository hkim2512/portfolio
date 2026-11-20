import { SITE_META } from "../constants";

/**
 * Dữ liệu học vấn và kinh nghiệm của Phạm Hồng Kim Hà (Jay).
 * TODO: thêm kinh nghiệm làm việc vào EXPERIENCES khi có.
 */
export const EXPERIENCES = [
  {
    id: 1,
    position: "Marketing Analyst",
    company: "68 Property",
    location: "Đà Nẵng, Việt Nam",
    period: "tháng 7/2026 – tháng 10/2026",
    description:
      "Thiết kế banners sản phẩm, tập trung vào tìm kiếm khách hàng tiềm năng, và hỗ trợ triển khai các hoạt động quảng bá dự án.",
    technologies: ["Adobe", "Ads Fb", "Lead Generation"],
  },
  {
    id: 2,
    position: "Data Analyst Intern",
    company: "FPT IS",
    location: "Đà Nẵng, Việt Nam",
    period: "tháng 1/2026 – tháng 6/2026",
    description:
      "Hỗ trợ các hoạt động phân tích dữ liệu thông qua việc thu thập, làm sạch, xử lý và phân tích dữ liệu nhằm tìm kiếm thông tin hữu ích, hỗ trợ doanh nghiệp đưa ra quyết định dựa trên dữ liệu.",
    technologies: ["Power BI", "Data Cleaning", "Data Integration", "SQL", "Excel"],
  },
  {
    id: 3,
    position: "Logistics Data & Operations Trainee",
    company: "Van Hai Group",
    location: "Đà Nẵng, Việt Nam",
    period: "tháng 6/2025 – tháng 9/2025",
    description:
      "Hỗ trợ các hoạt động vận hành logistics, quản lý dữ liệu và theo dõi đơn hàng nhằm đảm bảo tính chính xác của thông tin và hiệu quả trong quy trình hoạt động.",
    technologies: ["Data Management", "Excel", "Operations"],
  },
];
export const EDUCATION = [
  {
    id: 1,
    degree: SITE_META.degree,
    school: SITE_META.university,
    faculty: SITE_META.faculty,
    location: SITE_META.location,
    period: SITE_META.period,
    description: SITE_META.educationSummary,
    highlights: ["Data Visualization", "Big Data", "AI & ML", "Phân tích thiết kế quy trình kinh doanh"],
    status: "",
  },
];
