import {DateView} from "@/app/DateView";
import {format} from "date-fns";

export default function Home() {

    const date = new Date();

    return (
        <div className="flex flex-col w-[600px] mx-auto mt-12 gap-4">
            <p>Server: {format(date, 'yyyy-MM-dd HH:mm')}</p>

            <DateView serverDate={date}/>
        </div>
    )
}
