export const    NavLinks: Array<{
    name: string;
    icon: string;
    icon_focus: string;
    link: string; 
  }> = [
    {
      name: "dashboard",
      icon: "/icons/menu.svg",
      icon_focus: "/icons/menu-focus.svg",
      link: "/dashboard",
    },
    {
      name: "roadmap",
      icon: "/icons/map.svg",
      icon_focus: "/icons/map-focus.svg",
      link: "/roadmap",
    },
    {
      name:'history',
      icon:"/icons/check.svg",
      icon_focus:"/icons/check-focus.svg",
      link:"/completed"
    },
    {
        name: "settings",
        icon: "/icons/setting.svg",
        icon_focus: "/icons/setting-focus.svg",
        link: "/setting",
      },
      {
        name:'deleted',
        icon:'/icons/delete.svg',
        icon_focus:'/icons/delete-focus.svg',
        link:'/deleted'
      }
  ];
  