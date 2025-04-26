"use client"
import { TransactionContext } from "@/app/transaction/TransactionContextProvider"
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons"
import { Col, Flex } from "antd"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
const formatter = new Intl.DateTimeFormat("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric"
})
const Button = styled.div`
    cursor: pointer;
    font-size: 1rem;
    line-height: 1rem;
`
const DisplayDate = styled.div`
    font-size: 1rem;
    line-height: 1rem;
`
const Wrapper = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: row;
`
const timeOfOneDate = 24 * 60 * 60 * 1000
const TransactionDatePanel = () => {
    useEffect(()=>{
        console.log(document.cookie)
    })
    const context = useContext(TransactionContext)
    const getCurrentDate = () => {
        return formatter.format(context.selectedDate)
    }
    const onClickPreviusDate = () => {
        if(context.setSelectedDate){
            context.setSelectedDate(new Date(context.selectedDate.getTime() - timeOfOneDate))
        }
    }
    const onClickNextDate = () => {
        const nextDay = new Date(context.selectedDate.getTime() + timeOfOneDate)
        if (nextDay.getTime() < new Date().getTime() && context.setSelectedDate) {
            context.setSelectedDate(nextDay)
        }
    }
    return <Wrapper>
            <Button onClick={onClickPreviusDate}>
                <CaretLeftOutlined />
            </Button>
            <DisplayDate>{getCurrentDate()}</DisplayDate>
            <Button onClick={onClickNextDate}>
                <CaretRightOutlined />
            </Button>
    </Wrapper>
}

export default TransactionDatePanel