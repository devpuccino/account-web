"use client"
import { Button, Card, Col, Flex, Row } from "antd"
import Title from "antd/es/typography/Title"
import { useRouter } from "next/navigation"


const WalletPage = ()=>{
    const router = useRouter()
    const doOnClickAddWalletButton = () =>{
        router.push("/wallet/create")
    }
    return <div>
        <Title>Wallet</Title>
        <Flex justify="flex-end">
            <Button color="default" variant="outlined" onClick={doOnClickAddWalletButton}>Add Wallet</Button>
        </Flex>
        <Flex gap={"small"}>
            
                <Card title="Credit Card">
                    <div>วงเงิน 100,000</div>
                    <div>ใช้ไป 1,000</div>
                </Card>
                <Card title="Credit Card">
                    <div>วงเงิน 100,000</div>
                    <div>ใช้ไป 1,000</div>
                </Card>
                <Card title="Credit Card">
                    <div>วงเงิน 100,000</div>
                    <div>ใช้ไป 1,000</div>
                </Card>
        </Flex>
    </div>
}
export default WalletPage