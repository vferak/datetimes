'use client'

import {useState} from "react";
import {DateTimePicker} from '@mui/x-date-pickers';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFnsV3'
import {DATETIME_FORMAT, format} from "@/app/date";
import { cs } from 'date-fns/locale/cs';
import {saveDate} from "@/app/actions";
import {format as formatDateFns} from "date-fns";

export function DateView({serverDate}: { serverDate: Date }) {
    const clientDate = new Date();

    const [date, setDate] = useState<Date>(new Date(serverDate));

    const updateDate = async (newDate: Date): Promise<void> => {
        await saveDate(newDate);
        setDate(newDate);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={cs}>
            <p>Client: {formatDateFns(clientDate, DATETIME_FORMAT)}</p>
            <p>Server on Client: {format(date)}</p>
            <DateTimePicker value={date} ampm={false} onChange={async (newValue) => {
                if (newValue !== null) {
                    await updateDate(newValue);
                }
            }}/>
        </LocalizationProvider>
    );
}
