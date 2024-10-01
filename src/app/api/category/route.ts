import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
    try {
        let { code, message, data } = await fetch("http://localhost:8080/account-service/api/category", {
            cache: "no-cache"
        })
            .then(response => response.json())
        let responeBody = null
        if (code == "200-000") {
            responeBody = {
                status: "200-000",
                message: "Success",
                data: data
            }
        } else {
            responeBody = {
                status: code,
                message: message
            }
        }
        return NextResponse.json(responeBody)
    } catch (exception) {
        console.log(exception)
        let responeBody = {
            status: "500-001",
            message: "Internal server error"
        }
        return NextResponse.json(responeBody, { status: 500 })
    }

}

export const POST = async (request: NextRequest) => {
    let requestBody = await request.json()
    let responseBody = null
    let httpStatus = 200
    try{
        let result = await fetch("http://localhost:8080/account-service/api/category", {
            cache: "no-cache",
            method: "POST",
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