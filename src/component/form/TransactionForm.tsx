"use client"
import { Wallet } from "@/model/ClientModel"
import { DatePicker, Form, FormInstance, Input, InputNumber, Radio, Select } from "antd"
import { useEffect, useState } from "react"
import dayjs from 'dayjs';
interface Props {
    type: string
    categories: any[]
    wallets: Wallet[]
    selectedWalletId?: string | null
    form?: FormInstance
}
const TransactionForm = ({ selectedWalletId, type, categories, wallets, form }: Props) => {
    const validateMessages = {
        required: "'${label}' is required!",
    }
    useEffect(() => {
        if (selectedWalletId) {
            form?.setFieldValue("wallet_dropdown", selectedWalletId)
        } else if (wallets.length > 0) {
            form?.setFieldValue("wallet_dropdown", wallets[0].wallet_id)
        }
        form?.setFields([{
            name: "transaction_type", value: type
        }, {
            name: "category_dropdown", value: categories[0].id
        }, {
            name: "transaction_date", value: dayjs()
        }])
    }, [])

    return <Form form={form} labelCol={{ flex: '150px' }}
        labelWrap
        wrapperCol={{ flex: 1 }}
        colon={false}
        validateMessages={validateMessages}
        style={{ maxWidth: 400 }}>
        <Form.Item name="transaction_type" label="Transaction">
            <Radio.Group>
                <Radio.Button id="transaction_type_income" value="income">Income</Radio.Button>
                <Radio.Button id="transaction_type_expense" value="expense">Expense</Radio.Button>
            </Radio.Group>
        </Form.Item>
        <Form.Item name="amount" label="Total Amount" rules={[{ required: true }]}>
            <InputNumber min={1}
                formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                style={{ width: 200 }}
            />
        </Form.Item>
        <Form.Item name="wallet_dropdown" label="Wallet">
            <Select>
                {wallets.map((wallet) => {
                    return <Select.Option key={`wallet_dropdown_option_${wallet.wallet_id}`} value={wallet.wallet_id}>{wallet.wallet_name}</Select.Option>
                })}
            </Select>
        </Form.Item>
        <Form.Item name="category_dropdown" label="Category">
            <Select>
                {categories.map((category) => {
                    return <Select.Option key={`category_dropdown_option_${category.id}`} value={category.id}>{category.category_name}</Select.Option>
                })}
            </Select>
        </Form.Item>
        <Form.Item name="transaction_date" label="Transaction Date" rules={[{ required: true }]}>
            <DatePicker maxDate={dayjs()} />
        </Form.Item>

        <Form.Item name="description" label="Description">
            <Input.TextArea />
        </Form.Item>
    </Form>
}
export default TransactionForm