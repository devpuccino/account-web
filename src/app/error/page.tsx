"use client"
import { useRouter } from "next/navigation"

const ErrorPage = () =>{
    const router = useRouter()

    const doOnClickClose = ()=>{
        router.back()
        router.forward()
    }
    return (
        <>
        <h1> ERROR PAGE</h1>
        <button type="button" onClick={doOnClickClose}>close</button>
        </>
    )
}
export default ErrorPage