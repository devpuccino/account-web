"use client"
import { createContext, Dispatch, SetStateAction, useState } from "react"
interface TransactionContextPros {
    selectedWalletId: string | null
    selectedDate: Date
    setSelectedDate: Dispatch<SetStateAction<Date>> | null
    setSelectedWalletId: Dispatch<SetStateAction<string | null>> | null
}
export const TransactionContext = createContext<TransactionContextPros>({
    selectedWalletId: null,
    selectedDate: new Date(),
    setSelectedDate: null,
    setSelectedWalletId: null
})

const TransactionContextProvider = ({ firstWalletId,children }: { firstWalletId:string|null,children: React.ReactNode }) => {
    const [selectedWalletId, setSelectedWalletId] = useState<string | null>(firstWalletId)
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())
    const context: TransactionContextPros = {
        selectedWalletId: selectedWalletId,
        selectedDate: selectedDate,
        setSelectedDate: setSelectedDate,
        setSelectedWalletId: setSelectedWalletId
    }
    return <TransactionContext.Provider value={context}>
        {children}
    </TransactionContext.Provider>
}
export default TransactionContextProvider