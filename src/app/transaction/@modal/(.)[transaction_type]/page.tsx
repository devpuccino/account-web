import { Wallet } from "@/model/ClientModel"
import { getCategories, getWallet } from "../../action"
import TransactionFormModal from "@/component/modal/TransactionFormModal"
import { cookies } from "next/headers"
interface Props {
    params: Promise<{ transaction_type: string }>
}
const IncomeModalPage = async ({ params }: Props) => {
    const wallets:Wallet[] = await getWallet()
    const categories = await getCategories()
    const cookieStore = await cookies()
    const csrf = cookieStore.get("csrf_token")?.value
    const { transaction_type } = await params
    return  <TransactionFormModal
        token={csrf}
        wallets={wallets}
        categories={categories}
        transactionType={transaction_type}
    />
}
export default IncomeModalPage