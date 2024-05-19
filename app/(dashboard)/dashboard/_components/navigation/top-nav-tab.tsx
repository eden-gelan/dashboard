"use client"
import { Icons } from '@/components/icons'
import { TabLink } from '@/components/tab'
import { Button } from '@/components/ui/button'
import { link } from 'fs'
import { LucideIcon } from 'lucide-react'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'


const topNavigation = [
    {
        lable: "Home",
        link: `/dashboard`,
        Icon: Icons.home
    },
    {
        lable: "Shell",
        link: `/dashboard/unknown`,
        Icon: Icons.shell
    },
    {
        lable: "Bookmark",
        link: `/dashboard/unknown`,
        Icon: Icons.bookMark
    },
    {
        lable: "Tools",
        link: `/dashboard/unknown`,
        Icon: Icons.tools
    },
    {
        lable: "Library",
        link: `/dashboard/unknown`,
        Icon: Icons.library
    },
    {
        lable: "Search",
        link: `/dashboard/unknown`,
        Icon: Icons.search
    },
]

const TopNavBarTab = () => {
    const param = useParams()
    return (
        <div className='px-8 w-[800px] border-b-4 border-black/20 flex gap-1  justify-end rounded-l-full bg-foreground'>
            {
                topNavigation?.map((naviagtion, index) => {
                    return <div className='flex justify-center items-center'>
                        <TabLink
                            lable={naviagtion.lable}
                            link={naviagtion?.link}
                            Icon={naviagtion?.Icon}
                        />
                        {(index != topNavigation.length - 1) && < div className='h h-4/6 w-[2px] rounded-full bg-[#D9D9D9]/40' />}
                    </div>
                })
            }
            <Button
                variant={"ghost"}
                size={"icon"}
                className='h hover:bg-transparent hover:text-white/70'
            >
                <Icons.dotMenu />
            </Button>
        </div>
    )
}

export default TopNavBarTab

