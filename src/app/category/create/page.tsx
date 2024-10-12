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
        }catch(error:unknown){
            if(axios.isAxiosError(error)){
                alert(error.response?.data.message)
            }else{
                console.log(error)
            }
            
        }
        
    }
    return <div>
        <div className="form_row">
            <label className="form_label">Category name</label>
            <input type="text" className="form_input" id="category_name" ref={categoryNameRef} />
        </div>
        <div className="form_row">
            <label className="form_label">Status</label>
            <select id="status" className="form_input" ref={statusRef}>
                <option value={"1"}>ACTIVE</option>
                <option value={"0"}>INACTIVE</option>
            </select>
        </div>
        <div id="form_footer">
            <button type="button" className="button" onClick={doOnClickSave}>Save</button>
        </div>
    </div>
}
export default CreateCategoryPage