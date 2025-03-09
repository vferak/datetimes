import {DateView} from "@/app/DateView";
import {TZDate} from "@date-fns/tz";

export default function Home() {

    const date = new Date();

    return (
        <DateView serverDate={date}/>
    )
}
