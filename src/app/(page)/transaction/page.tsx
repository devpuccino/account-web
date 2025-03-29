"use client"
import TransactionDatePanel from "@/component/panel/TransactionDatePanel"
import TransactionListPanel from "@/component/panel/TransactionListPanel"
import WalletListPanel from "@/component/panel/WalletListPanel"
import { getFirstWalletId } from "./action"
import { useEffect, useState } from "react"

function getWallet() {
    return fetch("/api/wallet", {
        cache: "no-cache"
    })
        .then((response) => response.json())
        .then((response) => response.data)
}

const TransactionPage = () => {
    const [selectedWalletId, setSelectedWalletId] = useState<string | null>(null)
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())
    const [walletList, setWalletList] = useState<any[]>([])
    useEffect(() => {
        getWallet().then((data) => {
            setWalletList(data)
            setSelectedWalletId(getFirstWalletId(data))
        })
    }, [])
    return <>
        <WalletListPanel walletList={walletList} selectedWalletId={selectedWalletId} onClickWalletCard={setSelectedWalletId} />
        <TransactionDatePanel selectedDate={selectedDate} onChangeDate={setSelectedDate} />

        <TransactionListPanel
            walletId={selectedWalletId}
            selectedDate={selectedDate}
        />
    </>
}
export default TransactionPage