"use client"

import { useEffect } from "react"

interface Props{
    walletId:string|null
    selectedDate:Date
}
const TransactionListPanel = ({walletId,selectedDate}:Props) =>{
    useEffect(()=>{
        console.log(walletId)
        console.log(selectedDate)
    },[])
    return <>
        <div>{walletId}</div>
    </>
}
export default TransactionListPanel