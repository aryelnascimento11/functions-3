"use client"

import { describe } from "node:test"
import { useState } from "react"

export default function Header() {

    const [text, setText] = useState("green")
    const [list, setList] = useState("id, title")

    function trocar() {
        setText("gray")
        console.log(text)
    }


    return (
        <>
        <header className="bg-black top-0  w-screen  border-b border-white p-6  shadow-lg'>">
            <h1 
             style={{color:text} }
            className="text-3xl text-center justify-center flex text-white">Bloco de Notas</h1>
            <button 
           
            onClick={trocar} className="text-3xl text-white">ooooo</button>
            </header>
        </>
    )
}