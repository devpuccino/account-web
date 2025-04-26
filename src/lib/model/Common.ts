import Status from "../constant/Status"

export class CommonResponse<T> {
    code: string
    message: string
    data?: T | null

    constructor(status: keyof typeof Status, data: T | null = null) {
        this.code = Status[status].code
        this.message = Status[status].message
        this.data = data
    }
}