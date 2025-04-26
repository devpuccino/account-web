import styled from "styled-components"

const Button = styled.button`
    cursor: pointer;
    text-align: center;
    border: 1px solid var(--default-blue);
    padding: 2px 5px;
    font-variant: all-petite-caps;
    border-radius: 0.25rem;
    color: #fff;
    background-color: var(--default-blue);
`
type PrimaryButtonProperties = {
    onClickCallback: Function
    label: string
}
const PrimaryButton = ({ onClickCallback, label }: PrimaryButtonProperties) => {
    const handleOnClick = () => {
        onClickCallback()
    }
    return <Button type="button" onClick={handleOnClick}>{label}</Button>
}
export default PrimaryButton