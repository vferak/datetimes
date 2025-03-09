'use client'

import {useState} from "react";
import {DateTimePicker} from '@mui/x-date-pickers';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFnsV3'
import {format} from "date-fns";
import {TZDate} from "@date-fns/tz";

export function DateView({serverDate}: { serverDate: Date }) {
    const [date, setDate] = useState<Date>(new TZDate(serverDate, 'Europe/Prague'));

    const updateDate = (newDate: Date): void => {
        setDate(new TZDate(newDate, 'Europe/Prague'));
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className="flex flex-col w-96 mx-auto mt-12">
                <p>{format(date, 'yyyy-MM-dd HH:mm:ss')}</p>
                <DateTimePicker value={date} ampm={false} onChange={(newValue) => {
                    if (newValue !== null) {
                        updateDate(newValue);
                    }
                }}/>
                <button onClick={() => updateDate(new Date())}>Update date</button>

            </div>
        </LocalizationProvider>

    );
}
