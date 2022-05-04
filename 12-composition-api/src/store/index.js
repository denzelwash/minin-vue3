import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async addTask({}, task) {
      try {
        const response = await axios.post('https://minin-12-api-default-rtdb.europe-west1.firebasedatabase.app/tasks.json', task)
        return !!response.data.name 
      } catch(e) {
        console.error(e)
      }
    },
    async allTasks({}, task) {
      try {
        const response = await axios.get('https://minin-12-api-default-rtdb.europe-west1.firebasedatabase.app/tasks.json')
        const resultArr = Object.keys(response.data).map((id) => ({
          id,
          ...response.data[id]
        }))
        return resultArr;
      } catch(e) {
        console.error(e)
      }
    },
    async getTask({}, id) {
      try {
        const response = await axios.get(`https://minin-12-api-default-rtdb.europe-west1.firebasedatabase.app/tasks/${id}.json`)
        return response.data
      } catch(e) {
        console.error(e)
      }
    },
    async setTaskStatus({}, {id, status}) {
      try {
        const response = await axios.patch(`https://minin-12-api-default-rtdb.europe-west1.firebasedatabase.app/tasks/${id}.json`, {status})
        return response.data.status
      } catch(e) {
        console.error(e)
      }
    }
  },
  modules: {
  }
})
