import { NextRequest, NextResponse } from "next/server";


export const GET = async (request: NextRequest) => {
    console.log(request.cookies.get("account_web_access_token"))
    return NextResponse.json({},{status:200})
}