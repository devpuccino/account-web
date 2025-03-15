"use client"
import CategoryForm from "@/component/form/CategoryForm"
import axios from "axios";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

type Category = {
    id:string,
    category_name:string
    active:boolean
}

const EditCategoryPage = () => {
    const params = useParams();
    const [category, setCategory] = useState<Category|null>(null)
    useEffect(() => {
        axios.get(`/api/category/${params.id}`).then(response => {
            setCategory(response.data.data)
        })
    }, [])
    const updateCategory = () =>{

    }
    return <CategoryForm
        onClickSave={updateCategory}
        categoryName={category?.category_name}
        categoryStatus={category?.active}
    />
}
export default EditCategoryPage