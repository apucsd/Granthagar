"use client";
import Container from "@/components/ui/Container";
import { TUserRole } from "@/types/index.type";
import { generateSideItem } from "@/utils/generateSideItem";
import Link from "next/link";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  // const userSidebarItems = [
  //   {
  //     id: 1,
  //     title: "Dashboard",
  //     href: "/dashboard",
  //     icon: "dashboard",
  //   },
  //   {
  //     id: 2,
  //     title: "Orders",
  //     href: "/dashboard/orders",
  //     icon: "shopping-cart",
  //   },
  //   {
  //     id: 3,
  //     title: "Address",
  //     href: "/dashboard/address",
  //     icon: "map-pin",
  //   },
  //   {
  //     id: 4,
  //     title: "Account Details",
  //     href: "/dashboard/account-details",
  //     icon: "user",
  //   },
  //   {
  //     id: 5,
  //     title: "Logout",
  //     href: "/logout",
  //     icon: "log-out",
  //   },
  // ];

  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   const user = getUserInfo();
  //   setUser(user);
  // }, []);

  return (
    <Container>
      <h1 className="text-5xl text-center font-bold my-10 bg-slate-50 py-3">
        My Account
      </h1>
      <div className="grid grid-cols-12">
        <div className="col-span-3  h-screen border-e">
          <div className="flex flex-col gap-5 p-5 ">
            <h2 className="text-xl font-semibold p-2">My Account</h2>
            <hr />
            {generateSideItem("guest" as TUserRole).map((item) => (
              <Link
                className="hover:bg-primary/10 transition p-2"
                key={item.id}
                href={item.href}
              >
                <p className="flex items-center gap-2">
                  <span>{item.icon}</span> {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-9 p-10 h-screen">{children}</div>
      </div>
    </Container>
  );
};

export default DashboardLayout;
