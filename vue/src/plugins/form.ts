import Form from 'vform'
import axios from 'axios'

const myAxios = axios.create({
    baseURL: 'https://inventoryapi.cordmarston.com/api/',
})

Form.axios = myAxios;

export default Form;