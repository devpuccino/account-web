"use client"
import { useRef } from "react"
import styled from "styled-components"
import PrimaryButton from "../button/PrimaryButton"

const CategoryFormRow = styled.div`
    display: flex;
    margin-bottom: 5px;
    flex-grow: 2;
`
const CategoryFormLabel = styled.label`
    color: var(--default-gray);
    width: 150px;
`
const CategoryFormInput = styled.input`
    flex: 1;
`
const CategoryFormSelect = styled.select`
    flex: 1;
`
const CategoryFormFooter = styled.div`
    display: flex;
    justify-content: center;
`

type CategoryFormProperties = {
    onClickSave: Function,
    categoryName?: string | null
    categoryStatus?: boolean | null
}
const CategoryForm = ({ onClickSave, categoryName, categoryStatus }: CategoryFormProperties) => {
    const categoryNameRef = useRef<HTMLInputElement>(null)
    const statusRef = useRef<HTMLSelectElement>(null)
    const doOnClickSave = () => {
        const categoryName = categoryNameRef.current?.value
        const status = statusRef.current?.value
        onClickSave(categoryName, status)
    }
    return <div>
        <CategoryFormRow>
            <CategoryFormLabel>Category name</CategoryFormLabel>
            <CategoryFormInput type="text" id="category_name" ref={categoryNameRef} defaultValue={categoryName ? categoryName : ""} />
        </CategoryFormRow>
        <CategoryFormRow>
            <CategoryFormLabel>Status</CategoryFormLabel>
            <CategoryFormSelect id="status" ref={statusRef} defaultValue={(categoryStatus == null || categoryStatus) ? "1" : "0"}>
                <option value={"1"}>ACTIVE</option>
                <option value={"0"}>INACTIVE</option>
            </CategoryFormSelect>
        </CategoryFormRow>
        <CategoryFormFooter>
            <PrimaryButton onClickCallback={doOnClickSave} label="Save" />
        </CategoryFormFooter>
    </div>
}
export default CategoryForm