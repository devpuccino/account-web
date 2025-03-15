"use client"
import ResponseStatus from "@/lib/constant/Status"
import { CheckCircleFilled, CloseCircleOutlined, SaveOutlined } from "@ant-design/icons"
import { Button, Col, Form, Input, notification, Row, Switch } from "antd"
import axios, { AxiosError } from "axios"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
interface Props {
    categoryName?:string|null
    categoryStatus?:boolean|null
}

const SuccessMessage = {
    message: 'Category Created Successfully',
    description: 'Your category has been successfully created.',
    duration: 0.5,
    icon:<CheckCircleFilled style={{ color: 'green' }} />,
}
const ErrorMessage = {
    message: 'Failed to create category',
    description: 'An error occurred while creating your category.',
    duration: 1.5,
    icon:<CloseCircleOutlined style={{ color: 'red' }} />
}
const DuplicateDataMessage = {
    message: 'Data already exists',
    description: 'A duplicate entry was found for the specified data. Please try again with different values.',
    duration: 1.5,
    icon:<CloseCircleOutlined style={{ color: 'red' }} />
}
const CategoryForm = ({categoryName,categoryStatus}:Props) => {
    const router = useRouter()
    const [form] = Form.useForm()
    const name = Form.useWatch("category_name", form)
    const status = Form.useWatch("status", form)
    const validateMessages = {
        required: "'${label}' is required!",
    }
    if(categoryName){
        form.setFields([
            {
                name: "category_name", value: categoryName
            }
        ])
    }
    if(categoryStatus){
        form.setFields([
            {
                name: "status", value: categoryStatus
            }
        ])
    }
    
    const doOnSubmitForm = async (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        let data = {
            category_name: name,
            status: status
        }
        let message = null
        try {
            let response = await axios.post("/api/category", data)
          
            if(response.data.status == ResponseStatus.SUCCESS.code){
                message =SuccessMessage
            }else{
                message =ErrorMessage
            }
        } catch (error: unknown) {
            if(error instanceof AxiosError && error.response?.data.status == ResponseStatus.DUPLICATED_DATA.code){
                message = DuplicateDataMessage
            }else{
                message =ErrorMessage
            }
            
        }
        notification.open({
            message: message.message,
            description: message.description,
            showProgress: true,
            pauseOnHover: false,
            role: "status",
            duration: message.duration,
            icon: message.icon,
            onClose: function () {
                if(message == SuccessMessage)
                    router.push("/category")
            }
        })
    }
    return <Row>
        <Col span={24}>
            <Form labelCol={{ span: 4 }}
                wrapperCol={{ span: 8 }}
                form={form}
                colon={false}
                validateMessages={validateMessages}
                onFinish={doOnSubmitForm}
               >
                <Form.Item name="category_name" label="Category name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="status" label="Status">
                    <Switch />
                </Form.Item>
                <Form.Item label=" ">
                    <Button block type="primary" htmlType="submit" >
                        <SaveOutlined /> Save
                    </Button>
                </Form.Item>
            </Form>
        </Col>
    </Row>
}
export default CategoryForm