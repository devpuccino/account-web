import Button from "@/component/Button"

describe("Component - Button",()=>{

    it("should render button correctly",()=>{
        cy.mount(<Button />)
        cy.get("#id_button")
            .should("be.visible")
            .and("have.text","Click me!")
    })
})