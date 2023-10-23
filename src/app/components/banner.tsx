"use client"
import { text } from "node:stream/consumers"
import { IItem } from "../types/item"
import Note from "./note"
import { useState } from "react"


export default function Banner() {
    const [newdelet, setNewdelet] = useState("")
    const [newText, setNewText] = useState({
        id: 2,
        title: "oi"
    })
    const [items, setItems] = useState<IItem[]>([
        { id: 1, title: "fake" }
    ]
    )




    return (
        <>
            <section className="w-screen h-screen bg-black flex py-4 justify-center">
                <div className="w-[30%]  min-w-[500px]  sm:min-w[100px] sm:h-[70vh] md:h-fit rounded-lg  border border-white shadow-lg  shadow-green-700mt-10 p-4">
                    <h1 className="text-3xl text-center py-4  text-white">Anotações</h1>
                    <div>
                        <input onChange={(e) => { setNewText({ ...newText, title: e.target.value }) }} className="rounded-full  px-2 text-2xl p-1 " type="text" />
                        <button
                            onClick={(o) => { setItems([...items, newText]) }}
                            className="text-white rounded   border hover:bg-[rgba(255,255,255,0.2)] hover:scale-110 cursor-pointer transition  ">
                            adicionar
                        </button>
                    </div>
                 
                    <ul className="text-white divide-y rounded-lg mt-2 border">
                        {items.map((item) => (<Note key={item.id} item={item} />))}
                    </ul>
                </div>
            </section>
            {/* border border-white shadow-lg p-4  shadow-green-700 rounded-lg mt-10 */}
        </>
    )
}