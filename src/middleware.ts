import { NextRequest, NextResponse } from "next/server";
import { InvalidTokenResponse } from "./lib/model/ApiResponse";

const generateCsrfUrl = ["/wallet/create","/transaction/income",]
const cookiesMappingPath = {
    "/wallet/create":"/api/wallet",
    "/transaction/income":"/api/transaction",
    "/transaction/expense":"/api/transaction"
}
export function middleware(request: NextRequest) {
    let response = generateAccessToken(NextResponse.next())
    if(generateCsrfUrl.includes(request.nextUrl.pathname)){
        response =  generateCsrfToken(request.nextUrl.pathname,response)
    }
    response = validateCsrfToken(request,response)
    return response
}
const validateCsrfToken = (request:NextRequest,response:NextResponse)=>{
    if(Object.values(cookiesMappingPath).includes(request.nextUrl.pathname)){
        const cookieCsrf = request.cookies.get("csrf_token")?.value
        const headerCsrf = request.headers.get("csrf_token")
        if(cookieCsrf!=headerCsrf){
            return NextResponse.json(new InvalidTokenResponse(),{
                status:500
            })
        }
    }
    return response

}
const generateCsrfToken = (path:string,response:NextResponse):NextResponse =>{
    let token = crypto.randomUUID().toString().replace("-","")
    response.cookies.set("csrf_token",token,{
        httpOnly:true,
        sameSite:"strict",
        secure:true,
        path:cookiesMappingPath[path as keyof typeof cookiesMappingPath]
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