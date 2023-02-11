import { AiTwotoneFilePdf, AiTwotoneFolder } from "react-icons/ai";

export const sidebarData = [
  {
    id: 1,
    category_fa: "پیشخوان",
    category_en: "Dashboard",
    items: [
      {
        id: 1,
        title_fa: "مستندات",
        title_en: "Documentation",
        icon: <AiTwotoneFolder />,
        sub: null,
        to: "/",
      },
    ],
  },
  {
    id: 2,
    category_fa: "مدیریت",
    category_en: "Management",
    items: [
      {
        id: 1,
        title_fa: "PDF جدید",
        title_en: "New PDF",
        icon: <AiTwotoneFilePdf />,
        sub: null,
        to: "/new-file",
      },
    ],
  },
];
