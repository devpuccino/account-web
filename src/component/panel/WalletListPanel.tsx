"use client"
import WalletSmallCard from "../card/WalletSmallCard"
import styled from "styled-components"
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
    return <Wrapper>
        {walletList ?
            walletList.map((wallet, index) => {
                return <WalletSmallCard active={index==0}
                    key={index}
                    walletId={wallet.wallet_id}
                    walletName={wallet.wallet_name}
                    currency={wallet.currency}
                    balance={wallet.balance} />
            })
            : null}
    </Wrapper>

}
export default WalletListPanel