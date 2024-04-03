import { USER_ROLE } from "@/constants/constant";
import { TSidebarItem, TUserRole } from "@/types/index.type";
import {
  Book,
  History,
  LayoutDashboard,
  ListOrdered,
  TableProperties,
  UserCheck2,
} from "lucide-react";

export const generateSideItem = (role: TUserRole) => {
  const sidebarItem: TSidebarItem[] = [];

  switch (role) {
    case USER_ROLE.ADMIN:
      sidebarItem.push(
        {
          id: 1,
          title: "Dashboard",
          icon: <LayoutDashboard className="size-5" />,
          href: `${role}`,
        },
        {
          id: 2,
          title: "Manage Books",
          icon: <Book className="size-5" />,
          href: `${role}/manage-books`,
        },
        {
          id: 3,
          title: "Manage Users",
          icon: <UserCheck2 className="size-5" />,
          href: `${role}/manage-users`,
        },
        {
          id: 4,
          title: "Manage Orders",
          icon: <ListOrdered className="size-5" />,
          href: `${role}/manage-orders`,
        }
      );
      break;
    case USER_ROLE.SELLER:
      sidebarItem.push(
        {
          id: 1,
          title: "Dashboard",
          icon: <LayoutDashboard className="size-5" />,
          href: `${role}`,
        },
        {
          id: 2,
          title: "Manage Books",
          icon: <Book className="size-5" />,
          href: `${role}/manage-books`,
        },
        // {
        //   id: 3,
        //   title: "Orders",
        //   icon: <ListOrdered className="size-5" />,
        //   href: `${role}/orders`,
        // },
        {
          id: 4,
          title: "Manage Orders",
          icon: <ListOrdered className="size-5" />,
          href: `${role}/manage-orders`,
        }
      );
      break;
    case USER_ROLE.GUEST:
      sidebarItem.push(
        {
          id: 1,
          title: "Dashboard",
          icon: <LayoutDashboard className="size-5" />,
          href: `${role}`,
        },

        {
          id: 3,
          title: "Orders",
          icon: <ListOrdered className="size-5" />,
          href: `${role}/orders`,
        },
        {
          id: 4,
          title: "Orders History",
          icon: <History className="size-5" />,
          href: `${role}/orders-history`,
        },
        {
          id: 4,
          title: "Account Details",
          href: `${role}/account-details`,
          icon: <TableProperties className="size-5" />,
        }
      );
      break;

    default:
      break;
  }
  return [...sidebarItem];
};
