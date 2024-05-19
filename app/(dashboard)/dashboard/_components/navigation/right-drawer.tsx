"use client"
import React, { useState } from 'react'
import CalendarTab from './calander-tab'
import { cn } from '@/lib/utils'
import { sideBarItem } from '@/types'
import { Icons } from '@/components/icons'
import ChatTab from './chat-tab'




const RightDrawer = ({ items }: { items: sideBarItem[] }) => {
    const [tab, setTab] = useState<"CALANDER" | "CHAT">("CALANDER")
    return (
        <div className='w-full flex justify-end gap-2 h-full'>
            {tab === "CALANDER" && <CalendarTab />}
            {tab === "CHAT" && <ChatTab />}
            <div className='w-[50px] bg-foreground h-full pt-16 space-y-2' >
                {items.map((item, index) => {
                    const Icon = Icons[item?.icon ?? "arrorLeft"]
                    const isActive = item?.href === tab
                    return <button
                        className="w-ful "
                        key={index}
                        onClick={() => setTab(item?.href as "CALANDER" | "CHAT")}
                    >
                        <div className="w-full flex justify-center px-2">
                            <span
                                className={cn(
                                    "group flex items-center rounded-xl p-2 font-[500]  text-md hover:bg-main/10 hover:text-main",
                                    isActive ? "bg-primary text-main" : "transparent border border-black",
                                    item.disabled && "cursor-not-allowed opacity-80"
                                )}
                            >
                                <Icon className=" h-4 w-4 text-white" />
                            </span>
                        </div>

                    </button>
                })}
            </div>
        </div>
    )
}

export default RightDrawer