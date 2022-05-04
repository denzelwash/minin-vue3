<template>
  <form class="card" @submit.prevent="submitForm">
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

    <button class="btn primary" :disabled="isSubmitBtnDisabled">Создать</button>
  </form>
  <AppLoader v-if="loading"></AppLoader>
</template>


<script>
import {ref, computed} from 'vue'
import {useStore} from 'vuex';
import {useRouter} from 'vue-router'
import AppLoader from '@/components/AppLoader'

export default {
  components: {AppLoader},
  setup() {
    const store = useStore()
    const router = useRouter()
    const title = ref('')
    const date = ref('')
    const desc = ref('')
    const loading = ref(false)

    const isSubmitBtnDisabled = computed(() => {
      let disabled = true
      if (title.value.length && date.value.length && desc.value.length) {
        disabled = false
      }
      return disabled
    })

    const submitForm = async () => {
      const status = Date.parse(date.value) > new Date() ? 'active' : 'cancelled'
      loading.value = true
      const task = await store.dispatch('addTask', {
        title: title.value,
        date: date.value,
        desc: desc.value,
        status 
      })
      if (task) {
        router.push('/')
      }
      loading.value = false
    }

    return {
      title,
      date,
      desc,
      isSubmitBtnDisabled,
      submitForm,
      loading
    }
  }
}

</script>