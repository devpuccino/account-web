"use client"

import { TransactionContext } from "@/app/(page)/transaction/TransactionContextProvider"
import axios from "axios"
import { useContext, useEffect } from "react"

const TransactionListPanel = () =>{
    const context = useContext(TransactionContext)
    useEffect(()=>{
        axios.get("/api/transactions",{
            params:{
                date: context.selectedDate.getTime(),
                walletId: context.selectedWalletId
            }
        })
    },[context.selectedDate,context.selectedWalletId])
    return <>
        <div>{context.selectedWalletId}</div>
    </>
}
export default TransactionListPanel