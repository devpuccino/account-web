import { Card, Col, Row } from "antd"

interface Props {
    walletList: any[] | null
}
const WalletListPanel = ({ walletList }: Props) => {
    return <Row id="wallet_list_panel" gutter={16}>
        {walletList ?
            walletList.map((wallet) => {
                return <Col span="6">
                    <Card title={wallet.wallet_name} variant="borderless" >
                        <div>balance: {wallet.balance}</div>
                    </Card>
                </Col>
            })
            : null}
    </Row>
}
export default WalletListPanel