"use client"
import Note from "./note"
import { useState } from "react"

export default function Banner() {
    const [text, setText] = useState("oioi")
    const item = [
        "fake1",
        "fake2",
        "fake3",
    ]

    function café(ola: string) {
        return (
            <Note title={ola} />
        )
    }

    return (
        <>
            <section className="w-screen h-screen bg-black flex py-4 justify-center">
                <div className="border border-white shadow-lg p-4  shadow-green-700 rounded-lg mt-10">
                    <h1 className="text-3xl text-center py-4  text-white">Anotações</h1>
                    <div>
                        <input className="rounded-full px-2 text-2xl p-1 " type="text" />
                        <button className="text-white rounded   border hover:bg-[rgba(255,255,255,0.2)] hover:scale-110 cursor-pointer transition  ">adicionar</button>
                    </div>
                    <ul className="text-white divide-y border rounded-lg ">
                        {item.map((ola) => (<Note key={ola} title={ola} />))}
                    </ul>
                </div>
            </section>

        </>
    )
}