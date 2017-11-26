export interface ILoginState {
    isSubmitted: boolean;
    isValid: boolean;
    login: {
        email: string;
        password: string;
    }
}
export const INIT_LOGIN_STATE: ILoginState = {
    isSubmitted: false,
    isValid: false,
    login: {
        email: "",
        password: ""
    }
}