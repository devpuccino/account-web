import { getCategories, getWallet } from "../../action"
import TransactionFormModal from "@/component/modal/TransactionFormModal"
interface Props {
    params: Promise<{ transaction_type: string }>
}
const IncomeModalPage = async ({ params }: Props) => {
    const wallets = await getWallet()
    const categories = await getCategories()
    const { transaction_type } = await params
    return <TransactionFormModal
        wallets={wallets}
        categories={categories}
        transactionType={transaction_type}
    />
}
export default IncomeModalPage