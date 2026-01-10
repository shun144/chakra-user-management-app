import React from "react";
import "./App.css";
import AppRouter from "@/routes/AppRouter";
import StyleProvider from "@/provider/styles/StyleProvider";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <StyleProvider>
      <AppRouter />
      <Toaster />
    </StyleProvider>
  );
};

export default App;
