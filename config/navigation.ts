import { Gavel, FileText } from "lucide-vue-next";

export const siteNavigation = [
  {
    name: "法規系統",
    icon: Gavel,
    children: [
      { name: "同步法規", href: "/bylaws/sync" },
      { name: "取得各式檔案", href: "/bylaws" },
    ],
  },
  {
    name: "議事文件草擬",
    icon: FileText,
    children: [
      { name: "同步議案", href: "/drafting/sync-bills" },
      { name: "同步委員會報告", href: "/drafting/sync-reports" },
      { name: "草擬議程", href: "/drafting/agenda" },
      { name: "草擬會議紀錄", href: "/drafting/minutes" },
    ],
  },
];