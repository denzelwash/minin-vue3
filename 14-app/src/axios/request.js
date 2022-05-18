import axios  from "axios"
import router from '@/router'

const request = axios.create({
  baseURL: process.env.VUE_APP_FIREBASE_URL
})

request.interceptors.response.use(null, (error) => {
	if (error.request.status === 401) {
		router.push('/auth?message=auth')
	}
	return Promise.reject(error)
})

export default request