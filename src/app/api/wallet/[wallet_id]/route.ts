import { NextRequest, NextResponse } from "next/server"

export const GET = (request: NextRequest, { params }: { params: Promise<{ wallet_id: string }> }) => {

    return NextResponse.json({
        walletName: "Kbank Credit card",
        currency: "bath",
        walletType: "credit_card",
        cardType: "master_card",
        creditLimit: 100000,
        dueDate: 2,
        billingDate: 10

    }, { status: 200 })
}