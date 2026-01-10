import React from "react";
import type { FC, PropsWithChildren } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import Setting from "@/pages/Setting";
import Users from "@/pages/user/Users";
import Layout from "@/templates/Layout";

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
