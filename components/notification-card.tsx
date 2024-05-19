import React from 'react'
import { Checkbox } from './ui/checkbox'
import { Button } from './ui/button'
import Link from 'next/link'

const NotificationCard = () => {
    return (
        <div className='flex items-start gap-3'>
            <div className='mt-1'>
                <Checkbox />
            </div>
            <div className='flex  flex-col items-start w-full '>
                <div className='flex items-center flex-1 w-full'>
                    <span className='text-sm'>ETA-02</span>
                    <h2 className='ml-auto text-xs'>09:90am</h2>
                </div>
                <p className='text-xs '>Lorem ipsum d elitsdhjdsfj sdhfj</p>
                <Link href={"#"} className='text-primary text-sm'>
                    View
                </Link>
            </div>

        </div>
    )
}

export default NotificationCard