import { User2Icon } from "lucide-react";
import { Avatar, AvatarFallback } from "../avatar";
import { Button } from "../button";
import { useAppSelector } from "@/redux/hooks";

const AvatarLoader = () => {
  const { user } = useAppSelector((state) => state.auth);
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
