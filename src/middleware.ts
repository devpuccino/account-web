import { NextRequest, NextResponse } from "next/server";

const generateCsrfUrl = ["/wallet/create"] 
export function middleware(request: NextRequest) {
    let response = generateAccessToken(NextResponse.next())
    console.log(request.nextUrl.pathname)
    if(generateCsrfUrl.includes(request.nextUrl.pathname)){
        response =  generateCsrfToken(response)
    }

    return response
}
const generateCsrfToken = (response:NextResponse):NextResponse =>{
    let token = crypto.randomUUID().toString().replace("-","")
    response.cookies.set("csrf_token",token,{
        httpOnly:true,
        sameSite:"strict",
        secure:true
    })
    return response
}
const generateAccessToken = (response:NextResponse):NextResponse=>{
    const expire = new Date()
    expire.setMinutes(expire.getMinutes()+30)
    response.cookies.set("account_web_access_token","abr342p9uikhlfnasd",{
        httpOnly: true,
        sameSite: "strict",
        secure: true,
        expires: expire
    })
    return response
}