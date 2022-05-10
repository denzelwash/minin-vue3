<template>
	<div v-if="message" :class="['alert', 'text-left', message.type]">
		<p>{{ messageMap[message.type] }}</p>
		<p>{{ message.text }}</p>
		<span class="alert-close" @click="close">&times;</span>
	</div>
</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'

export default {
	setup() {
		const store = useStore()
		const message = computed(() => store.getters['message'])
		const messageMap = {
			success: 'Успешно!',
			danger: 'Ошибка!',
			warning: 'Внимание!'
		}
		const close = () => store.commit('clearMessage')

		return {
			message,
			close,
			messageMap
		}
	}
}
</script>

<style>

</style>