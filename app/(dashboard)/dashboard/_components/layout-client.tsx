"use client"
import React from 'react'
import Header from './navigation/main-nav'
import { LeftDrawer } from './navigation/left-drawer'
import { dashboardConfig } from '@/config/dashboard'
import RightDrawer from './navigation/right-drawer'

const LayoutClinet = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <header className="h-[100px] ml-[80px] fixed inset-x-0 z-[1000000000000] ">
                <Header />
            </header>
            <aside className="hidden fixed bg-foreground  inset-y-0 w-[80px] flex-col md:flex top-0  ">
                <LeftDrawer items={dashboardConfig.sidebarNav} />
            </aside>
            <aside className="hidden fixed  inset-y-0 w-[350px] flex-col md:flex right-0 z-[10000000000] top-[100px]">
                <RightDrawer items={dashboardConfig.rightDrawerNav} />
            </aside>
            <main className="fixed  ml-[80px] max-w-[calc(100vw-430px)]  mt-[100px] h-[calc(100vh-100px)] w-full z-[100000000000]">
                {children}
            </main>

        </div>
    )
}

export default LayoutClinet