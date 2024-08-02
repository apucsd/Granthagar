"use client";

import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const AOSProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quad",
      duration: 1000,
    });
  }, []);

  return <div>{children}</div>;
};

export default AOSProvider;
