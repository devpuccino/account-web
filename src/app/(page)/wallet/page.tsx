import WalletCard from "@/component/card/WalletCard"
import WalletService from "@/lib/service/WalletService"
import { PlusSquareOutlined, WalletOutlined } from "@ant-design/icons"
import { Button, Col, Divider, Row, Space } from "antd"
import Title from "antd/es/typography/Title"

const WalletPage = async () => {
    const wallets = await WalletService.getWallet()
    const renderWallet = () => {
        if (wallets) {
            const contents = wallets.map((wallet) => {
                return <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }}>
                    <WalletCard
                        id={wallet.wallet_id}
                        walletName={wallet.wallet_name}
                        balance={wallet.balance}
                        type={wallet.wallet_type}
                    />
                </Col>
            })
            return <Row gutter={[15, 15]}>{contents}</Row>
        } else {
            return null
        }
    }
    return <div>
        <Row gutter={[10, 40]}>
            <Col span={24}><Title><WalletOutlined /> Wallets</Title></Col>
        </Row>
        <Row gutter={100} justify={{ sm: "start", md: "start", lg: "end" }} style={{ marginBottom: "15px" }}>
            <Col>
                <Button href="/wallet/create" color="primary" variant="solid">
                    <PlusSquareOutlined />Add new Wallet
                </Button>
            </Col>
        </Row>
        {renderWallet()}
    </div>
}
export default WalletPage
