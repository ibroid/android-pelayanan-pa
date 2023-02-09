export default class LoginRequestException extends Error {
    private status: number;
    constructor(message: string, status: number) {
        super(message);
        this.status = status;
    }
}