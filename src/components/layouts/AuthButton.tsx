"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { NavigationMenuItem } from "../ui/navigation-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { getUserInfo, loginOutUser } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import { User2Icon } from "lucide-react";
import { useEffect, useState } from "react";

const AuthButton = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = getUserInfo();
    setUser(user);
  }, []);

  const handleLogOut = () => {
    loginOutUser();
    router.refresh();
  };
  return (
    <>
      {user ? (
        <div>
          <NavigationMenuItem>
            <Button
              onClick={handleLogOut}
              className="font-semibold"
              variant={"outline"}
            >
              Sign Out
            </Button>
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
