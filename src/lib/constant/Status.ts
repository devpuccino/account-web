export const Status = {
    SUCCESS :"SUCCESS",
    UNEXPECTED_ERROR:"UNEXPECTED_ERROR",
    DUPLICATED_DATA:"DUPLICATED_DATA",
    INVALID_CSRF_TOKEN:"INVALID_CSRF_TOKEN"
}
const ResponseStatus: { [key: string]: { code: string, message: string } } = {
    SUCCESS: { code: "200-000", message: "Success" },
    DUPLICATED_DATA: { code: "400-001", message: "Duplicated data" },
    INVALID_CSRF_TOKEN: { code: "401-001", message: "Invalid request" },
    UNEXPECTED_ERROR: { code: "500-001", message: "Unexpected error" }
}
export default ResponseStatus