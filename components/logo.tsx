import { siteConfig } from '@/config/site'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = ({ displayName }: { displayName?: boolean }) => {
    return (
        < Link href="/" className="hidden items-center space-x-2 md:flex" >
            <Image
                width={600}
                height={600}
                alt='logo'
                src="/svg/logo.svg"
                className='w-12'
            />
            {displayName && <span className="hidden font-bold sm:inline-block">
                {siteConfig.name}
            </span>}
        </Link >
    )
}

export default Logo
