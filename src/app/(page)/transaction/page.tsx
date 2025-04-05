import TransactionDatePanel from "@/component/panel/TransactionDatePanel"
import TransactionListPanel from "@/component/panel/TransactionListPanel"
import WalletListPanel from "@/component/panel/WalletListPanel"
import TransactionContextProvider from "./TransactionContextProvider"
import { getFirstWalletId } from "./action"

function getWallet() {
    return fetch("http://192.168.7.100:17001/account-service/api/wallet", {
        cache: "no-cache"
    })
        .then((response) => response.json())
        .then((response) => response.data)
}

const TransactionPage = async() => {
  const walletList = await getWallet()
    
    return <TransactionContextProvider firstWalletId={getFirstWalletId(walletList)}>
        <WalletListPanel walletList={walletList} />
        <TransactionDatePanel />
        <TransactionListPanel />
    </TransactionContextProvider>
}
export default TransactionPage