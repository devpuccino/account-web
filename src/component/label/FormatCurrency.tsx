interface Properties {
    value: number,
    currency: string
}
const FormatCurrency = ({ value,currency }: Properties) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
    });
    return <>{formatter.format(value)}</>;
}
export default FormatCurrency