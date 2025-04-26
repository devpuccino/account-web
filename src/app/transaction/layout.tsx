import { ReactNode } from "react"

interface Props {
    children: ReactNode
    modal: ReactNode
}
const TransactionLayout = ({ children,modal }: Props) => {
    return <>
        {children}
        {modal}
    </>
}
export default TransactionLayout