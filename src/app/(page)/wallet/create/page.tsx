import WalletForm from "@/component/form/WalletForm"
import { cookies } from "next/headers"
import { NextRequest } from "next/server"

const CreateWalletPage = async () => {
    const cookieStore = await cookies()
    const csrf = cookieStore.get("csrf_token")?.value
    return <WalletForm token={csrf} />
}
export default CreateWalletPage