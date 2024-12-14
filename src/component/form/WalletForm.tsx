"use client"
import { CreditCardOutlined, SaveOutlined, WalletOutlined } from "@ant-design/icons"
import { Button, Form, Input, InputNumber, message, Radio, RadioChangeEvent, Select } from "antd"
import Title from "antd/es/typography/Title"
import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
const NumberTextField = styled(InputNumber)`
    width: 100%
`
export interface Wallet {
    balance: number
    walletName: string
    currency: string
    walletType: string
    cardType: string
    creditLimit: number
    dueDate: number
    billingDate: number
}
interface WalletProperties {
    wallet?: Wallet | null
}
const WalletForm = ({ wallet }: WalletProperties) => {
    const [currentWalletType, setCurrentWalletType] = useState<string>("cash")
    const [form] = Form.useForm()
    const [messageApi, contextHolder] = message.useMessage()
    const walletName = Form.useWatch("wallet_name", form)
    const currency = Form.useWatch("currency", form)
    const walletType = Form.useWatch("wallet_type", form)
    const balance = Form.useWatch("balance", form)
    const cardType = Form.useWatch("card_typelance", form)
    const creditLimit = Form.useWatch("credit_limit", form)
    const dueDate = Form.useWatch("due_date", form)
    const billingDate = Form.useWatch("billing_date", form)
    useEffect(() => {
        if (wallet != null) {
            setCurrentWalletType(wallet.walletType)
            form.setFields([
                {
                    name: "currency", value: wallet.currency
                },
                {
                    name: "wallet_type", value: wallet.walletType
                },
                {
                    name: "balance", value: wallet.balance
                },
                {
                    name: "wallet_name", value: wallet.walletName
                },
                {
                    name: "card_type", value: wallet.cardType ? wallet.cardType : "visa"
                },
                {
                    name: "credit_limit", value: wallet.creditLimit ? wallet.creditLimit : 100
                },
                {
                    name: "due_date", value: wallet.dueDate ? wallet.dueDate : 1
                }
                ,
                {
                    name: "billing_date", value: wallet.billingDate ? wallet.billingDate : 1
                }
            ])
        }

    }, [wallet])
    const CURRENCY_OPTIONS = [
        { label: "Thai bath(฿)", value: "bath" },
        { label: "Dollar($)", value: "dollar" }
    ]
    const WALLET_TYPE = [
        { label: <><WalletOutlined /> Cash</>, value: "cash" },
        { label: <><CreditCardOutlined /> Credit Card</>, value: "credit_card" }
    ]
    const CREDIT_CARD_TYPE = [
        { label: "Visa", value: "visa" },
        { label: "Mastercard", value: "master_card" },
        { label: "American Express", value: "american_express" },
        { label: "JBC", value: "jbc" },
        { label: "Unionpay", value: "union_pay" }
    ]
    const doOnChangeWalletType = (event: RadioChangeEvent) => {
        setCurrentWalletType(event.target.value)
    }
    const validateMessages = {
        required: "'${label}' is required!",
    }
    const doOnSubmitForm = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        let request = {
            wallet_name: walletName,
            currency: currency,
            wallet_type: walletType,
            balance: balance,
            card_type: cardType,
            credit_limit: creditLimit,
            due_date: dueDate,
            billing_date: billingDate
        }
        axios.post("/api/wallet", request).then((response) => {

        }).catch((reason: AxiosError) => {
            if (reason.response?.data.status == "400-002") {
                form.setFields([
                    {
                        name: "wallet_name",
                        errors: [`Wallet name '${walletName}' exists`]
                    }
                ])
            } else {
                messageApi.open({
                    type: "error",
                    content: "We have error. Please try again"
                })
            }

        })
    }
    return <>
        {contextHolder}
        <Title>Wallet</Title>
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 8 }}
            form={form}
            validateMessages={validateMessages}
            onFinish={doOnSubmitForm}
            initialValues={{
                currency: "bath",
                wallet_type: "cash",
                balance: 0,
                card_type: "visa",
                credit_limit: 100,
                due_date: 1,
                billing_date: 1
            }}>
            <Form.Item name="wallet_name" label="Wallet name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="currency" label="Currency">
                <Select options={CURRENCY_OPTIONS} />
            </Form.Item>
            <Form.Item name="wallet_type" label="Wallet Type">
                <Radio.Group
                    block
                    name="wallet_type_radio"
                    options={WALLET_TYPE}
                    optionType="button"
                    buttonStyle="solid"
                    onChange={doOnChangeWalletType}
                />
            </Form.Item>
            {
                currentWalletType == "cash" ?
                    <Form.Item name="balance" label="Balance">
                        <NumberTextField min={0} />
                    </Form.Item>
                    : null}
            {
                currentWalletType == "credit_card" ?
                    <>
                        <Form.Item name="card_type" label="Type of card">
                            <Select options={CREDIT_CARD_TYPE} />
                        </Form.Item>
                        <Form.Item name="credit_limit" label="Credit Limit">
                            <NumberTextField min={1} />
                        </Form.Item>
                        <Form.Item name="due_date" label="Payment due date">
                            <NumberTextField min={1} max={30} />
                        </Form.Item>
                        <Form.Item name="billing_date" label="Billing Date">
                            <NumberTextField min={1} max={30} />
                        </Form.Item>
                    </>
                    : null}


            <Form.Item label={null}>
                <Button block type="primary" htmlType="submit" >
                    <SaveOutlined /> Save
                </Button>
            </Form.Item>
        </Form>
    </>
}
export default WalletForm