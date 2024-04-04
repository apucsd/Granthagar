"use client";
import { useEffect } from "react";
import { getUserInfo } from "@/services/auth.services";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const user = getUserInfo();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push(`/dashboard/${user.role}`);
    }
  }, [user, router]);

  return null;
};

export default DashboardPage;
