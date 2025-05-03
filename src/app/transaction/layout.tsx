import { ReactNode } from "react"
import TransactionContextProvider from "./TransactionContextProvider"
import { getFirstWalletId, getWallet } from "./action"
import { Wallet } from "@/model/ClientModel"

interface Props {
    children: ReactNode
    modal: ReactNode
}
const TransactionLayout = async({ children,modal }: Props) => {
    const walletList:Wallet[] = await getWallet()
    return <TransactionContextProvider firstWalletId={getFirstWalletId(walletList)}>
        {children}
        {modal}
        </TransactionContextProvider>
}
export default TransactionLayout