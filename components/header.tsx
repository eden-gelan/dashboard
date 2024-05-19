import { cn } from "@/lib/utils"

interface DashboardHeaderProps {
  heading: string
  text?: string,
  className?: string
}

export function HeaderText({
  heading,
  text,
  className
}: DashboardHeaderProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <h1 className="font-heading font-semibold text-xl md:text-2xl ">{heading}</h1>
      {text && <p className="text-xs hidden md:block font-[200]">{text}</p>}
    </ div>
  )
}
