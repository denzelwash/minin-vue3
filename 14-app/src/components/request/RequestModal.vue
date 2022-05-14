<template>
	<FormKit
		novalidate
		type="form"
		v-model="formData"
		:actions="false"
		:config="{ validationVisibility: 'submit' }"
		:incomplete-message="false"
		@submit="submit"
	>
		<FormKit
			type="text"
			label="Фио"
			name="fio"
			:validation="[['required']]"
			:validation-messages="{
				required: 'Заполните поле',
			}"
			wrapper-class="$reset form-control"
		/>
		<FormKit
			type="text"
			label="Телефон"
			name="phone"
			:validation="[['required']]"
			:validation-messages="{
				required: 'Заполните поле',
			}"
			wrapper-class="$reset form-control"
		/>
		<FormKit
			type="number"
			label="Сумма"
			name="phone"
			step="1"
			:validation="[['required']]"
			:validation-messages="{
				required: 'Заполните поле',
			}"
			wrapper-class="$reset form-control"
		/>
		<FormKit
			type="select"
			label="Статус"
			name="status"
			placeholder="Выберите статус"
			:options="{
				done: 'Завершен',
				canceled: 'Отменен',
				active: 'Активный',
				pending: 'Выполняется',
			}"
			validation="required"
			:validation-messages="{
				required: 'Заполните поле',
			}"
			wrapper-class="$reset form-control"
		/>
		<button class="btn primary" type="submit">Войти</button>
	</FormKit>
</template>

<script>
import {ref} from 'vue'

export default {
	setup() {
		const formData = ref({})
		const submit = (data) => {
			console.log(data);
			console.log(formData.value);
		}

		return {
			formData,
			submit
		}
	}
}
</script>

<style>

</style>