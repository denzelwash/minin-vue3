import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: []
  },
  getters: {
    getTasks(state) {
      return state.tasks
    },
    getActiveTasksCount(state) {
      if (state.tasks.length) {
        return state.tasks.filter(task => task.status === 'active' || task.status === 'pending').length
      }
      return 0
    }
  },
  mutations: {
    setTask(state, payload) {
      state.tasks.push(payload)
    },
    setTasks(state, payload) {
      state.tasks = payload
    }
  },
  actions: {
    async createTask({commit}, payload) {
      try {
        const response = await fetch('https://minin-12-api-default-rtdb.europe-west1.firebasedatabase.app/tasks.json', {
          method: 'POST',
          body: JSON.stringify(payload)
        })
        const data = await response.json()
        commit('setTask', {
          id: data.name,
          ...payload
        })
      } catch(e) {
        console.error(e);
      }
    },
    async loadTasks({commit}) {
      try {
        const response = await fetch('https://minin-12-api-default-rtdb.europe-west1.firebasedatabase.app/tasks.json')
        const data = await response.json()
        if (data) {
          let dataArr = Object.keys(data)
          dataArr = dataArr.map(item => ({
            id: item,
            ...data[item]
          }))
          commit('setTasks', dataArr)
        } else {
          commit('setTasks', [])
        }
      } catch(e) {
        console.error(e);
      }
    },
    async loadTask({commit}, payload) {
      try {
        const response = await fetch(`https://minin-12-api-default-rtdb.europe-west1.firebasedatabase.app/tasks/${payload}.json`)
        const data = await response.json()
        return data
      } catch(e) {
        console.error(e);
      }
    },
    async changeTaskStatus({commit}, payload) {
      try {
        const response = await fetch(`https://minin-12-api-default-rtdb.europe-west1.firebasedatabase.app/tasks/${payload.id}.json`, {
          method: 'PATCH',
          body: JSON.stringify({
            status: payload.status
          })
        })
        return await response.json()
      } catch(e) {
        console.error(e);
      }
    }
  },
  modules: {
  }
})
