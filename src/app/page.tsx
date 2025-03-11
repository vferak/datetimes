import {DateView} from "@/app/DateView";
import {DATETIME_FORMAT} from "@/app/date";
import {format} from "date-fns";

export default function Home() {
    const date = new Date();

    return (
        <div className="flex flex-col w-[600px] mx-auto mt-12 gap-4">
            <p>Server: {format(date, DATETIME_FORMAT)}</p>
            <DateView serverDate={date}/>
        </div>
    )
}
