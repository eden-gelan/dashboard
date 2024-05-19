import ChatCard from '@/components/chat-card'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const ChatTab = () => {
    return (
        <div className='rounded-lg overflow-hidden no-scrollbar flex flex-col mt-[50px] bg-foreground w-[280px] h-[500px] relative'>
            <div className='flex items-center py-4 bg-[#272831] px-6'>
                <h5>Chat Rooms</h5>
            </div>
            <div className='px-3 overflow-y-auto '>
                <div className="relative mt-4 w-full rounded-md ">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Icons.search size={15} />
                    </div>
                    <Input
                        id="email"
                        type="text"
                        className=' px-8 border-none h-8 bg-background'
                        autoCapitalize="none"
                        autoCorrect="off"
                        placeholder='Search chats'
                    />
                </div>
                <div className='mt-4 flex flex-col gap-2'>
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                    <ChatCard />
                </div>
            </div>
            <Button
                size="icon"
                className='r rounded-full absolute bottom-3 right-3'
            >
                <Icons.plus />

            </Button>
        </div>
    )
}

export default ChatTab