"use client";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useSearchParams, usePathname } from "next/navigation";
import { useEffect } from "react";

export function ToastAlert() {
  const searchParams = useSearchParams();

  const message = searchParams.get("message");
  const { toast } = useToast();

  // Handle initial load
  useEffect(() => {
    if (message) {
      toast({
        variant: "destructive",
        title: "문제가 발생했어요",
        description: message,
        action: <ToastAction altText="닫기">닫기</ToastAction>,
      });
    }
  }, []);

  return null;
}
