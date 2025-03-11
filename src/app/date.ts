import { format as dateFnsFormat } from "date-fns";
import { TZDate, tz } from "@date-fns/tz";

export const TIMEZONE_EUROPE_PRAGUE = 'Europe/Prague' as const

export const format = (date: Date) => {
    return dateFnsFormat(date, 'yyyy-MM-dd HH:mm', { in: tz(TIMEZONE_EUROPE_PRAGUE) });
}

export class EuropePragueDate extends TZDate {
    constructor(date?: Date) {
        super(date || new Date(), TIMEZONE_EUROPE_PRAGUE)
    }
}