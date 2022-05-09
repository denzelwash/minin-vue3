<template>
  <form class="card text-left" @submit.prevent="submit">
    <h1>Войти в систему</h1>

    <div class="form-control">
      <label for="email">Email</label>
      <input type="text" id="email">
      <small></small>
    </div>

    <div class="form-control">
      <label for="password">Пароль</label>
      <input type="password">
      <small></small>
    </div>

    <button class="btn primary" type="submit">Войти</button>
  </form>
</template>

<script>
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    const submit = async () => {
      await store.dispatch('auth/login')
      router.push('/')
    }
    return {
      submit
    }
  }
}

</script>

<style scoped>

</style>