import NotificationCard from '@/components/notification-card'
import { Calendar } from '@/components/ui/calendar'
import React from 'react'

const CalendarTab = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div>
            <div className='flex flex-col mt-[50px] bg-foreground rounded-lg'>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md bg-transparent "
                />
                <div className='px-4 pb-4'>
                    <div className='flex justify-between items-baseline border-b'>
                        <h3>Updates</h3>
                        <span className='text-xs'>View all(23) </span>
                    </div>
                    <div className='s space-y-4 mt-2'>
                        <NotificationCard />
                        <NotificationCard />
                        <NotificationCard />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CalendarTab