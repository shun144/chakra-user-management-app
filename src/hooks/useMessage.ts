import { toaster } from "@/components/ui/toaster";
import { useCallback } from "react";

const useMessage = () => {
  const showSuccessMessage = useCallback((title: string) => {
    toaster.success({
      title,
      closable: true,
      duration: 1500,
    });
  }, []);

  const showErrorMessage = useCallback((title: string) => {
    toaster.error({
      title,
      closable: true,
      duration: 3000,
    });
  }, []);

  return { showSuccessMessage, showErrorMessage };
};

export default useMessage;
