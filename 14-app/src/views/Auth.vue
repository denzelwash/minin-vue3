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
			value=test@test.ru
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
			value="testtest"
			:validation="[['required'],['length', 4]]"
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
import {useRouter, useRoute} from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()

		if (route.query.message === 'auth') {
			store.dispatch('setMessage', {
				text: 'Необходима авторизация',
				type: 'warning'
			})
		}

    const submit = async (form) => {
      try {
				await store.dispatch('auth/login', form)
				router.push('/')
			} catch(e) {}
    }
    return {
      submit
    }
  }
}

</script>

<style scoped>

</style>