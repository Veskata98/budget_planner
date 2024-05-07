'use client';

import { CalendarComponent } from '@/components/Calendar';
import { useState } from 'react';

interface DatePageProps {
    params: {
        date: string;
    };
}

export default function DatePage({ params }: DatePageProps) {
    const [showCalendar, setShowCalendar] = useState(false);

    const onClose = () => {
        setShowCalendar(false);
    };

    return (
        <div>
            {showCalendar && <CalendarComponent onClose={onClose} />}
            <button onClick={() => setShowCalendar(!showCalendar)}>Show Calendar</button>
            <div>{new Date(params.date).toDateString()}</div>
        </div>
    );
}
