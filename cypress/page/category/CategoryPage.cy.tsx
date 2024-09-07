import CategoryPage from "@/app/category/page"

describe("category - CategoryPage",()=>{
  it("should render correct Category Page",()=>{
      cy.mount(<CategoryPage />)
      cy.get("#page-header").should("be.visible").and("have.text","Category")
      cy.get("#category-data-table").should("be.visible")
      cy.get("#category-data-table > thead > tr > :nth-child(1)").should("have.text","#")
      cy.get("#category-data-table > thead > tr > :nth-child(2)").should("have.text","Category Name")
      cy.get("#category-data-table > thead > tr > :nth-child(3)").should("have.text","Active Status")
  })
})