"use client"
import { ReactNode, useEffect, useState } from "react";
interface Category {
    id: string
    category_name: string
}
const Page = () => {

    const [categoryList, setCategoryList] = useState<Array<Category>>([])
    const [error,setError] = useState<string|null>(null)
    async function getCategory() {
        let response = await fetch("/api/category")
        let responseBody = await response.json();
        if(response.status == 200){
            setCategoryList(responseBody.data)
        }else{
            setError("ไม่สามารถแสดงข้อมูลได้ กรุณาลองใหม่อีกครั้ง")
        }
        

    }
    useEffect(() => {
        getCategory()
    }, [])


    return <div>
        <h1>Category</h1>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Category Name</th>
                </tr>
            </thead>
            <tbody>
                {
                 error != null?
                 <tr><td colSpan={2}>{error}</td></tr>
                 :
                    categoryList.map((category, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{category.category_name}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
}
export default Page;

