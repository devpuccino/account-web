import CategoryService from "@/lib/service/CategoryService"
import { Wallet } from "@/model/ClientModel"

export function getFirstWalletId(walletList: Wallet[] | null) {
    if (walletList != null && walletList.length > 0) {
        return walletList[0].wallet_id
    }
    return null
}
export function getCategories() {
    return CategoryService.getAllCategories()
}
export function getWallet():Promise<Wallet[]> {
    return fetch("http://192.168.7.100:17001/account-service/api/wallet", {
        cache: "no-cache"
    })
        .then((response) => response.json())
        .then((response: { data: any }) => response.data)
}