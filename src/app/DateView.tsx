'use client'

export function DateView({serverDate}: { serverDate: Date }) {
    const date = new Date();

    return (
        <>
            <p>Client: {date.toLocaleString()}</p>
            <p>Server on Client: {serverDate.toLocaleString()}</p>
        </>
    );
}
