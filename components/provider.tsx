'use client'

import { SessionProvider } from 'next-auth/react'
import { FC, ReactNode } from 'react'
import { TooltipProvider } from './ui/tooltip'

interface LayoutProps {
  children: ReactNode
}


const Providers: FC<LayoutProps> = ({ children }) => {
  return (
    <TooltipProvider>
      <SessionProvider>{children}</SessionProvider>
    </TooltipProvider>
  )
}

export default Providers
