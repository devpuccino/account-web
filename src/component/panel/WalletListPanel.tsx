"use client"
import { useContext, useState } from "react"
import WalletSmallCard from "../card/WalletSmallCard"
import styled from "styled-components"
import { getFirstWalletId } from "@/app/transaction/action"
import { TransactionContext } from "@/app/transaction/TransactionContextProvider"
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
}

const WalletListPanel = ({ walletList }: Props) => {
    const context = useContext(TransactionContext)
    const doOnClickCard = (walletId: string) => {
        if(context.setSelectedWalletId){
            context.setSelectedWalletId(walletId)
        }
    }
    return <Wrapper>
        {walletList ?
            walletList.map((wallet, index) => {
                return <WalletSmallCard active={wallet.wallet_id == context.selectedWalletId}
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