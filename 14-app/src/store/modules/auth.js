import axios from 'axios'
import firebaseError from '@/utils/firebaseErrors'

export default {
	namespaced: true,
	state() {
		return {
			token: localStorage.getItem('token')
		}
	},
	getters: {
		token(state, getters) {
			return state.token
		},
		isAuth(state, getters) {
			return !!getters.token
		},
	},
	mutations: {
		setToken(state, token) {
			state.token = token
			localStorage.setItem('token', token)
		},
		logout(state) {
			state.token = null
			localStorage.removeItem('token')
		}
	},
	actions: {
		async login({commit}, form) {
			try {
				const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FIREBASE_KEY}`
				const {data} = await axios.post(url, {
					...form,
					returnSecureToken: true
				})
				commit('setToken', data.idToken)
				commit('clearMessage', null, {root: true})
			} catch(e) {
				commit('setMessage', {
					text: firebaseError(e.response.data.error.message),
					type: 'danger'
				}, 
				{root: true})
				throw new Error(firebaseError(e.response.data.error.message))
			}
		}
	},
}