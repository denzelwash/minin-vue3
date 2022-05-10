import { createStore, createLogger } from 'vuex'
import auth from './modules/auth'

const plugins = [];

if (process.env.NODE_ENV !== 'production') {
  plugins.push(createLogger())
}

export default createStore({
  plugins,
  state: {
		message: null
  },
	getters: {
		message(state) {
			return state.message
		}
	},
  mutations: {
		setMessage(state, message) {
			state.message = message
		},
		clearMessage(state) {
			state.message = null
		}
  },
  actions: {
  },
  modules: {
    auth
  }
})
