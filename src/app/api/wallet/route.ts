import StatusCode, { Status } from "@/lib/constant/Status"
import { CommonResponse } from "@/lib/model/Common"
import { Wallet } from "@/lib/model/Wallet"
import WalletService from "@/lib/service/WalletService"
import { throws } from "assert"
import { NextRequest, NextResponse } from "next/server"

export const GET = (request: NextRequest) => {
    let response!: CommonResponse<Wallet[]>
    let httpStatus = 200
    try {
        const wallets = WalletService.getWallet()
        response = new CommonResponse(Status.SUCCESS, wallets)
    } catch (exception) {
        response = new CommonResponse(Status.UNEXPECTED_ERROR)
        httpStatus = 500
    }
    return NextResponse.json(response, { status: httpStatus })
}
export const POST = async (request: NextRequest) => {

    let response!: CommonResponse<Wallet>
    let httpStatus = 200
    try {
        const requestBody = await request.json() as Wallet
        const wallet = WalletService.saveWallet(requestBody)
        response = new CommonResponse(Status.SUCCESS, wallet)
    } catch (exception) {
        response = new CommonResponse(Status.UNEXPECTED_ERROR)
        httpStatus = 500
    }
    return NextResponse.json(response, { status: httpStatus })
}