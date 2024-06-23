import DataTable from "@/component/DataTable"

const CategoryPage = () =>{
   const data = [
        { id: 10, name: "Coffee", status: true },
        { id: 11, name: "Food", status: false },
        { id: 12, name: "Water", status: false },
        { id: 13, name: "Electic", status: false }
    ]
    return <div>
        <DataTable data={data} />
        </div>
}
export default CategoryPage