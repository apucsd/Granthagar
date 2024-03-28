import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { categories, writers } from "@/constants/constant";

const NavigationMenuNav = () => {
  return (
    <NavigationMenu className="text-[16px]">
      <NavigationMenuList className="gap-2">
        <NavigationMenuItem className="border-r p-2">
          <NavigationMenuLink
            href="/"
            className="bg-transparent hover:text-primary"
          >
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="border-r p-2">
          <NavigationMenuLink className="bg-transparent hover:text-primary">
            <Link href="/books">Books</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:text-primary border-r text-[16px] p-2">
            Category
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-4 gap-3 p-6 md:w-[400px] lg:w-[800px] ">
              {categories.map((category) => (
                <NavigationMenuLink
                  className="hover:text-primary"
                  asChild
                  key={category.id}
                >
                  <Link href={category.link}>{category.title}</Link>
                </NavigationMenuLink>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:text-primary border-r text-[16px] p-2">
            Writer
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-4 gap-3 p-6  lg:w-[1200px] ">
              {writers.map((writer) => (
                <NavigationMenuLink
                  className="hover:text-primary"
                  asChild
                  key={writer.id}
                >
                  <Link href={writer.link}>{writer.name}</Link>
                </NavigationMenuLink>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="bg-transparent border-r p-2 hover:text-primary">
          <NavigationMenuLink href="/about">About Us</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="border-r p-2 hover:text-primary">
          <NavigationMenuLink href="/contact">Contact Us</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default NavigationMenuNav;
