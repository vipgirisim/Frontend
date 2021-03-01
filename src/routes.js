import Dashboard from "../src/views/Dashboard"; 
import Notifications from "../src/views/Notifications.js"; 
import TableList from "../src/views/TableList.js"; 
import TableList1 from "../src/views/TableList1.js"; 
import TableList2 from "../src/views/TableList2.js"; 
import TableList3 from "../src/views/TableList3.js"; 

import Sistemislemler from "../src/views/Sistemislemler.js"; 
 
import UserProfile from "../src/views/UserProfile.js";
import UserProfile1 from "../src/views/UserProfile1.js";
import UserProfile2 from "../src/views/UserProfile2.js";
import UserProfile3 from "../src/views/UserProfile3.js";


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
    path: "/Modtables",
    name: "Mod  İşlemler", 
    component: TableList1,
    layout: "/admin",
  },
  {
    path: "/Uyetables",
    name: "Uye  İşlemler", 
    component: TableList2,
    layout: "/admin",
  },
  {
    path: "/falcitables",
    name: "Falcı  İşlemler", 
    component: TableList3,
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
    name: "Bildirimler", 
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/admin-profile",
    name: "Admin Ekle", 
    icon: "tim-icons icon-single-02",
    component: UserProfile3,
    layout: "/admin",
  },
  {
    path: "/mod-profile",
    name: "Mod Ekle", 
    icon: "tim-icons icon-single-02",
    component: UserProfile1,
    layout: "/admin",
  },
  {
    path: "/falci-profile",
    name: "Falcı Ekle", 
    icon: "tim-icons icon-single-02",
    component: UserProfile2,
    layout: "/admin",
  },
 
  {
    path: "/user-profile",
    name: "Üye Ekle", 
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  }, 
   
];
export default routes;
