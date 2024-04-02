import { User2Icon } from "lucide-react";
import { Avatar, AvatarFallback } from "../avatar";
import { getUserInfo } from "@/services/auth.services";
import { Button } from "../button";

const AvatarLoader = () => {
  const user = getUserInfo();
  return (
    <>
      {user ? (
        <Button className="font-semibold animate-pulse" variant={"outline"}>
          Sign Out
        </Button>
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
