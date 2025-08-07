'use client'
import { useEffect, useState } from "react";


export default function MyClockTime () {

    const [currentTime, setcurrentTime] = useState(new Date().toLocaleTimeString())
   
    useEffect(()=>{
    const tm = setInterval(() => {
             setcurrentTime(new Date().toLocaleTimeString())
        }, 1000);

        return(()=>{
            clearInterval(tm)
        })
    },[])

    return(
        <div className="font-bold">
            현재 시간 : {currentTime} 
        </div>

    )
}
