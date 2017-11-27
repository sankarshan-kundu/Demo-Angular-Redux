
export interface IAccountState {
    isSubmitted: boolean;
    isValid: boolean;
    formPayload: {}
}
export const INIT_ACCOUNT_STATE = {
    isSubmitted: false,
    isValid: false,
    formPayload: {}
}

export interface ILoginState {
    email: string;
    password: string;
}