import DataTable from "@/component/DataTable"

describe("Component - DataTable", () => {
    it("should render data table correct", () => {
        //given
        const data = [
            { id: 10, name: "Coffee", status: true },
            { id: 11, name: "Food", status: false },
            { id: 12, name: "Water", status: false },
            { id: 13, name: "Electic", status: false }
        ]

        cy.mount(<DataTable data={data} />)

        cy.get("#data-table").should("be.visible")
        cy.get("#data-table--header").should("be.visible")
        data.forEach((row, index) => {
            cy.get(`#data-table--row-${row.id}`).should("be.visible")
            cy.get(`#data-table--row-${row.id} > :nth-child(1)`).should("have.text", index + 1)
            cy.get(`#data-table--row-${row.id} > :nth-child(2)`).should("have.text", row.name)
            cy.get(`#data-table--row-${row.id} > :nth-child(3)`).should("have.text", (row.status ? "true" : "false"))
        })
    })
})