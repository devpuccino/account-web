import { Card, Col, Flex, Row } from "antd"
import Title from "antd/es/typography/Title"

const WalletPage = ()=>{
    return <div>
        <Title>Wallet</Title>
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