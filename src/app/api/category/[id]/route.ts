import { NextRequest, NextResponse } from "next/server"

export const GET = async(request:NextRequest, context:{params:{ id:string }}) =>{
    let data = { id: '1', category_name: 'Food', active: true }
    let responseBody = {
        status: "200-000",
        message: "Success",
        data: data
    }
    return NextResponse.json(responseBody)
}

export const PUT = async(request:NextRequest,context:{params:{id:string}})=>{
    let requestBody = await request.json()
    console.log(`PUT id=${context.params.id}`)
    console.log(requestBody)
    return NextResponse.json({})
}

export const DELETE = async(request:NextRequest,context:{params:{id:string}})=>{
    let responseBody = null
    let httpStatus = 200
    try{
        let result = await fetch(`http://localhost:8080/account-service/api/category/${context.params.id}`,{
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