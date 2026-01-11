import React from "react";
import "./App.css";
import AppRouter from "@/routes/AppRouter";
import StyleProvider from "@/provider/styles/StyleProvider";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/provider/auth/AuthProvider";

const App = () => {
  return (
    <StyleProvider>
      <AuthProvider>
        <AppRouter />
        <Toaster />
      </AuthProvider>
    </StyleProvider>
  );
};

export default App;
