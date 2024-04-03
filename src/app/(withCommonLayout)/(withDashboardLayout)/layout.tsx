"use client";
import Container from "@/components/ui/Container";
import LinkItem from "@/components/ui/LinkItem";
import { getUserInfo } from "@/services/auth.services";
import { TUserRole } from "@/types/index.type";
import { generateSideItem } from "@/utils/generateSideItem";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const user = getUserInfo();
  return (
    <Container>
      <div className="grid grid-cols-12">
        <div className="col-span-3  h-screen border-e">
          <div className="flex flex-col gap-4 p-5 ">
            <h2 className="text-xl font-semibold p-2">My Account</h2>
            <hr />
            {generateSideItem(user?.role as TUserRole).map((item) => (
              <LinkItem key={item?.id} {...item} />
            ))}
          </div>
        </div>
        <div className="col-span-9 p-10 h-screen">{children}</div>
      </div>
    </Container>
  );
};

export default DashboardLayout;
