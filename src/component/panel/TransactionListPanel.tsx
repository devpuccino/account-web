"use client"

import { TransactionContext } from "@/app/(page)/transaction/TransactionContextProvider"
import { useContext, useEffect } from "react"

const TransactionListPanel = () =>{
    const context = useContext(TransactionContext)
    useEffect(()=>{
        console.log(context.selectedWalletId)
        console.log(context.selectedDate)
    },[context.selectedDate,context.selectedWalletId])
    return <>
        <div>{context.selectedWalletId}</div>
    </>
}
export default TransactionListPanel