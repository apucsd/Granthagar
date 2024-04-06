"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { NavigationMenuItem, NavigationMenuLink } from "../ui/navigation-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useRouter } from "next/navigation";
import { User2Icon } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logoutUser } from "@/redux/features/authSlice";

const AuthButton = () => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logoutUser());
    router.refresh();
  };
  return (
    <>
      {user ? (
        <div className="flex gap-2 items-center">
          <NavigationMenuItem>
            <Button
              onClick={handleLogOut}
              className="font-semibold"
              variant={"outline"}
            >
              Sign Out
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/dashboard">
              <Avatar>
                <AvatarFallback>
                  <User2Icon />
                </AvatarFallback>
              </Avatar>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </div>
      ) : (
        <div>
          <NavigationMenuItem>
            <Link href="/login">
              <Avatar>
                <AvatarFallback>
                  <User2Icon />
                </AvatarFallback>
              </Avatar>
            </Link>
          </NavigationMenuItem>
        </div>
      )}
    </>
  );
};

export default AuthButton;
