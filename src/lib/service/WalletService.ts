import { Wallet, CreditCardWallet } from "../model/Wallet"

class WalletService {
    updateWallet = (walletId:string,wallet:Wallet) =>{
        wallet.walletId = walletId
        return wallet
    }
    addWallet = (wallet: Wallet): Wallet => {
        
        return wallet
    }
    getWallet = (): Wallet[] => {
        return [new CreditCardWallet("1",
            "scb",
            "THB",
            "creditcard",
            "VISA",
            100000,
            1,
            1
        )]
    }

    getWalletById = (walletId: string): Wallet => {

        return new CreditCardWallet(walletId,
            "scb",
            "THB",
            "creditcard",
            "VISA",
            100000,
            1,
            1
        )
    }
}
export default new WalletService()