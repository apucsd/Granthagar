import { User2Icon } from "lucide-react";
import { Avatar, AvatarFallback } from "../avatar";
import { getUserInfo } from "@/services/auth.services";
import { Button } from "../button";

const AvatarLoader = () => {
  const user = getUserInfo();
  return (
    <>
      {user ? (
        <div className="flex gap-2 items-center">
          <Button className="font-semibold animate-pulse" variant={"outline"}>
            Sign Out
          </Button>
          <Avatar>
            <AvatarFallback>
              <User2Icon />
            </AvatarFallback>
          </Avatar>
        </div>
      ) : (
        <Avatar className="animate-pulse">
          <AvatarFallback>
            <User2Icon />
          </AvatarFallback>
        </Avatar>
      )}
    </>
  );
};

export default AvatarLoader;
