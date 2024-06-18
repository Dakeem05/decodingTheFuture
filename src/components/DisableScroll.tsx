"use client";

import React, { useEffect } from "react";

export default function DisableScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handleScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const restoreScroll = () => {
      document.body.style.overflow = "";
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      restoreScroll();
    };
  }, []);

  return children;
}
