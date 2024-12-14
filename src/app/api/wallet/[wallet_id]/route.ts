import { Status } from "@/lib/constant/Status"
import { CommonResponse } from "@/lib/model/Common"
import { Wallet } from "@/lib/model/Wallet"
import WalletService from "@/lib/service/WalletService"
import { NextRequest, NextResponse } from "next/server"

export const GET = (request: NextRequest, { params }: { params: { wallet_id: string } }) => {
    let response!: CommonResponse<Wallet>
    try {
        const wallet = WalletService.getWalletById(params.wallet_id)
        response = new CommonResponse(Status.SUCCESS, wallet)
    } catch (error) {
        response = new CommonResponse(Status.UNEXPECTED_ERROR)
    }
    return NextResponse.json(response, { status: 200 })
}
export const PUT = async (request: NextRequest, { params }: { params: { wallet_id: string } }) => {
    let response!: CommonResponse<Wallet>
    let httpStatus!: number
    try {
        const requestBody = await request.json() as Wallet
        const wallet = WalletService.updateWallet(params.wallet_id, requestBody)
        response = new CommonResponse(Status.SUCCESS, wallet)
        httpStatus = 200
    } catch (error) {
        response = new CommonResponse(Status.UNEXPECTED_ERROR)
        httpStatus = 500
    }
    return NextResponse.json(response, { status: httpStatus })
}