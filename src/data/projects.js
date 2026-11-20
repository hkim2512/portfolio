/**
 * Dữ liệu dự án thực tế của Trần Vũ Uyên My (Mire).
 * Bao gồm các dự án thực tế có mã nguồn và chạy thử.
 */
export const PROJECTS = [
  {
    id: "adapted-english-learning",
    title: "AdaptEd — Adaptive English Learning System",
    subtitle: "Mobile App UI/UX Design · AI-Powered Language Learning",
    description:
      "Ứng dụng học tiếng Anh cá nhân hóa sử dụng AI và learner modeling, tự động điều chỉnh lộ trình học theo năng lực người dùng. Bao gồm 17 màn hình thiết kế hoàn chỉnh, Live App Emulator và bộ UI Kit đầy đủ.",
    technologies: ["Figma", "UI/UX Design", "Prototyping", "User Research", "Mobile Design", "AI Learner Modeling"],
    demo: "/adapted-app/index.html",
    figma: "",
    thumbnail: "",
    screenshots: [],
    category: "UI/UX Design",
    featured: true,
    architecture: "Learner Modeling + Adaptive Algorithm + Personalized Curriculum",
    challenges: [
      "Thiết kế trải nghiệm phù hợp cho 2 nhóm đối tượng khác nhau: Youth Mode và Senior Mode",
      "Xây dựng luồng Onboarding thông minh thu thập dữ liệu người dùng để cá nhân hóa",
      "Thiết kế hệ thống dashboard hiển thị tiến trình học tập phức tạp một cách trực quan",
    ],
    lessons: [
      "Nắm vững nguyên lý thiết kế inclusive design cho đa nhóm người dùng",
      "Học cách xây dựng Design System và component library nhất quán trong Figma",
      "Hiểu rõ hơn về tầm quan trọng của User Research và Persona trong thiết kế sản phẩm",
    ],
    timeline: "tháng 5-2026",
    persona: {
      youth: "Học sinh/sinh viên 16-25 tuổi, mục tiêu thi IELTS hoặc giao tiếp lưu loát",
      senior: "Người lớn 40+ tuổi, muốn học tiếng Anh cơ bản để giao tiếp hàng ngày",
    },
    screens: 17,
    status: "Completed",
  },
  {
    id: "core-ecommerce",
    title: "Core — Technology E-commerce Microservices Platform",
    subtitle: "Full-stack Web App · Hệ thống thương mại điện tử công nghệ",
    description:
      "Nền tảng mua sắm thiết bị điện tử với kiến trúc Microservices gồm 9 dịch vụ độc lập (Auth, Product, Cart, Order, Payment, Chat, Notification, AI RAG Assistant, Gateway). Tích hợp trợ lý AI thông minh hỗ trợ khách hàng và người bán.",
    technologies: ["React", "TypeScript", "Spring Boot", "Node.js", "Redis", "Kafka", "MongoDB", "PostgreSQL", "TailwindCSS"],
    demo: "https://core-frontend-28dw.vercel.app",
    figma: "",
    thumbnail: "",
    screenshots: [],
    category: "E-commerce",
    featured: true,
    architecture: "Microservices Architecture (Spring Cloud + Apache Kafka + Redis Caching)",
    challenges: [
      "Thiết kế giao tiếp bất đồng bộ giữa các service thông qua Kafka Event-driven",
      "Xây dựng hệ thống tìm kiếm ngữ nghĩa RAG (Retrieval-Augmented Generation) cho chatbot trợ lý",
      "Quản lý đồng bộ giỏ hàng và xử lý thanh toán đảm bảo tính nhất quán dữ liệu (saga pattern)",
    ],
    lessons: [
      "Thành thạo cấu hình API Gateway và giao tiếp liên dịch vụ qua OpenFeign/REST",
      "Nắm vững kỹ thuật lập trình hướng sự kiện và tối ưu hóa truy vấn cơ sở dữ liệu phân tán",
      "Phát triển hệ thống client-side React TypeScript tương tác mượt mà với nhiều microservices",
    ],
    timeline: "tháng 3-2025",
    status: "Completed",
  },
  {
    id: "pharmacy-management",
    title: "Pharmacy Management System",
    subtitle: "Full-stack Web App · Quản lý nhà thuốc toàn diện",
    description:
      "Hệ thống quản lý nhà thuốc bán lẻ bao gồm quản lý kho dược phẩm, cảnh báo hạn sử dụng thuốc, POS xuất hóa đơn bán hàng nhanh, và báo cáo doanh thu quản trị.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "JWT Auth"],
    demo: "https://pharmacity-seven.vercel.app/pos",
    figma: "",
    thumbnail: "",
    screenshots: [],
    category: "Web App",
    featured: true,
    architecture: "Layered Architecture (Presentation → Business Logic → Data Access)",
    challenges: [
      "Xây dựng thuật toán cảnh báo thuốc sắp hết hạn theo lô hàng một cách chính xác",
      "Xử lý nghiệp vụ tính giá nhập/xuất theo nhiều lô thuốc khác nhau (FIFO)",
      "Thiết kế giao diện dược sĩ có thể thao tác nhanh dưới áp lực phục vụ khách hàng",
    ],
    lessons: [
      "Hiểu sâu về thiết kế hệ thống quản lý kho với nhiều ràng buộc nghiệp vụ phức tạp",
      "Nâng cao kỹ năng thiết kế API RESTful và xác thực bảo mật với JWT",
      "Học cách phân tích yêu cầu nghiệp vụ thực tế và chuyển hóa thành mô hình dữ liệu",
    ],
    timeline: "tháng 12-2024",
    status: "Completed",
  },
];

export const getFeaturedProjects = () => PROJECTS.filter((p) => p.featured);
export const getProjectById = (id) => PROJECTS.find((p) => p.id === id);
