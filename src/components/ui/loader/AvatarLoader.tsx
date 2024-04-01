import { User2Icon } from "lucide-react";
import { Avatar, AvatarFallback } from "../avatar";

const AvatarLoader = () => {
  return (
    <Avatar className="animate-pulse">
      <AvatarFallback>
        <User2Icon />
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarLoader;
