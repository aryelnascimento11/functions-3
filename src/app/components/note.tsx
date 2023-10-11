"use client"

import { list } from "postcss"
import { useState } from "react"
import { IItem } from "../types/item"
interface PropsNote {
    item:IItem
}


export default function Note(props: PropsNote) {

    return (
        <ul className="text-white divide-y border rounded-lg ">
            <li className="p-2 justify-between flex">
                {props.item.title}
                <button className="text-white rounded">
                    X
                </button>
            </li>
        </ul>
    )
}