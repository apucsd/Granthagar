import Link from "next/link";
import { Button } from "../ui/button";
import { NavigationMenuItem } from "../ui/navigation-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { getUserInfo, loginOutUser } from "@/services/auth.services";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const router = useRouter();
  const user = getUserInfo();
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
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          </NavigationMenuItem>
        </div>
      )}
    </>
  );
};

export default AuthButton;
