"use client"
import React from 'react'
import { HeaderText } from '@/components/header'
import TopNavBarTab from './top-nav-tab'
import LowerTab from './lower-tab'



const Header = () => {
    return (
        <div className=" h-full flex flex-col justify-between pt-4">
            <div className='flex justify-between items-center w-full h-[40px] ml-5'>
                <HeaderText className='ml-5'
                    heading='Company One'
                    text="Serving you needs with Quality products"
                />
                <TopNavBarTab />
            </div>
            <div className='mt-5 ml-5'>
                <LowerTab />
            </div>
        </div>

    )
}

export default Header