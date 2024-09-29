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

export const DELETE = async(request:NextRequest)=>{

}