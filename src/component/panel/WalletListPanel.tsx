"use client"

import { useEffect, useState } from "react"

const WalletListPanel = () => {
    const [walletList, setWalletList] = useState<any>(null)
    useEffect(() => {
        fetch("/api/wallet",{headers:{
            "cache-control":"no-cache"
        }})
        .then((response) => response.json())
        .then((response: any) => {
            setWalletList(response.data)
        })
    }, [])
    return <>{walletList?
        <div>fasdfasd</div>
    :null}</>
}
export default WalletListPanel
