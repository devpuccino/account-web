import CategoryForm from "@/component/form/CategoryForm"
const EditCategoryPage = async ({params}:{params: Promise<{ id: string }>})=>{
    const { id } = await params
    const response = await fetch(`http://192.168.7.100:8181/account-service/api/category/${id}`).then((res) => res.json());
    return <CategoryForm id={response.data.id} categoryName={response.data.category_name} categoryStatus={response.data.active} />
}
export default EditCategoryPage