import TransactionForm from "@/component/form/TransactionForm"
import { Wallet } from "@/model/ClientModel"
describe("componet - Transaction Form", () => {

    ["income", "expense"].forEach(type => {
        it(`should render ${type} component correct`, () => {
            const categories: any[] = []
            const wallets: Wallet[] = [{
                wallet_id: "1",
                wallet_name: "Bank",
                currency: "THB",
                balance: 100
            },{
                wallet_id: "2",
                wallet_name: "Credit card",
                currency: "THB",
                balance: 100
            }]
            cy.mount(<TransactionForm selectedWalletId={wallets[1].wallet_id} type={type} categories={categories} wallets={wallets} />)
            cy.get(`#transaction_type_${type}`).should("be.checked")
            cy.get("#wallet_dropdown").find("option").then(options=>{
                options.each((index,element)=>{
                    expect(element.text).to.equal(wallets[index].wallet_name)
                })
            })
        })
    })

})