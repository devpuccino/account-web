"use client"
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons"
import { Col, Flex } from "antd"
import { useState } from "react"
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
interface Props {
    selectedDate:Date
    onChangeDate:Function
}
const timeOfOneDate = 24 * 60 * 60 * 1000
const TransactionDatePanel = ({selectedDate,onChangeDate}:Props) => {
    const getCurrentDate = () => {
        return formatter.format(selectedDate)
    }
    const onClickPreviusDate = () => {
        onChangeDate(new Date(selectedDate.getTime() - timeOfOneDate))
    }
    const onClickNextDate = () => {
        const nextDay = new Date(selectedDate.getTime() + timeOfOneDate)
        if (nextDay.getTime() < new Date().getTime()) {
            onChangeDate(nextDay)
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