"use client"
import { faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import DataTableButton from "./DataTableButton";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import styles from "./datatable.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
const DataTable =  () =>{
    const [categoryList, setCategoryList] = useState([])
    const router = useRouter()
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
        router.push(`/category/edit/${id}`)
    }
    async function doOnClickDelete(id:string){
        try{
            let response = await axios.delete(`/api/category/${id}`)
            if(response.data.status == "200-000"){
                let categoryList = await getCategoryList()
                setCategoryList(categoryList)
            }
        }catch(exception){
            alert(exception.response.data.message)
        }
        


    }
    function onClickCreateCategory(){
     
        let category = { id: "4", category_name: "New Category", active: true };
        setCategoryList([...categoryList,category])
      
    }
    return <div>
        <div className={styles.toolbar_panel}>
            <Link className={styles.toolbar_button}  href={"/category/create"} scroll={false} >
                <FontAwesomeIcon icon={faPlus} className="icon" size="1x" /> Add Category
            </Link>
        </div>
        <table id="category-data-table" className={styles.datatable}>
        <thead>
            <tr>
                <th className={`${styles.col_index} text-center`}>#</th>
                <th className="text-left">Category Name</th>
                <th className="text-left" colSpan={2}>Status</th>
            </tr>
        </thead>
        <tbody>
            {categoryList?
                categoryList?.map((category, index) => {
                    return <tr key={index}>
                        <td className="text-center">{index + 1}</td>
                        <td>{category.category_name}</td>
                        <td>{category.active ? "ACTIVE" : "INACTIVE"}</td>
                        <td className={styles.management}>
                            <DataTableButton icon={faPenToSquare} dataId={category.id} onClick={doOnClickEdit} />
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