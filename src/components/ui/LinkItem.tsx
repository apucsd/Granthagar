import { TSidebarItem } from "@/types/index.type";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkItem = ({ href, icon, title }: TSidebarItem) => {
  const linkPath = `/dashboard/${href}`;
  const pathname = usePathname();
  return (
    <Link
      className={`${
        linkPath === pathname ? "bg-slate-100 text-primary" : ""
      } hover:bg-slate-200 hover:text-primary transition p-2`}
      href={linkPath}
    >
      <p className="flex items-center gap-2">
        <span>{icon}</span> {title}
      </p>
    </Link>
  );
};

export default LinkItem;
