"use client"
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import DataTableButton from "./DataTableButton";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

const DataTable =  () =>{
    const [categoryList, setCategoryList] = useState([])

    useEffect(()=>{
        getCategoryList().then((data)=>{
            setCategoryList(data)
        })
    },[])

    async function getCategoryList(){
        let response = await axios.get("/api/category")
        return response.data.data
    }

    async function doOnClickEdit(id:string){
        let requestBody = {
            "id": 1,
            "category_name": "food",
            "active": false
        }
        try{
            let response = await axios.post("/api/category",requestBody)
        }catch(exception){
            if(exception instanceof AxiosError){
                let errorData = (exception as AxiosError).response?.data
                if(errorData.status == "400-001"){
                    alert("error")
                }
            }
        }
    
    }
    function doOnClickDelete(id:string){
        console.log(`Delete Button Clicked ${id}`)
    }
    function onClickCreateCategory(){
     
        let category = { id: "4", category_name: "New Category", active: true };
        setCategoryList([...categoryList,category])
      
    }
    return <div>
        <button onClick = {onClickCreateCategory}>Create Category</button>
        <table id="category-data-table" className="data-table">
        <thead>
            <tr>
                <th>#</th>
                <th className="text-left">Category Name</th>
                <th className="text-left">Status</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {categoryList?
                categoryList?.map((category, index) => {
                    return <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{category.category_name}</td>
                        <td>{category.active ? "ACTIVE" : "INACTIVE"}</td>
                        <td>
                            <DataTableButton icon={faPenToSquare} dataId={category.id} onClick={doOnClickEdit} />
                            <DataTableButton icon={faTrash} dataId={category.id} onClick={doOnClickDelete}/>
                        </td>
                    </tr>
                })
            :null}
        </tbody>
    </table>
    </div>
}
export default DataTable;