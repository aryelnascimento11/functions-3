"use client"

import { list } from "postcss"
import { useState } from "react"
import { IItem } from "../types/item"
import items from "../components/banner"

interface PropsNote {
    item:IItem
}

    

export default function Note(props: PropsNote) {

    var user = [1,2,3,4,5,'odiasdsajdis']
        console.log( user)
   // substitui um objeto do array 
        user[3]  = 10;
    //deleta remove o ultimo eletemento do array
    // user.pop()

    // splice coloca no meio de 1 e de 3 ou 8 e de nove
    // user.splice(2, 0, 999);

    // indexof indentifica o indici do array
    // console.log(user.indexOf(5))

    // join transforma em string
    var bbb = ['ioioio','ppppp',]
    console.log(user.join())


    return (
        <ul className="text-white divide-y border rounded-lg ">
            <li className="p-2 justify-between flex">
                {props.item.title}
                 <button  className="text-white rounded">
                    X
                 </button> 
         
            </li>
        </ul>
    )
}