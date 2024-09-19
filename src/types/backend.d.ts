export {}

declare global {
    interface IRequest {
        url: string;
        method: string;
        body?: { [key: string]: any };
        headers?: any;
        nextOption?: any;
    }
}