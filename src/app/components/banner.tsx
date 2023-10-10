"use client"
import { list } from "postcss"
import Note from "./note"
import { useState } from "react"
import { chown } from "fs"

export default function Banner() {
    const [newText, setNewText] = useState("")
    const [items, setItems] = useState([
        "fake1",
        "fake2",
        "fake3",
    ]
    )
    
    function delete_() {
      items.splice(2)
      console.log(items);
        
    }
// - apagar o item

    return (
        <>  
            <section className="w-screen h-screen bg-black flex py-4 justify-center">
                <div className="w-[30%]  min-w-[500px]  sm:min-w[100px] sm:h-[70vh] md:h-fit rounded-lg  border border-white shadow-lg  shadow-green-700mt-10 p-4">
                    <button onClick={delete_}className="text-white rounded   border hover:bg-[rgba(255,255,255,0.2)] hover:scale-110 cursor-pointer transition  ">
                        adicionar
                    </button>
                    <h1 className="text-3xl text-center py-4  text-white">Anotações</h1>
                    <div className="justify-between flex">
                        <input  onChange={(e) => { setNewText(e.target.value) }} className="rounded-full  px-2 text-2xl p-1 " type="text" />
                        <button onClick={(o) => { setItems([...items, newText]) }}className="text-white rounded   border hover:bg-[rgba(255,255,255,0.2)] hover:scale-110 cursor-pointer transition  ">
                            adicionar
                        </button>
                    </div>
                    <ul className="text-white divide-y rounded-lg mt-2 border">
                        {items.map((ola) => (<Note key={ola} title={ola} />))}
                    </ul>
                </div>
            </section>
        </>
    )
}