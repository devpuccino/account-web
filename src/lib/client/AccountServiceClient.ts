import { Wallet } from "../model/Wallet"
import { WalletRequest } from "./dto/Wallet"

class AccountServiceClient {
    createWallet = async (request:WalletRequest) => {
        const response = await fetch("http://192.168.7.100:17001/account-service/api/wallet",{
            method: "POST",
            headers:{
                "content-type":"Application/json"
            },
            body: JSON.stringify(request)
        })
        return await response.json()
    }
    getAllWallet = async():Promise<CommonResponse<Wallet[]>>=>{
        const response = await fetch("http://192.168.7.100:17001/account-service/api/wallet",{
            mode:"no-cors"
        })
        return await response.json()
    }
    getByIdWallet = async(walletId:string):Promise<CommonResponse<Wallet>>=>{
        const response = await fetch(`http://192.168.7.100:17001/account-service/api/wallet/${walletId}`)
        return await response.json()
    }
}
export default new AccountServiceClient()