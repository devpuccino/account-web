import { NextRequest, NextResponse } from "next/server"

export const GET = async(request:NextRequest, context:{params:{ id:string }}) =>{
    let responseBody = {
        status: "",
        message: "",
        data: null
    }
    let httpStatus = 200
    try{
        let result = await fetch(`http://192.168.7.100:8181/account-service/api/category/${context.params.id}`,{
            cache: "no-cache"
        })
        let response = await result.json()
        responseBody.status = response.code
        responseBody.message = response.message
        responseBody.data = response.data
    }catch(error){
        responseBody = {
            status: "500-001",
            message: "Unexpected error",
            data: null
        }
        httpStatus = 500
    }
    return NextResponse.json(responseBody,{
        status: httpStatus
    })
}

export const PUT = async(request:NextRequest,context:{params:{id:string}})=>{
    let requestBody = await request.json()
    let responseBody = null
    let httpStatus = 200
    try{
        let result = await fetch(`http://192.168.7.100:8181/account-service/api/category/${context.params.id}`, {
            cache: "no-cache",
            method: "PUT",
            body: JSON.stringify({
                category_name: requestBody.category_name,
                is_active: requestBody.status
            }),
            headers:{
                "Content-Type":"application/json"
            }
        })
        let resultBody = await result.json()
         responseBody = {
            status : resultBody.code,
            message: resultBody.message
        }
        httpStatus = result.status
    }catch(exception){
        responseBody = {
            status : "500-001",
            message :"Unexpected error"
        }
        httpStatus = 500
    }
   
    return NextResponse.json(responseBody,{
        status: httpStatus
    })
}

export const DELETE = async(request:NextRequest,context:{params:{id:string}})=>{
    let responseBody = null
    let httpStatus = 200
    try{
        let result = await fetch(`http://192.168.7.100:8181/account-service/api/category/${context.params.id}`,{
            cache:"no-cache",
            method: "DELETE"
        })
        let data = await result.json()
        responseBody = {
            status: data.code,
            message: data.message
        }
        httpStatus = result.status
    }catch(error){
        responseBody = {
            status: "500-001",
            message: "Unexpected error"
        }
        httpStatus = 500
    }
    
    
    return NextResponse.json(responseBody,{
        status : httpStatus
    })
}