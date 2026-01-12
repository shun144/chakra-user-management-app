import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/provider/auth/LoginProvider";
import StyleProvider from "@/provider/styles/StyleProvider";
import AppRouter from "@/routes/AppRouter";
import "./App.css";

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
