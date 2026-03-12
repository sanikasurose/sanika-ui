import React, { useEffect } from "react";
import "./Toast.css";

const Toast = ({
  message,
  type = "info",
  duration = 3000,
  closing,
  onClose,
  startClosing,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      startClosing(); // trigger animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, startClosing]);

  return (
    <div className={`toast toast-${type} ${closing ? "toast-exit" : ""}`}>
      {message}
    </div>
  );
};

export default Toast;
