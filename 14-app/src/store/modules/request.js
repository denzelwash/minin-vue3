import axios from '@/axios/request'
import firebaseError from '@/utils/firebaseErrors'

export default {
	namespaced: true,
	state() {
		return {
			requests: []
		}
	},
	getters: {
		getRequests(state) {
			return state.requests
		}
	},
	mutations: {
		setRequests(state, requests) {
			state.requests = requests
		},
		addRequest(state, request) {
			state.requests.push(request)
		}
	},
	actions: {
		async create({commit, dispatch, rootGetters}, request) {
			try {
				const token = rootGetters['auth/token']
				const {data} = await axios.post(`/requests.json?auth=${token}`, {
					...request
				})
				commit('addRequest', {
					...request,
					id: data.name
				})
				dispatch('setMessage', {
					text: 'Заявка успешно создана',
					type: 'primary'
				}, {root: true})
			} catch(e) {
				dispatch('setMessage', {
					text: e.message,
					type: 'danger'
				}, {root: true})
			}
		},
		async loadRequests({commit, dispatch, rootGetters}) {
			try {
				const token = rootGetters['auth/token']
				const {data} = await axios.get(`/requests.json?auth=${token}`)
				if (data) {
					const requests = Object.keys(data).map((id) => ({
						...data[id],
						id
					}))
					commit('setRequests', requests)
				}
			} catch(e) {
				dispatch('setMessage', {
					text: e.message,
					type: 'danger'
				}, {root: true})
			}
		}
	},
}