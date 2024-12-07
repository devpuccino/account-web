import StatusCode from "@/lib/constant/StatusCode"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (request: NextRequest) => {
    let requestBody = await request.json()
    if(requestBody.wallet_name == "Travel"){
        return NextResponse.json({
            status: StatusCode.DUPLICATED_DATA,
            message: "Wallet name duplicated"
        },{status:400})
    }else if(requestBody.wallet_name == "Car Maintainence"){
        return NextResponse.json({
            status: StatusCode.UNEXPECTED_ERROR,
            message: "Unexpected error"
        },{status: 500})
    }else{
        return NextResponse.json({}, { status: 200 })
    }
}