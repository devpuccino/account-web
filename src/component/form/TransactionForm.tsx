"use client"
import { DatePicker, Form, Input, InputNumber, Radio, Select } from "antd"

interface Props {
    type:string
    categories: any[]
    wallets:any[]
}
const TransactionForm = ({ type,categories,wallets }: Props) => {
    return <Form labelCol={{ flex: '150px' }}
        labelWrap
        wrapperCol={{ flex: 1 }}
        colon={false}
        style={{ maxWidth: 400 }}>
        <Form.Item label="Transaction">
            <Radio.Group value={type}>
                <Radio.Button value="income">Income</Radio.Button>
                <Radio.Button value="expense">Expense</Radio.Button>
            </Radio.Group>
        </Form.Item>
        <Form.Item label="Total Amount">
            <InputNumber style={{ maxWidth: 400 }} min={0} />
        </Form.Item>
        <Form.Item label="Wallet">
            <Select>
                {wallets.map((wallet) => {
                    return <Select.Option key={`wallet_dropdown`} value={wallet.wallet_id}>{wallet.wallet_name}</Select.Option>
                })}
            </Select>
        </Form.Item>
        <Form.Item label="Category">
            <Select>
                {categories.map((category) => {
                    return <Select.Option key={`category_dropdown`} value={category.id}>{category.category_name}</Select.Option>
                })}
            </Select>
        </Form.Item>
        <Form.Item label="Transaction Date">
        <DatePicker />
      </Form.Item>
       
        <Form.Item label="Description">
            <Input.TextArea />
        </Form.Item>
    </Form>
}
export default TransactionForm