"use client"
import WalletForm from "@/component/form/WalletForm"
import { CommonResponse } from "@/lib/model/Common"
import { Wallet } from "@/lib/model/Wallet"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const UpdateWalletPage = () => {
    const params = useParams()
    const [wallet, setWallet] = useState<Wallet | null | undefined>(null)
    useEffect(() => {
        getWalletById().then(response => {
            setWallet(response.data)
        })
    }, [])

    const getWalletById = async () => {
        const response = await fetch(`/api/wallet/${params.wallet_id}`)
        const responseBody = await response.json() as CommonResponse<Wallet>
        return responseBody
    }

    return <WalletForm wallet={wallet} />
}
export default UpdateWalletPage