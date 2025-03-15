import { getCategoryById } from "@/app/api/category/actions"
import CategoryForm from "@/component/form/CategoryForm"
const EditCategoryPage = async ({params}:{params: Promise<{ id: string }>})=>{
    const { id } = await params
    const category:any = await getCategoryById(id)
    return <CategoryForm id={category.id} categoryName={category.category_name} categoryStatus={category.active} />
}
export default EditCategoryPage