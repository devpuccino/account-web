"use client"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 2;
    gap: 5px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding: 5px;
    border-radius: 10px;
    &:hover,&.active{
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }
    max-width: 100px;
    min-width: 100px;
    cursor: pointer;
`
const WalletIcon = styled.div`
    background-color: #d8d8d8;
    border-radius: 50%;
    padding: 5px;
    width: 32px;
    height: 32px;
    line-height: 22px;
    text-align: center;
`
const InfoPanel = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
`
const Title = styled.div`
    font-size: 0.7rem;
`
const Description = styled.div`
    font-size: 0.5rem;
    color: #bababa;
`
interface Props {
    walletId:string,
    walletName:string,
    balance:number,
    active:boolean
}

const WalletSmallCard = ({walletId,walletName,balance,active}:Props) =>{
    
    return <Wrapper id={`wallet-small-card-${walletId}`} className={active?"active":""}>
        <WalletIcon>IC</WalletIcon>
        <InfoPanel>
            <Title>{walletName}</Title>
            <Description>{balance}</Description>
        </InfoPanel>
    </Wrapper>
}
export default WalletSmallCard