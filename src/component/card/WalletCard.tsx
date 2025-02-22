"use client"

import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import { Badge, Card, Flex } from "antd";
import FormatCurrency from "../label/FormatCurrency";
import { useRouter } from "next/navigation";

interface Properties {
    id: string
    walletName: string
    balance: number
    type: string
}
const WalletCard = ({ id, walletName, balance, type }: Properties) => {
    const ribbonText = () => {
        if (type == "cash") {
            return "Cash"
        } else if (type == "credit_card") {
            return "Credit Card"
        }
    }
    const ribbonColor = () => {
        if (type == "cash") {
            return "green"
        } else if (type == "credit_card") {
            return "blue"
        }
    }
    const router = useRouter()
    const actions: React.ReactNode[] = [
        <EditOutlined key="edit" onClick={(event) => doOnClickEditCard(id)} />,
        <SettingOutlined key="setting" onClick={(event) => doOnClickTransferCard(id)} />,
        <EllipsisOutlined key="ellipsis" onClick={(event) => doOnClickDeleteCard(id)} />,
    ];
    const doOnClickEditCard = (id: string) => {
        router.push(`/wallet/${id}`)
    }
    const doOnClickTransferCard = (id: string) => {

    }
    const doOnClickDeleteCard = (id: string) => {

    }
    return <Badge.Ribbon text={ribbonText()} color={ribbonColor()}>
        <Card title={walletName} actions={actions} >
            <Flex gap="small" vertical={false} >
                <p>Balance:</p>
                <p><FormatCurrency value={balance} currency="USD" /></p>
            </Flex>
        </Card>
    </Badge.Ribbon>
}
export default WalletCard