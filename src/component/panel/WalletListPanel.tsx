"use client"
import { useState } from "react"
import WalletSmallCard from "../card/WalletSmallCard"
import styled from "styled-components"
import { getFirstWalletId } from "@/app/(page)/transaction/action"
const Wrapper = styled.div`
    overflow-y :hidden;
    overflow-x: scroll;
    flex-direction: row;
    margin-left: -15px;
    padding: 0 5px 15px 15px; 
    display: flex;
    flex-direction: row;
    gap: 10px;
    scrollbar-width: none;
    -ms-overflow-style: none;
`
interface Props {
    walletList: any[] | null
    selectedWalletId:string|null
    onClickWalletCard:Function
}

const WalletListPanel = ({ walletList,selectedWalletId,onClickWalletCard }: Props) => {
    const doOnClickCard = (walletId: string) => {
        onClickWalletCard(walletId)
    }
    return <Wrapper>
        {walletList ?
            walletList.map((wallet, index) => {
                return <WalletSmallCard active={wallet.wallet_id == selectedWalletId}
                    key={index}
                    walletId={wallet.wallet_id}
                    walletName={wallet.wallet_name}
                    currency={wallet.currency}
                    balance={wallet.balance}
                    onClick={doOnClickCard}
                />
            })
            : null}
    </Wrapper>

}
export default WalletListPanel