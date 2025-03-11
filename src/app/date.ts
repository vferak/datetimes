import { format as dateFnsFormat } from "date-fns";
import { tz, TZDate } from "@date-fns/tz";

export const DATETIME_FORMAT = 'yyyy-MM-dd HH:mm' as const

export const TIMEZONE_EUROPE_PRAGUE = 'Europe/London' as const

export const format = (date: Date) => {
    return dateFnsFormat(date, DATETIME_FORMAT, { in: tz(TIMEZONE_EUROPE_PRAGUE) });
}

export class EuropePragueDate extends TZDate {
    constructor(date?: Date) {
        super(date || new Date(), TIMEZONE_EUROPE_PRAGUE)
    }
}