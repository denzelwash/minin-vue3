<template>
  <form class="card" @submit.prevent="submit">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="desc"></textarea>
    </div>

    <button class="btn primary" :disabled="submitDisabled">Создать</button>
  </form>
</template>


<script>
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      title: '',
      date: '',
      desc: '',
    }
  },
  computed: {
    submitDisabled() {
      return !this.title.length || !this.date.length || !this.desc.length
    },
    status() {
      return new Date() > new Date(this.date) ? 'cancelled' : 'active'
    }
  },
  methods: {
    ...mapActions(['createTask']),
    async submit() {
      await this.createTask({
        title: this.title,
        date: this.date,
        desc: this.desc,
        status: this.status
      })
      this.$router.push('/')
    }
  }
}

</script>