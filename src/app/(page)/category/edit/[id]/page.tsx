import CategoryForm from "@/component/form/CategoryForm"
import { CheckCircleFilled, CloseCircleOutlined } from "@ant-design/icons"
import { notification } from "antd"
import axios from "axios"
import { useRouter } from "next/navigation"
import { Suspense } from "react"

const SuccessMessage = {
    message: 'Category Created Successfully',
    description: 'Your category has been successfully created.',
    duration: 0.5,
    icon:<CheckCircleFilled style={{ color: 'green' }} />,
}
const ErrorMessage = {
    message: 'Failed to create category',
    description: 'An error occurred while creating your category.',
    duration: 1.5,
    icon:<CloseCircleOutlined style={{ color: 'red' }} />
}
const DuplicateDataMessage = {
    message: 'Data already exists',
    description: 'A duplicate entry was found for the specified data. Please try again with different values.',
    duration: 1.5,
    icon:<CloseCircleOutlined style={{ color: 'red' }} />
}
const loadCategoryName = async (id:string)=>{
    const response =  await fetch(`http://localhost:3000/api/category/${id}`).then((res) => res.json());
    return response.data
}
const EditCategoryPage = async ({params}:{params: { id: string };})=>{
    // const router = useRouter()
    const response = await fetch(`http://localhost:8080/account-service/api/category/${params.id}`, { cache: "no-store" }).then((res) => res.json());
    return <CategoryForm categoryName={response.data.category_name} categoryStatus={response.data.active} />
}
export default EditCategoryPage