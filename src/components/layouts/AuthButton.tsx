"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { NavigationMenuItem, NavigationMenuLink } from "../ui/navigation-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useRouter } from "next/navigation";
import { User2Icon } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logoutUser } from "@/redux/features/authSlice";
import { useState } from "react";
import { ConfirmModal } from "../modal/ConfirmModal";
import { toast } from "sonner";

const AuthButton = () => {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logoutUser());
    toast.success("User logged out successfully!!!", { duration: 1000 });
    router.refresh();
  };
  return (
    <>
      {user ? (
        <div className="flex gap-2 items-center">
          <NavigationMenuItem>
            <Button
              onClick={() => setOpenModal(true)}
              className="font-semibold"
              variant={"outline"}
            >
              Sign Out
            </Button>
            <ConfirmModal
              open={openModal}
              setOpen={setOpenModal}
              handleConfirm={handleLogOut}
              description="Your your sure to logout!!!"
            />
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
