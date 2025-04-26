import TransactionForm from "@/component/form/TransactionForm"
import { getCategories, getWallet } from "../action"
interface Props {
    params: Promise<{ transaction_type: string }>
}
const IncomePage = async ({ params }: Props) => {
    const categories = await getCategories()
    const wallets = await getWallet()
    const { transaction_type } = await params
    return <TransactionForm type={transaction_type}
        categories={categories}
        wallets={wallets}
    />
}
export default IncomePage