"use client"

import { list } from "postcss"
import { useState } from "react"
interface PropsNote {
    title: string,
}


export default function Note(props: PropsNote) {
    return (
        <ul className="text-white divide-y border rounded-lg "> 
           <li className="p-2 justify-between flex">
          {props.title}
            <button className="text-white p-1">X</button> 
            </li>   
        </ul>
    )
}