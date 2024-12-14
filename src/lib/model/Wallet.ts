export interface Wallet {
    walletId: string
    walletName: string;
    currency: string;
    walletType: string;
}
export class CreditCardWallet implements Wallet {
    walletId!: string
    walletName!: string;
    currency!: string;
    walletType!: string;
    cardType!: string;
    creditLimit!: number;
    dueDate!: number;
    billingDate!: number;
    constructor(walletId: string, walletName: string, currency: string, walletType: string, cardType: string, creditLimit: number, dueDate: number, billingDate: number) {
        this.walletId = walletId
        this.walletName = walletName
        this.currency = currency
        this.walletType = walletType
        this.cardType = cardType
        this.creditLimit = creditLimit
        this.dueDate = dueDate
        this.billingDate = billingDate
    }

}
export class CashWallet implements Wallet {
    walletId!: string
    walletName!: string;
    currency!: string;
    walletType!: string;
    balance!: number;
}

