'use client'

import {format as formatDateFns} from "date-fns";
import {DATETIME_FORMAT, format} from "@/app/date";

export function DateView({serverDate}: { serverDate: Date }) {
    const date = new Date();

    return (
        <>
            <p>Client: {formatDateFns(date, DATETIME_FORMAT)}</p>
            <p>Server on Client: {format(serverDate)}</p>
        </>
    );
}
