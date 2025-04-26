import { BookOutlined, WalletOutlined } from "@ant-design/icons"
import { Col, Row } from "antd"
import Title from "antd/es/typography/Title"

interface Props {
    children: React.ReactNode
}
const CategoryLayout = ({ children }: Props) => {
    return <><Row gutter={[10, 40]}>
        <Col span={24}>
            <Title><BookOutlined /> Category</Title>
        </Col>
    </Row>
        {children}
    </>
}
export default CategoryLayout