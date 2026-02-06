import { useState, useEffect } from 'react';

type ToastProps = {
  title: string;
  description?: string;
  duration?: number;
};

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = ({ title, description, duration = 3000 }: ToastProps) => {
    const newToast = { title, description, duration };
    setToasts((prev) => [...prev, newToast]);

    // In a real implementation, this would trigger a toast provider
    // For now, we'll just log it and simulate the timeout
    console.log('Toast:', title, description);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t !== newToast));
    }, duration);
  };

  return { toast, toasts };
}
