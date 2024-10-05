"use client"
import axios, { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import { ReactHTMLElement, useRef } from "react"

const CreateCategoryPage = () => {
    const categoryNameRef = useRef<HTMLInputElement>(null)
    const statusRef =  useRef<HTMLSelectElement>(null)
    const router = useRouter()
    const doOnClickSave = async() => {
        let data = {
            category_name: categoryNameRef.current?.value || null,
            status: (statusRef.current && statusRef.current.value) === "1"
        }
        try{
            let response = await axios.post("/api/category",data)
            router.push("/category")
        }catch(error){
           
            if(error instanceof AxiosError){
                alert((error as AxiosError).response.data.message)
            }else{
                console.log(error)
            }
            
        }
        
    }
    return <div>
        <div>
            <label>Category name</label>
            <input type="text" id="category_name" ref={categoryNameRef} />
        </div>
        <div>
            <label>Status</label>
            <select id="status" ref={statusRef}>
                <option value={"1"}>ACTIVE</option>
                <option value={"0"}>INACTIVE</option>
            </select>
        </div>
        <div>
            <button type="button" onClick={doOnClickSave}>Save</button>
        </div>
    </div>
}
export default CreateCategoryPage