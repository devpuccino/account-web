
class CommonResponse<T> {
    code: string
    message: string
    data: T | null = null
    constructor(code: string, message: string, data?: T) {
        this.code = code;
        this.message = message;
        if (data !== undefined) {
            this.data = data
        }
    }
}