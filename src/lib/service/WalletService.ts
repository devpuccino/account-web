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
        return [new CreditCardWallet(
            "scb",
            "bath",
            "credit_card",
            "VISA",
            100000,
            1,
            1,
            "1"
        )]
    }

    getWalletById = (walletId: string): Wallet => {

        return new CreditCardWallet(
            "scb",
            "bath",
            "credit_card",
            "visa",
            100000,
            1,
            1,
            walletId
        )
    }
}
export default new WalletService()