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
</template>


<script>
import {ref, computed} from 'vue'

export default {
  setup() {
    const title = ref('')
    const date = ref('')
    const desc = ref('')

    const isSubmitBtnDisabled = computed(() => {
      let disabled = true
      if (title.value.length && date.value.length && desc.value.length) {
        disabled = false
      }
      return disabled
    })

    const submitForm = () => {
      console.log(555);
    }

    return {
      title,
      date,
      desc,
      isSubmitBtnDisabled,
      submitForm
    }
  }
}

</script>