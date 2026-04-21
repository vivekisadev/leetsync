"use client";

import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

export function WelcomeToast({ userName }: { userName: string | null | undefined }) {
  const hasToasted = useRef(false);

  useEffect(() => {
    if (!hasToasted.current) {
      // Remove any existing loading toasts (like the one from the login page)
      toast.dismiss();
      toast.success(`Welcome to your dashboard, ${userName || "Developer"}!`, {
        icon: '👋',
        duration: 4000,
      });
      hasToasted.current = true;
    }
  }, [userName]);

  return null;
}
