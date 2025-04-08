"use client"

import { usePathname } from "next/navigation"

export  default function NotFound(){
    const pathName = usePathname()
    const pathNameArray = pathName?.split("/")
    const productid = pathNameArray["2"]
    const reviewid = pathNameArray["4"]
    return(
        <h1>review {reviewid} not found for {productid}</h1>
    )
}