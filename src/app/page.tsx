export default function Home() {
    const date = new Date();

    return (
        <div className="flex flex-col w-[600px] mx-auto mt-12 gap-4">
            <p>Server: {date.toLocaleString()}</p>
        </div>
    )
}
