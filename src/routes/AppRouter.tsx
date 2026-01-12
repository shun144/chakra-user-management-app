import Login from "@/pages/Login";
import Layout from "@/templates/Layout";
import type { FC, PropsWithChildren } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { homeRoutes } from "./homeRoutes";
import Page404 from "./Page404";
// import { homeRoutes } from "./HomeRoutes";

const AppRouter: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route index element={<Login />} />
        <Route element={<Layout />} path="/home">
          {homeRoutes.map(({ id, ...route }) => (
            <Route key={id} {...route} />
          ))}
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
