import Dashboard from "../src/views/Dashboard"; 
import Notifications from "../src/views/Notifications.js"; 
import TableList from "../src/views/TableList.js"; 
import Sistemislemler from "../src/views/Sistemislemler.js"; 
 import BurcEkle from "../src/components/Admin/BurclEkle" 
 import Burclistesi from "../src/components/Admin/burc-list" 

import UserProfile from "../src/views/UserProfile.js";

var routes = [
  {
    path: "/dashboard",
    name: "Panel",
      component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Admin İşlemler", 
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Mod  İşlemler", 
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Uye  İşlemler", 
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Falcı  İşlemler", 
    component: TableList,
    layout: "/admin",
  },

  {
    path: "Sistemİslemler",
    name: "Sistem  İşlemler",
    rtlName: "لوحة القيادة",
   // icon: "tim-icons icon-chart-pie-36",
    component: Sistemislemler,
    layout: "/admin",
  },

  {
    path: "/burcEkle",
    name: "Burc Ekle",
    rtlName: "لوحة القيادة",
   // icon: "tim-icons icon-chart-pie-36",
    component: BurcEkle,
    layout: "/admin",
  },
  {
    path: "/burclar",
    name: "Burc İşlemleri",
      component: Burclistesi,
    layout: "/admin",
  },

  {
    path: "/sistemislemler",
    name: "Sistem  İşlemler",
    rtlName: "لوحة القيادة",
   // icon: "tim-icons icon-chart-pie-36",
    component: Sistemislemler,
    layout: "/admin",
  },

 
 
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
 //   icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Admin Ekle",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Mod Ekle",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Falcı Ekle",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  },
 
  {
    path: "/user-profile",
    name: "Üye Ekle",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  }, 
   
];
export default routes;
