"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { SidebarNavItem, sideBarItem } from "@/types"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import Logo from "@/components/logo"
import { UserAccountNav } from "@/components/user-account-nav"

interface MainNavProps {
    items: SidebarNavItem
}

export function LeftDrawer({ items }: MainNavProps) {
    const path = usePathname()

    const mainItems = items.mainItems
    const subItems = items?.subItems

    return (
        <div className="flex flex-col pt-3 gap-4  h-full w-full items-stretch">
            <div className="flex justify-center">
                <Logo />
            </div>
            <div className=" flex flex-col gap-4">
                {mainItems.map((item, index) => {
                    const Icon = Icons[item?.icon ?? "arrorLeft"]
                    const isActive = item?.href === "/dashboard" ? path === "/dashboard" : path === item.href || path?.includes(item.href ?? "/doesnt-exist")
                    return <Link
                        className="w-full "
                        key={index} href={item.disabled ? "/" : item.href ?? "/dashboard"}>
                        {/* <span
                            className={cn(
                                "group flex items-center rounded-md font-[500] px-2 mx-4 mt-1 py-2 text-md hover:bg-main/10 hover:text-main",
                                isActive ? "bg-main/10 text-main" : "transparent",
                                item.disabled && "cursor-not-allowed opacity-80"
                            )}
                        >
                            <Icon className=" h-20 w-20 bg-white" />
                            <span className="text-[13px]">{item.title}</span>
                        </span> */}
                        <div className="w-full flex justify-center px-2">
                            <span
                                className={cn(
                                    "group flex items-center rounded-xl p-2 font-[500]  text-md hover:bg-main/10 hover:text-main",
                                    isActive ? "bg-primary text-main" : "transparent border border-gray-800",
                                    item.disabled && "cursor-not-allowed opacity-80"
                                )}
                            >
                                <Icon className=" h-4 w-4 text-white" />
                            </span>
                        </div>


                    </Link>
                })}
            </div>
            <div className="mt-10">
                {subItems.map((item, index) => {
                    const Icon = Icons[item?.icon ?? "arrorLeft"]
                    const isActive = item?.href === "/dashboard" ? path === "/dashboard" : path === item.href || path?.includes(item.href ?? "/doesnt-exist")
                    return <Link key={index} href={item.disabled ? "/" : item.href ?? "/dashboard"}>
                        <div className="w-full flex justify-center px-2">
                            <span
                                className={cn(
                                    "group flex items-center rounded-xl p-2 font-[500]  text-md hover:bg-main/10 hover:text-main",
                                    isActive ? "bg-primary text-main" : "transparent",
                                    item.disabled && "cursor-not-allowed opacity-80"
                                )}
                            >
                                <Icon className=" h-6 w-6 text-white" />
                            </span>
                        </div>
                    </Link>
                })}
            </div>
            <div className="flex justify-center">
                <UserAccountNav
                    user={{
                        name: "Eden gelan",
                        image: "",
                        email: "edigelan123@gmail.com",
                    }}
                />
            </div>

        </div>
    )
}
