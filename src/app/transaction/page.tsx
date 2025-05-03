import TransactionDatePanel from "@/component/panel/TransactionDatePanel"
import TransactionListPanel from "@/component/panel/TransactionListPanel"
import WalletListPanel from "@/component/panel/WalletListPanel"
import TransactionContextProvider from "./TransactionContextProvider"
import { getFirstWalletId, getWallet } from "./action"
import Link from "next/link"
import { Wallet } from "@/model/ClientModel"

const TransactionPage = async() => {
  const walletList:Wallet[] = await getWallet()
    
    return <>
        <WalletListPanel walletList={walletList} />
        <TransactionDatePanel />
        <div><Link href="/transaction/income">Add Income</Link></div>
        <div><Link href="/transaction/expense">Add Expense</Link></div>
        <TransactionListPanel />
        </>
}
export default TransactionPage