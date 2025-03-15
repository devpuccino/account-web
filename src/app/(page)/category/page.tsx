import { PlusSquareOutlined } from "@ant-design/icons"
import { Row, Col, Button } from "antd"
import Link from "next/link"

const CategoryPage = () => {
    return <>
        <Row justify="end" style={{ marginBottom: "15px" }}>
            <Col>
                <Link href="/category/create" passHref legacyBehavior>
                    <Button color="primary" variant="solid">
                        <PlusSquareOutlined />Add new Category
                    </Button>
                </Link>
            </Col>
        </Row>
    </>
}
export default CategoryPage