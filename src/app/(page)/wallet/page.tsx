import WalletCard from "@/component/card/WalletCard"
import WalletService from "@/lib/service/WalletService"
import { PlusSquareOutlined, WalletOutlined } from "@ant-design/icons"
import { Button, Col, Empty, Row } from "antd"
import Title from "antd/es/typography/Title"
import Link from "next/link"

const WalletPage = async () => {
    const wallets = await WalletService.getWallet()
    const renderWallet = () => {
        if (wallets) {
            const contents = wallets.map((wallet:any) => {
                return <Col key={`col-${wallet.wallet_id}`} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }}>
                    <WalletCard
                        key={wallet.wallet_id}
                        id={wallet.wallet_id}
                        walletName={wallet.wallet_name}
                        balance={wallet.balance}
                        type={wallet.wallet_type}
                    />
                </Col>
            })
            if(contents.length== 0){
                return <Row justify="center"><Col><Empty /></Col></Row>
            }else{
                return <Row gutter={[15, 15]}>{contents}</Row>
            }
           
        } else {
            return null
        }
    }
    return <div>
        <Row gutter={[10, 40]}>
            <Col span={24}><Title><WalletOutlined /> Wallets</Title></Col>
        </Row>
        <Row justify="end" style={{ marginBottom: "15px" }}>
            <Col>
                <Link href="/wallet/create" passHref legacyBehavior>
                    <Button color="primary" variant="solid">
                        <PlusSquareOutlined />Add new Wallet
                    </Button>
                </Link>
            </Col>
        </Row>
        {renderWallet()}
    </div>
}
export default WalletPage
