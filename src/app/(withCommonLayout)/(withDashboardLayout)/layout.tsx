import Container from "@/components/ui/Container";
import Link from "next/link";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const sidebarLinks = [
    {
      id: 1,
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      id: 2,
      title: "Orders",
      link: "/dashboard/orders",
    },
    {
      id: 3,
      title: "Address",
      link: "/dashboard/address",
    },
    {
      id: 4,
      title: "Account Details",
      link: "/dashboard/account-details",
    },
    {
      id: 5,
      title: "Logout",
      link: "/logout",
    },
  ];

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
            {sidebarLinks.map((link) => (
              <Link
                className="hover:bg-primary/20 transition p-2"
                key={link.id}
                href={link.link}
              >
                {link.title}
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
