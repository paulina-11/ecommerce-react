import axios from 'axios'

const BaseURL = 'https://ecomerce-master.herokuapp.com'

export const ProductosApi = axios.create({ baseURL: BaseURL })
