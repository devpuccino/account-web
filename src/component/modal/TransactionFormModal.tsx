"use client"
import { Modal } from "antd"
import { useRouter } from "next/navigation"
import TransactionForm from "../form/TransactionForm"

interface Props {
    wallets: any[]
    categories: any[]
    transactionType: string
}
const TransactionFormModal = ({ wallets, categories, transactionType }: Props) => {
    const route = useRouter()
    const onModalCancel = () => {
        route.back()
    }
    const onClickModalSave = () =>{
        console.log("call api")
    }
    return <Modal open={true}
        okText="Save"
        onCancel={onModalCancel}
        onOk={onClickModalSave}>
        <TransactionForm type={transactionType} wallets={wallets} categories={categories} />
    </Modal>
}
export default TransactionFormModal