"use client";
import Container from "@/components/ui/Container";
import LinkItem from "@/components/ui/LinkItem";
import { useAppSelector } from "@/redux/hooks";
import { TUserRole } from "@/types/index.type";
import { generateSideItem } from "@/utils/generateSideItem";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useAppSelector((state) => state.auth);
  const router = useRouter();

  if (!user) {
    router.push("/login");
  }
  return (
    <Container>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-3  md:min-h-screen border-e">
          <div className="flex flex-col gap-4 p-5 ">
            <h2 className="text-xl font-semibold p-2">My Account</h2>
            <hr />
            {generateSideItem(user?.role as TUserRole).map((item) => (
              <LinkItem key={item?.id} {...item} />
            ))}
          </div>
        </div>
        <div className="col-span-12 md:col-span-9 p-10  h-full">{children}</div>
      </div>
    </Container>
  );
};

export default DashboardLayout;
