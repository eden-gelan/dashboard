import { cn } from '@/lib/utils'
import React from 'react'

const SectionWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('px-5', className)}>
            {children}
        </div>
    )
}

export default SectionWrapper
