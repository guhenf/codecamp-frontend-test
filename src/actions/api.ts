import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://dev.codeleap.co.uk',
	timeout: 10000,
})
