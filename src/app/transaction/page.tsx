import TransactionDatePanel from "@/component/panel/TransactionDatePanel"
import TransactionListPanel from "@/component/panel/TransactionListPanel"
import WalletListPanel from "@/component/panel/WalletListPanel"
import TransactionContextProvider from "./TransactionContextProvider"
import { getFirstWalletId, getWallet } from "./action"
import Link from "next/link"

const TransactionPage = async() => {
  const walletList = await getWallet()
    
    return <TransactionContextProvider firstWalletId={getFirstWalletId(walletList)}>
        <WalletListPanel walletList={walletList} />
        <TransactionDatePanel />
        <div><Link href="/transaction/income">Add Income</Link></div>
        <div><Link href="/transaction/expense">Add Expense</Link></div>
        <TransactionListPanel />
    </TransactionContextProvider>
}
export default TransactionPage