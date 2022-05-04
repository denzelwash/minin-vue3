<template>
  <AppLoader v-if="loading"></AppLoader>
  <div class="card" v-if="!loading && task">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date(task.date).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ task.desc }}</p>
    <div>
      <button class="btn" @click="setStatus('pending')">Взять в работу</button>
      <button class="btn primary" @click="setStatus('done')">Завершить</button>
      <button class="btn danger" @click="setStatus('cancelled')">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ id }}</strong> нет.
  </h3>
</template>

<script>
import {ref, onBeforeMount} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
import AppStatus from '../components/AppStatus'
import AppLoader from '@/components/AppLoader'

export default {
  components: {AppStatus, AppLoader},
  setup() {
    const store = useStore()
    const route = useRoute()
    const loading = ref(false)
    const task = ref(null)
    const id = route.params.id
    
    const setStatus = async (status) => {
      const result = await store.dispatch('setTaskStatus', {
        id,
        status
      })
      if (result) {
        task.value.status = result
      }
    }

    onBeforeMount(async () => {
      loading.value = true
      task.value = await store.dispatch('getTask', id)
      loading.value = false
    })

    return {
      loading,
      task,
      id,
      setStatus
    }
  }
}
</script>

<style scoped>

</style>