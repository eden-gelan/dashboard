import { DashboardConfig } from "@/types"



export const dashboardConfig: DashboardConfig = {
  sidebarNav: {
    mainItems: [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: "dashboard",
      },
      {
        title: "Projects",
        href: "/dashboard/appointment",
        icon: "projects",
      },
      {
        title: "Projects",
        href: "/dashboard/patient",
        icon: "projects2",
      },
      {
        title: "Services",
        href: "/dashboard/user",
        icon: "service",
      },
      {
        title: "Users",
        href: "/dashboard/assigned",
        icon: "users",
      },
      {
        title: "Analytics",
        href: "/dashboard/payment",
        icon: "analysis",
      },
      {
        title: "Projects",
        href: "/dashboard/payment",
        icon: "projects3",
      },
      {
        title: "Projects",
        href: "/dashboard/payment",
        icon: "projects4",
      },
      {
        title: "Chat",
        href: "/dashboard/payment",
        icon: "chat",
      },
    ],
    subItems: [
      {
        title: "Seeting",
        href: "/dashboard/setting",
        icon: "setting",
      },
    ]
  },
  rightDrawerNav: [
    {
      title: "Calander",
      href: "CALANDER",
      icon: "calander",
    },
    {
      title: "Chat",
      href: "CHAT",
      icon: "calander",
    },
  ]

}
