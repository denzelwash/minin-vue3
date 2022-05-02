<template>
  <div v-if="!loading">
    <h1 class="text-white center" v-if="!getTasks.length">Задач пока нет</h1>
    <template v-else>
      <h3 class="text-white">Всего активных задач: {{ getActiveTasksCount }}</h3>
      <AppTask
        v-for="item in getTasks" 
        :key="item.id"
        :task="item"
      ></AppTask>
    </template>
  </div>
  <AppLoader v-else></AppLoader>
</template>

<script>
import AppStatus from '../components/AppStatus'
import AppTask from '../components/AppTask'
import {mapGetters, mapActions} from 'vuex'
import AppLoader from '@/components/AppLoader.vue'

export default {
  components: {AppStatus, AppLoader, AppTask},
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters(['getTasks', 'getActiveTasksCount'])
  },
  methods: {
    ...mapActions(['loadTasks'])
  },
  async beforeMount() {
    this.loading = true
    await this.loadTasks()
    this.loading = false
  }
}
</script>
