<template>
  <AppLoader v-if="loading"></AppLoader>
  <div v-else>
    <h1 class="text-white center" v-if="!tasks.length">Задач пока нет</h1>
    <template v-else>
      <h3 class="text-white">Всего активных задач: {{ activeTasksLength }}</h3>
      <AppTask 
        v-for="task in tasks"
        :key="task.id"
        :task="task"
      ></AppTask>
    </template>
  </div>
</template>

<script>
import {onBeforeMount, ref, computed} from 'vue'
import {useStore} from 'vuex'
import AppLoader from '@/components/AppLoader'
import AppTask from '@/components/AppTask'

export default {
  components: {AppLoader, AppTask},
  setup() {
    const store = useStore()
    const loading = ref(false)
    const tasks = ref([])

    const activeTasksLength = computed(() => {
      return tasks.value.filter((item) => item.status === 'active').length
    })

    onBeforeMount(async () => {
      loading.value = true
      tasks.value = await store.dispatch('allTasks')
      loading.value = false
    })

    return {
      loading,
      tasks,
      activeTasksLength
    }
  }
}
</script>
