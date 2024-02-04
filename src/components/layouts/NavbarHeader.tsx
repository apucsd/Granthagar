import { Bell, PhoneCall } from "lucide-react";
import Link from "next/link";

const NavbarHeader = () => {
  return (
    <div className="bg-green-400 text-white h-12">
      <div className="mx-20 h-full flex items-center justify-end gap-5">
        <p className="flex items-center gap-2">
          <PhoneCall className=""></PhoneCall> +8801712345678
        </p>
        <Link href="/faq">FAQ</Link>
        <Link href="/notification">
          <Bell></Bell>
        </Link>
      </div>
    </div>
  );
};

export default NavbarHeader;
