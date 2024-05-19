"use client";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "./icons";

export const TabLink = ({
  lable,
  link,
  Icon,
  setTab,
  currentTab,
  tab,
}: {
  lable: string;
  link?: string;
  Icon: LucideIcon | JSX.ElementType;
  setTab?: any;
  currentTab?: string;
  tab?: string;
}) => {
  const path = usePathname();
  const isActive = path === link;
  const isRightTab = currentTab === tab;
  return link ? (
    <Link
      href={link}
      className={` ${isActive && "text-primary"
        } flex items-center py-2 gap-1 px-4 relative`}
    >
      <Icon
        className={`${isActive ? "text-primary" : "text-white"}   `}
        size={15}
      />
      <h3 className="text-sm">{lable}</h3>
      {isActive && (
        <div className="a absolute bottom-1 inset-x-0 bg-primary h-[2px] rounded w-3/4 mx-auto" />
      )}
    </Link>
  ) : (
    <div
      onClick={() => setTab(tab)}
      className={` ${isActive && "text-main"
        } flex cursor-pointer items-center gap-2 py-2 px-4 relative`}
    >
      <Icon
        className={`${isActive ? "text-main" : "text-slate-400"}  `}
        size={15}
      />
      <h3 className="text-md font-semibold">{lable}</h3>
      {isRightTab && (
        <div className="a absolute bottom-0 inset-x-0 bg-blue-300 h-[2px] rounded" />
      )}
    </div>
  );
};
