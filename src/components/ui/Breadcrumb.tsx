"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  return (
    <div className="text-primary font-semibold mx-10 my-10">
      <ul className={"flex justify-start gap-1"}>
        <li className={""}>
          <Link className="capitalize" href={"/"}>
            home
          </Link>
        </li>
        {pathNames.length > 0 && ">"}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;

          return (
            <div className="flex" key={index}>
              <Link className="capitalize" href={href}>
                {link}
              </Link>

              {pathNames.length !== index + 1 && "/"}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
