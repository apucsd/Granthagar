"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AlignLeft, Search, ShoppingCart } from "lucide-react";
import NavbarHeader from "./NavbarHeader";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Headroom from "react-headroom";
import { Avatar } from "../ui/avatar";
import { useState } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menus = [
    { title: "Home", path: "/" },
    { title: "Books Category", path: "/books/category" },
    { title: "About Us", path: "/about" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  return (
    <nav className="bg-[#ebefe044] relative  w-full max-w-7xl mx-auto border-b md:border-0">
      <Headroom
        style={{
          transition: "all 2s ease-in-out",
          zIndex: "999",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div>
          <NavbarHeader></NavbarHeader>
        </div>
        <div
          className={`md:px-10 px-10 py-5  p-5 md:p-0 backdrop-blur-sm transition-all duration-1000 bg-white/70 h-full flex gap-4 md:justify-between justify-center flex-wrap  items-center`}
        >
          <div className="flex justify-center items-center gap-1">
            <div
              onClick={() => setShowMenu(!showMenu)}
              className="hover:cursor-pointer"
            >
              <AlignLeft />
            </div>
            <Link className="md:flex  relative items-center  hidden" href="/">
              <lord-icon
                src="https://cdn.lordicon.com/qwjfapmb.json"
                trigger="hover"
                colors="primary:#ebe6ef,secondary:#DD1361,tertiary:#3a3347,quaternary:#f24c00,quinary:#faf9d1"
                style={{ width: 80, height: 50 }}
              ></lord-icon>
              <p className="font-semibold -ms-5 uppercase">Granthagar</p>
            </Link>
          </div>

          <NavigationMenuItem className="flex relative">
            <Input
              className="lg:w-[500px] md:w-[300px] w-full"
              placeholder="Search your favorites books..."
            />

            <Button className="absolute text-sm end-0 px-3 py-0" type="submit">
              <Search></Search>
            </Button>
          </NavigationMenuItem>
          <NavigationMenu>
            <NavigationMenuList className="space-x-5">
              <NavigationMenuItem className="hover:cursor-pointer">
                <Link href="/cart">
                  <ShoppingCart></ShoppingCart>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/login">
                  <Avatar>
                    {/* <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  /> */}
                    <lord-icon
                      src="https://cdn.lordicon.com/xcxzayqr.json"
                      trigger="hover"
                      colors="primary:#DD1361,secondary:#545454"
                      style={{ width: "50px", height: "50px" }}
                    ></lord-icon>
                    {/* <AvatarFallback>CN</AvatarFallback> */}
                  </Avatar>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button className="font-semibold" variant={"outline"}>
                  Sign Out
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </Headroom>

      {/* menu items here */}

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              type: "spring",
              bounce: 0,
              duration: 0.8,
            }}
            className="fixed z-[99999] bg-primary text-white shadow-lg top-0 left-0 w-full max-w-[280px] p-5"
          >
            <div className="flex w-full  text-end justify-end">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="bg-white hover:cursor-pointer w-10 text-gray-700 text-lg block rounded-full"
              >
                X
              </button>
            </div>
            <div>
              {/* all link */}
              <hr className="my-4" />
              <motion.ul className="flex uppercase flex-col items-center h-screen gap-10 justify-start">
                {menus.map((menu, i) => (
                  <Link
                    className="hover:border-b  transition-all duration-300"
                    key={i}
                    href={menu.path}
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    {menu.title}
                  </Link>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;
