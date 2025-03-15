"use server";
import { revalidatePath } from "next/cache";

  export async function getCategoryById(id:string){
    const response = await fetch(`http://192.168.7.100:8181/account-service/api/category/${id}`,{cache:"no-cache"});
    const responseBody = await response.json()
    if(!response.ok){
      throw new DOMException("Cannot fetch category data")
    }else{
        return responseBody.data;
    }
  }