import WalletForm from "@/component/form/WalletForm"
import WalletService from "@/lib/service/WalletService"
interface Properties {
    wallet_id: string;
}
const UpdateWalletPage = async ({ params }: { params: Properties }) => {
    console.log(params.wallet_id)
    const wallet = await WalletService.getWalletById(params.wallet_id)
    return <div>{wallet.walletName}</div>
}
export default UpdateWalletPage