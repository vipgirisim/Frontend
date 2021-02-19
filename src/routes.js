import Dashboard from "../src/views/Dashboard";
import Icons from "../src/views/Icons.js";
import Map from "../src/views/Map.js";
import Notifications from "../src/views/Notifications.js";
import Rtl from "../src/views/Rtl";
import TableList from "../src/views/TableList.js";
import Typography from "../src/views/Typography.js";
import UserProfile from "../src/views/UserProfile.js";

var routes = [
  {
    path: "/dashboard",
    name: "Panel",
    rtlName: "لوحة القيادة",
 //   icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Admin İşlemler",
    rtlName: "لوحة القيادة",
  //  icon: "tim-icons icon-chart-pie-36",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Mod  İşlemler",
    rtlName: "لوحة القيادة",
  //  icon: "tim-icons icon-chart-pie-36",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Uye  İşlemler",
    rtlName: "لوحة القيادة",
   // icon: "tim-icons icon-chart-pie-36",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Falcı  İşlemler",
    rtlName: "لوحة القيادة",
   // icon: "tim-icons icon-chart-pie-36",
    component: TableList,
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
    path: "/tables",
    name: "Table List",
    rtlName: "قائمة الجدول",
   // icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin",
  },
   
   
];
export default routes;
