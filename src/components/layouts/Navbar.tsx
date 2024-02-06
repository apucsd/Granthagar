"use client";
import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import NavbarHeader from "./NavbarHeader";
import logo from "/public/granthagar.png";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Input } from "../ui/input";
import booksLogo from "@/assets/books.jpg";
import { Button } from "../ui/button";
const Navbar = () => {
  const menus = [
    { title: "Home", path: "/" },
    { title: "Blog", path: "/your-path" },
    { title: "About Us", path: "/about" },
    { title: "Contact Us", path: "/your-path" },
  ];

  return (
    <nav className="bg-[#ebefe044]  w-full max-w-7xl mx-auto border-b md:border-0">
      <div>
        <NavbarHeader></NavbarHeader>
      </div>

      <div
        className={`p-3 h-full flex gap-4 justify-between flex-wrap items-center`}
      >
        <Link className="md:block hidden" href="/">
          <Image src={logo} alt="logo" height={70} />
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="space-x-5">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-semibold">
                Menu
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[450px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3 flex flex-col gap-4 justify-center items-center">
                    <p>All Menu Items are here</p>
                    {menus.map((menu, i) => (
                      <Link
                        className="hover:bg-gray-50 w-full p-2 border-b-2"
                        href={menu.path}
                        key={i}
                      >
                        {menu.title}
                      </Link>
                    ))}
                  </li>
                  <Image
                    className="md:block hidden"
                    src={booksLogo}
                    width={200}
                    height={200}
                    alt="books"
                  />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex relative">
              <Input
                className="lg:w-[500px] md:w-[300px] w-full"
                placeholder="Search your favorites books..."
              />

              <Button
                className="absolute text-sm end-0 px-3 py-0"
                type="submit"
              >
                <Search></Search>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList className="space-x-5">
            <NavigationMenuItem>
              <ShoppingCart></ShoppingCart>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button className="font-semibold" variant={"outline"}>
                <Link href="/sign-in">Sign In</Link>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};
export default Navbar;