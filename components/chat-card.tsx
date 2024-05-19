import React from 'react'
import { UserAvatar } from './user-avatar'

const ChatCard = () => {
    return (
        <div className='flex gap-2 px-4 bg-[#3D3E4A] py-2 rounded-xl'>
            <UserAvatar
                user={{ name: "Abel" }}
            />
            <div>
                <h3 className='text-sm'>Test Comunuity</h3>
                <h5 className='text-[10px]'>Lorem ipsum dolor sit amet</h5>
            </div>

        </div>
    )
}

export default ChatCard