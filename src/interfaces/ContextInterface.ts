export interface IAuthContext {
    isLoading: boolean;
    isSignout: boolean;
    userToken: string | null;
}