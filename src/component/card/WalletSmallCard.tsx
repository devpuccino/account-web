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
    &:hover{
        box-shadow: 0 4px 8px 0 #1677ff;
    }
    &.active{
        box-shadow: 0 4px 8px 0 #1677ff;
        background-color: #1677ff;
        color: #fff;
    }
    max-width: 130px;
    min-width: 130px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
`
const WalletIcon = styled.div`
    background-color: #d8d8d8;
    border-radius: 50%;
    padding: 5px;
    width: 32px;
    height: 32px;
    line-height: 22px;
    text-align: center;
    ${Wrapper}.active &{
        background-color: #fff;
        color: #000;
    }
    text-transform: uppercase;
`
const InfoPanel = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
`
const Title = styled.div`
    font-size: 0.7rem;
    line-height: 1rem;
`
const Description = styled.div`
    font-size: 0.5rem;
    color: #bababa;
    ${Wrapper}.active &{
        color: #fff;
    }
`
interface Props {
    walletId: string,
    walletName: string,
    balance: number,
    currency:string
    active: boolean,
    onClick:Function
}
interface Currencies {
    [key: string]: string;
}

const currencies:Currencies = {
    dollar: "USD",
    bath: "THB"
}
const WalletSmallCard = ({ walletId, walletName, balance,currency, active,onClick }: Props) => {
    const getIconText = (walletName:string):string =>{
        if(walletName.length==1){
            return walletName;
        }else{
            return walletName.slice(0, 2);
        }
    }
    const formatBalance = (value: number,currency:string): string => {
        return new Intl.NumberFormat('th-TH', {
            style: 'currency',
            currency: currencies[currency]
        }).format(value);
    }
    return <Wrapper id={`wallet-small-card-${walletId}`} className={active ? "active" : ""} onClick={()=>onClick(walletId)}>
        <WalletIcon>{getIconText(walletName)}</WalletIcon>
        <InfoPanel>
            <Title>{walletName}</Title>
            <Description>{formatBalance(balance,currency)}</Description>
        </InfoPanel>
    </Wrapper>
}
export default WalletSmallCard