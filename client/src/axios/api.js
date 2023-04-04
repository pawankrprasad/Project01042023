import HTTP from "./http"

export const doLogin = async ({email, password}) => {
    return await HTTP.post('/account/login', { email, password });
}