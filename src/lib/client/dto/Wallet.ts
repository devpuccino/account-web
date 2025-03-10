export type WalletRequest = {
    wallet_name:string
    wallet_type:string
    currency: string
    balance?: number
    credit_limit?: number
    card_type?: string
    payment_due_date?: string
    billing_date?: string
}
