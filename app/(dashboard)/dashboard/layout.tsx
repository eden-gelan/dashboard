
import LayoutClinet from "./_components/layout-client"

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {


  return (
    <div className=" min-h-screen relative bg-background text-white">
      <LayoutClinet>
        {children}
      </LayoutClinet>
      <div className="r absolute bg-primary/30 -top-12 right-10 h-[400px] w-[140px]  rounded-full blur-3xl z-[100000000]" />
    </div>
  )
}
