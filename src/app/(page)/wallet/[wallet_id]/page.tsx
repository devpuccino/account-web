"use client"
import WalletForm, { Wallet } from "@/component/form/WalletForm"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const UpdateWalletPage = () => {
    const params = useParams()
    const [wallet,setWallet] = useState<Wallet|null>(null)
    useEffect(()=>{
        getWalletById().then(walletData=>{
            setWallet(walletData)
        })
    },[])

    const getWalletById = async() =>{
        const response = await fetch(`/api/wallet/${params.wallet_id}`)
        const responseBody = await response.json()
        return responseBody
    }
    
    return <WalletForm wallet={wallet} />
}
export default UpdateWalletPage