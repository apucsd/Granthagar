"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AlignLeft, ShoppingCart } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import Headroom from "react-headroom";
import { useState } from "react";
import SearchBook from "../ui/SearchBook";
import { useAppSelector } from "@/redux/hooks";
import dynamic from "next/dynamic";
import NavItemLoader from "../ui/loader/NavItemLoader";
import AvatarLoader from "../ui/loader/AvatarLoader";
const Navbar = () => {
  const NavigationMenuNav = dynamic(() => import("./NavigationMenuNav"), {
    ssr: false,
    suspense: true,
    loading: () => <NavItemLoader />,
  });
  const AuthButton = dynamic(() => import("./AuthButton"), {
    ssr: false,
    loading: () => <AvatarLoader />,
  });

  const [showMenu, setShowMenu] = useState(false);

  const { products } = useAppSelector((state) => state.cart);
  const menus = [
    { title: "Home", path: "/" },
    { title: "Books", path: "/books" },
    { title: "About Us", path: "/about" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  return (
    <nav className="bg-[#ebefe044] relative h-full   w-full max-w-7xl mx-auto border-b md:border-0">
      <Headroom
        style={{
          transition: "all 2s ease-in-out",
          zIndex: "999",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div>{/* <NavbarHeader></NavbarHeader> */}</div>
        <div
          className={`md:px-10 px-10 md:py-2  p-5 md:p-0 backdrop-blur-sm transition-all duration-1000 bg-white/70 h-full flex gap-4 justify-between  flex-wrap  items-center`}
        >
          <div className="flex justify-center items-center gap-1">
            <div
              onClick={() => setShowMenu(!showMenu)}
              className="hover:cursor-pointer block md:hidden"
            >
              <AlignLeft />
            </div>
            <Link className="  hidden md:flex relative items-center " href="/">
              <lord-icon
                src="https://cdn.lordicon.com/qwjfapmb.json"
                trigger="hover"
                colors="primary:#ebe6ef,secondary:#4F46E5,tertiary:#3a3347,quaternary:#f24c00,quinary:#faf9d1"
                style={{ width: 80, height: 50 }}
              />
              <p className="font-semibold  -ms-5 uppercase">Granthagar</p>
            </Link>
          </div>

          <SearchBook />
          <NavigationMenu>
            <NavigationMenuList className="space-x-5">
              <NavigationMenuItem className="hover:cursor-pointer">
                <Link href="/cart">
                  <div className="relative"></div>

                  <div>
                    <div className="t-0 absolute left-3">
                      <p className="flex size-1 items-center justify-center rounded-full bg-primary p-2 text-xs text-white">
                        {products.length}
                      </p>
                    </div>
                    <ShoppingCart />
                  </div>
                </Link>
              </NavigationMenuItem>
              <AuthButton />
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </Headroom>
      <div className="hidden  md:block md:px-10  px-10 md:py-2 border-t  p-5  transition-all h-full">
        <NavigationMenuNav />
      </div>
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
            className=" z-[99999] fixed h-screen w-[100vw] overflow-hidden  shadow-lg top-0  left-0"
          >
            <div className="max-w-[300px] h-screen bg-white p-10">
              <div className="flex w-full  justify-between">
                <h1 className="text-xl my-1 font-bold">Menu Categories</h1>
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="bg-slate-100 hover:cursor-pointer w-10 text-gray-700 text-lg block rounded-full"
                >
                  X
                </button>
              </div>
              <div>
                {/* all link */}

                <hr className="my-4" />
                <motion.ul className="flex uppercase  flex-col items-center  gap-10 justify-start">
                  {menus.map((menu, i) => (
                    <Link
                      className="w-full pb-2 border-b transition-all duration-300"
                      key={i}
                      href={menu.path}
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      {menu.title}
                    </Link>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;
