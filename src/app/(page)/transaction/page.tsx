import FormatCurrency from "@/component/label/FormatCurrency"
import WalletListPanel from "@/component/panel/WalletListPanel"
import { Button, Card, Col, Descriptions, Flex, Row } from "antd"

async function getWallet() {
    let response = await fetch("http://192.168.7.100:17001/account-service/api/wallet", {
        cache: "no-cache"
    })
        .then((response) => response.json())
    return response.data
}
const TransactionPage = async () => {
    const walletList: any[] = await getWallet()
    return <>
        <WalletListPanel walletList={walletList} />
        <Row id="toolbar_panel">
            <Col span={12}>Time</Col>
            <Col span={12}>
            <Flex gap="small" wrap>
                <Button type="primary">Primary Button</Button>
                <Button type="primary">Primary Button</Button>
                </Flex>
            </Col>
        </Row>
        <div id="transaction_panel">transaction</div>
    </>
}
export default TransactionPage