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
        async login({commit}, payload) {
            commit('setToken', 'TEST_TOKEN')
        }
    },
}