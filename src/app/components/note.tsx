"use client"

interface PropsNote {
    title: string,
}

export default function Note(props: PropsNote) {
    return (
        <ul className="text-white">
            <li className="py-2 justify-between flex border rounded border-white text-white">{props.title}
                <button className="text-white p-1">X</button>
            </li>
        </ul>
    )
}