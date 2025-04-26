export const Status = {
    SUCCESS :"SUCCESS",
    UNEXPECTED_ERROR:"UNEXPECTED_ERROR",
    DUPLICATED_DATA:"DUPLICATED_DATA"
}
const ResponseStatus: { [key: string]: { code: string, message: string } } = {
    SUCCESS: { code: "200-000", message: "Success" },
    DUPLICATED_DATA: { code: "400-001", message: "Duplicated data" },
    UNEXPECTED_ERROR: { code: "500-001", message: "Unexpected error" }
}
export default ResponseStatus