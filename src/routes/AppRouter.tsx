import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Setting from "@/pages/Setting";
import Users from "@/pages/user/Users";
import Layout from "@/templates/Layout";
import type { FC, PropsWithChildren } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const AppRouter: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
