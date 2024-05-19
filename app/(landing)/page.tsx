import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const LandingPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <Link
                href={"/dashboard"}
                className={cn(buttonVariants({}))}
            >
                Go to Dashboard
            </Link>

        </div>
    )
}

export default LandingPage