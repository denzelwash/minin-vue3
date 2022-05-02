<template>
  <AppLoader v-if="loading"></AppLoader>
  <div class="card" v-if="!loading && task">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date(task.date).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ task.desc }}</p>
    <div>
      <button class="btn" @click="changeStatus('pending')">Взять в работу</button>
      <button class="btn primary" @click="changeStatus('done')">Завершить</button>
      <button class="btn danger" @click="changeStatus('cancelled')">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-if="!loading && !task">
    Задачи с id = <strong>{{ $route.params.id }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '@/components/AppStatus'
import AppLoader from '@/components/AppLoader'
import {mapActions} from 'vuex'

export default {
  components: {AppStatus, AppLoader},
  data() {
    return {
      loading: false,
      task: null
    }
  },
  computed: {
  
  },
  methods: {
    ...mapActions(['loadTask', 'changeTaskStatus']),
    async changeStatus(type) {
      const task = await this.changeTaskStatus({
        id: this.$route.params.id,
        status: type
      })
      this.task.status = task.status
    }
  },
  async beforeMount() {
    this.loading = true
    this.task = await this.loadTask(this.$route.params.id)
    this.loading = false
  }
}
</script>

<style scoped>

</style>