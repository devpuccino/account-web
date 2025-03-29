
export function getFirstWalletId(walletList: any[] | null) {
    if (walletList != null && walletList.length > 0) {
        return walletList[0].wallet_id
    }
    return null
}