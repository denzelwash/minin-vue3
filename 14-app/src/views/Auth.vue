<template>
    <FormKit
      novalidate
      type="form"
      :form-class="'card text-left'"
      :actions="false"
      :config="{ validationVisibility: 'submit' }"
      :incomplete-message="false"
      @submit="submit"
    >
      <h1>Войти в систему</h1>
      <FormKit
        type="email"
        label="Email"
        name="email"
        :validation="[['required'],['email']]"
        :validation-messages="{
          required: 'Заполните поле',
          email: 'Введите корректный email',
        }"

        wrapper-class="$reset form-control"
      />
      <FormKit
        type="password"
        label="Пароль"
        name="password"
        :validation="[['required'],['length', 6]]"
        :validation-messages="{
          required: 'Заполните поле',
          length({node}) {
            return `Введите пароль, минимум 6 символов, сейчас ${node.value.length}`
          },
        }"
        wrapper-class="$reset form-control"
      />
      <button class="btn primary" type="submit">Войти</button>
    </FormKit>
</template>

<script>
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    const submit = async (formFields) => {
      await store.dispatch('auth/login', formFields)
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