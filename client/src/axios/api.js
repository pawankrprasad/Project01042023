import HTTP from "./http"

export const doLogin = async ({email, password}) => HTTP.post('/account/login', { email, password });


export const doGetProductList = async () => HTTP.get('/products');
export const doGetProduct = async (id) => HTTP.get(`/products/${id}`);
export const doCreateProduct = async (payload) => HTTP.post('/products', payload);