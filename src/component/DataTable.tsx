"use client"
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import DataTableButton from "./DataTableButton";
import { useState } from "react";

const DataTable =  () =>{
    const [categoryList, setCategoryList] = useState([
        {
            id: '1',
            category_name: 'Food',
            active: true
        },
        {
            id: '2',
            category_name: 'Coffee and Tea',
            active: true
        },
        {
            id: '3',
            category_name: 'Transport',
            active: true
        }
    ])
    function doOnClickEdit(id:string){
       
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