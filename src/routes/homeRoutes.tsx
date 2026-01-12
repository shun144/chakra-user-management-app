import Home from "@/pages/Home";
import Setting from "@/pages/Setting";
import Users from "@/pages/user/Users";
import { type RouteProps } from "react-router";

export const homeRoutes: RouteProps[] = [
  { id: "home", index: true, element: <Home /> },
  { id: "home/setting", path: "setting", element: <Setting /> },
  { id: "home/users", path: "users", element: <Users /> },
];
