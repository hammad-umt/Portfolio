"use client";
import { Toaster } from "sonner";

const ToastProvider = () => {
  return (
    <Toaster
      position="top-right"
      richColors
      closeButton={true} // ✅ show close button (small X)
      toastOptions={{
        style: {
          fontSize: "14px",
          borderRadius: "8px",
          padding: "20px 16px",
          color: "#ffffff",
        },
      }}
    />
  );
};

export default ToastProvider;
