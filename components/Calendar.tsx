'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { parseDate, today, getLocalTimeZone } from '@internationalized/date';

import { DateValue, Calendar, Button } from '@nextui-org/react';

interface CalendarProps {
    onClose: () => void;
}

export const CalendarComponent = ({ onClose }: CalendarProps) => {
    const path = usePathname();
    const pathDate = path.split('/').pop();

    const [date, setDate] = useState<DateValue | undefined>(pathDate ? parseDate(pathDate) : today(getLocalTimeZone()));

    const router = useRouter();

    const handleApply = () => {
        onClose();
        router.push(`/calendar/${date?.toString()}`);
    };

    const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            onClick={onBackdropClick}
            className="flex gap-x-4 justify-center items-center absolute w-full h-full backdrop-blur-lg"
        >
            <Calendar
                showMonthAndYearPickers
                onFocusChange={setDate}
                focusedValue={date}
                value={date}
                color="warning"
                // minValue={today(getLocalTimeZone())}
            />

            <div className="flex flex-col gap-y-2">
                <Button onClick={() => setDate(today(getLocalTimeZone()))} className="p-0 text-yellow-500">
                    Today
                </Button>
                <Button onClick={handleApply} className="p-0 text-green-500">
                    Apply
                </Button>
            </div>
        </div>
    );
};
