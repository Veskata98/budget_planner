'use client';

import { useCallback, useState } from 'react';
import { Calendar } from './Calendar';
import { Calendar as CalendarIcon } from 'lucide-react';

export const CalendarWrapper = () => {
    const [showCalendar, setShowCalendar] = useState(false);

    const onClose = useCallback(() => {
        setShowCalendar(false);
    }, []);

    return (
        <div className="flex justify-center pt-4">
            {showCalendar && <Calendar onClose={onClose} />}
            <button
                onClick={() => setShowCalendar(!showCalendar)}
                className="flex gap-x-2 bg-zinc-600 p-2 rounded hover:bg-zinc-500 transition"
            >
                Show Calendar
                <CalendarIcon />
            </button>
        </div>
    );
};
