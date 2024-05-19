
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserAvatar({ user }: any) {
  console.log({ user })
  return (
    <Avatar className="h-8 w-8 rounded-full">
      {user.image ? (
        <AvatarImage alt="Picture" src={user.image} />
      ) : (
        <AvatarFallback className="t capitalize font-bold bg-blue-100">
          {user.name?.slice(0, 1)}
        </AvatarFallback>
      )}
    </Avatar>
  )
}
