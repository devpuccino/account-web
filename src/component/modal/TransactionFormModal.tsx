"use client"
import { Modal, notification } from "antd"
import { useRouter } from "next/navigation"
import TransactionForm from "../form/TransactionForm"
import { Wallet } from "@/model/ClientModel"
import { useContext } from "react"
import { TransactionContext } from "@/app/transaction/TransactionContextProvider"
import { useForm } from "antd/es/form/Form"
import axios, { AxiosError } from "axios"
import { CommonResponse } from "@/lib/model/Common"
import { ExclamationCircleFilled } from "@ant-design/icons"

interface Props {
    token:string|undefined
    wallets: Wallet[]
    categories: any[]
    transactionType: string
}
const TransactionFormModal = ({ token,wallets, categories, transactionType }: Props) => {
    const route = useRouter()
    const context = useContext(TransactionContext)
    const [form] = useForm()
    const onModalCancel = () => {
        route.back()
    }
    const onClickModalSave = () => {
            form.validateFields(["amount","transaction_date"]).then(()=>{
                const transaction = {
                    wallet_id:form.getFieldValue("wallet_dropdown"),
                    category_id :form.getFieldValue("category_dropdown"),
                    transaction_type :form.getFieldValue("transaction_type"),
                    amount: form.getFieldValue("amount"),
                    transaction_date: form.getFieldValue("transaction_date"),
                    description: form.getFieldValue("description"),
                }
                    axios.post("/api/transaction", transaction, {
                        headers: { "csrf_token": token }
                    }).catch((error:AxiosError)=>{
                        const {code} = error.response?.data as CommonResponse<null>
                        notification.open({
                            message: "Transaction Created failed",
                            description: "Your transaction has something wrong. Please try again.",
                            showProgress: true,
                            pauseOnHover: true,
                            role: "status",
                            duration: 1.5,
                            icon: <ExclamationCircleFilled style={{ color: 'red' }} />,
                            onClose: onModalCancel
                        })
                    })
            }).catch((_)=>{
            })
    }
    return <Modal open={true}
        okText="Save"
        onCancel={onModalCancel}
        onOk={onClickModalSave}>
        <TransactionForm form={form}
            selectedWalletId={context.selectedWalletId}
            type={transactionType}
            wallets={wallets}
            categories={categories} />
    </Modal>
}
export default TransactionFormModal