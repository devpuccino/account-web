import Status from "../constant/Status";
import { CommonResponse } from "./Common";

export class InvalidTokenResponse implements CommonResponse<null> {
    code: string;
    message: string;
    data?: null | undefined;
    constructor() {
        this.code = Status.INVALID_CSRF_TOKEN.code
        this.message = Status.INVALID_CSRF_TOKEN.message
    }
}