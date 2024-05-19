"use client";
import { Icons } from "@/components/icons";
import { TabLink } from "@/components/tab";
import { LucideIcon } from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const lowerNavigation = [
  {
    lable: "Test case",
    link: `/dashboard`,
    Icon: Icons.tag
  },
  {
    lable: "Service",
    link: `/dashboard/unknown`,
    Icon: Icons.tag
  },
  {
    lable: "Issue",
    link: `/dashboard/unknown`,
    Icon: Icons.tag
  },
  {
    lable: "Tools",
    link: `/dashboard/unknown`,
    Icon: Icons.tag
  },
  {
    lable: "Credentials",
    link: `/dashboard/unknown`,
    Icon: Icons.tag
  },
  {
    lable: "Notes",
    link: `/dashboard/unknown`,
    Icon: Icons.tag
  },
  {
    lable: "Files",
    link: `/dashboard/unknown`,
    Icon: Icons.tag
  },
  {
    lable: "Money",
    link: `/dashboard/unknown`,
    Icon: Icons.tag
  },
]

const LowerTab = () => {
  const param = useParams();
  return (
    <div className="px-8 w-full  flex gap-2 rounded-md bg-foreground border-b-4 border-black/20 ">
      {
        lowerNavigation?.map((naviagtion, index) => {
          return <div className='flex justify-center items-center'>
            <TabLink
              lable={naviagtion.lable}
              link={naviagtion?.link}
              Icon={naviagtion?.Icon}
            />
            {(index != lowerNavigation.length - 1) && < div className='h h-4/6 w-[2px] rounded-full bg-[#D9D9D9]/40' />}
          </div>
        })
      }
    </div>
  );
};

export default LowerTab;
