import { Status } from "@/lib/constant/Status"
import { CommonResponse } from "@/lib/model/Common"
import { Wallet } from "@/lib/model/Wallet"
import WalletService from "@/lib/service/WalletService"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: NextRequest) => {
    let response!: CommonResponse<Wallet[]>

    let httpStatus = 200
    try {
        const wallets =  await WalletService.getWallet() as Wallet[]
        response = new CommonResponse(Status.SUCCESS, wallets)
    } catch (exception) {
        response = new CommonResponse(Status.UNEXPECTED_ERROR)
        httpStatus = 500
    }
    return NextResponse.json(response, { status: httpStatus })
}
export const POST = async (request: NextRequest) => {
        const csrfCookie = request.cookies.get("csrf_token")?.value
        const csrfHeader = request.headers.get("csrf_token")
        if(csrfCookie == csrfHeader){
            let response!: CommonResponse<Wallet>
            let httpStatus = 200
            try {
                const requestBody = await request.json() as Wallet
                const wallet = await WalletService.addWallet(requestBody)
                response = new CommonResponse(Status.SUCCESS, wallet)
            } catch (exception) {
                console.error(exception)
                response = new CommonResponse(Status.UNEXPECTED_ERROR)
                httpStatus = 500
            }
            return NextResponse.json(response, { status: httpStatus })
        }else{
            return NextResponse.json({}, { status: 406 })
        }
    
}