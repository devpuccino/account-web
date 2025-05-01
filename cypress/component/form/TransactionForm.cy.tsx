import TransactionForm from "@/component/form/TransactionForm"
import { AntdRegistry } from "@ant-design/nextjs-registry"
import { Layout } from "antd"
describe("componet - Transaction Form", () => {
    it("should render component correct", () => {
        const type="income"
        const categories:any[] = []
        const wallets:any[] = []
        cy.mount(
            <TransactionForm type={type} categories={categories} wallets={wallets} />)
    })
})