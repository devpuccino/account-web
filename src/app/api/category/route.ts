import { NextRequest, NextResponse } from "next/server";

export const GET = async(request:NextRequest) => {
    let data = [
        { id: '1', category_name: 'Food', active: true },
        { id: '2', category_name: 'Coffee and Tea', active: true },
        { id: '3', category_name: 'Transport', active: true }
    ]

    let responeBody = {
        status: "200-000",
        message: "Success",
        data: data
    }
    return NextResponse.json(responeBody)
}

export const POST = async(request:NextRequest)=>{
    let responeBody = {
        status: "500-001",
        message: "Internal server error"
    }
    return NextResponse.json(responeBody,{
        status:500
    })
}