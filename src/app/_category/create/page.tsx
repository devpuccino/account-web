"use client"
import CategoryForm from "@/component/form/CategoryForm"
import axios from "axios"
import { useRouter } from "next/navigation"

const CreateCategoryPage = () => {

    const router = useRouter()
    const saveCategory = async (categoryName: string, status: string) => {
        let data = {
            category_name: categoryName,
            status: status === "1"
        }
        try {
            let response = await axios.post("/api/category", data)
            router.push("/category")
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                alert(error.response?.data.message)
            } else {
                console.log(error)
            }

        }

    }
    return <CategoryForm onClickSave={saveCategory} />
}
export default CreateCategoryPage