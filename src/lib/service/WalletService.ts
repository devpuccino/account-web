import AccountServiceClient from "../client/AccountServiceClient"
import { Wallet, CreditCardWallet, CashWallet } from "../model/Wallet"
import { WalletRequest } from "../client/dto/Wallet"
import { WalletType } from "../constant/CommonConstant"
import {UnexpectedException} from "../exception"
import ResponseStatus from "../constant/Status"
class WalletService {
    updateWallet = (walletId:string,wallet:Wallet) =>{
        wallet.walletId = walletId
        return wallet
    }
    addWallet = async (wallet: Wallet): Promise<Wallet|null> => {
        let request:WalletRequest = {
            wallet_name: wallet.walletName,
            wallet_type: wallet.walletType,
            currency: wallet.currency
        }
        if(wallet.walletType == WalletType.CASH){
            request.balance = (wallet as CashWallet).balance 
        }else if(wallet.walletType == WalletType.CREDIT_CARD){
            request.credit_limit = (wallet as CreditCardWallet).creditLimit
            request.card_type = (wallet as CreditCardWallet).cardType
            request.payment_due_date = (wallet as CreditCardWallet).dueDate.toString()
            request.billing_date = (wallet as CreditCardWallet).billingDate.toString()
        }
        const response:CommonResponse<Wallet> = await AccountServiceClient.createWallet(request)
        if(response.code == ResponseStatus.SUCCESS.code){
             return response.data;
        }else{
            throw new UnexpectedException();
        }
    }
    getWallet = async (walletId?:string): Promise<any> => {
        let response:CommonResponse<any>
         if(walletId){
            response = await AccountServiceClient.getByIdWallet(walletId)
        }else{
              response = await AccountServiceClient.getAllWallet()
        }
        if(response.code = ResponseStatus.SUCCESS.code){
            return response.data;
        }else{
            throw new UnexpectedException();
        }

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