<template>
	<AppLoader v-if="loading"></AppLoader>
  <ThePage back v-else-if="request" title="Заявка">
		<div class="text-left">
			<p><strong>Имя владельца</strong>: {{ request.fio }}</p>
			<p><strong>Телефон</strong>: {{ request.phone }}</p>
			<p><strong>Сумма</strong>: {{ currency(request.summ) }}</p>
			<p><strong>Статус</strong>: <AppStatus :type="request.status"></AppStatus></p>

			<div class="form-control">
				<label for="status">Статус</label>
				<select v-model="status">
					<option value="done">Завершен</option>
					<option value="cancelled">Отменен</option>
					<option value="active">Активен</option>
					<option value="pending">Выполняется</option>
				</select>
			</div>

			<button class="btn danger" @click="remove">Удалить</button>
			<button class="btn" @click="update" v-if="isChangedStatus">Обновить</button>
		</div>
  </ThePage>
	<h3 v-else class="card page-card text-center">{{`Заявка с id ${id} не найдена!`}}</h3>
</template>

<script>
import {ref, computed, onMounted} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {useStore} from 'vuex'
import ThePage from '@/components/ThePage'
import AppLoader from '@/components/AppLoader'
import AppStatus from '@/components/AppStatus'
import {currency} from '@/utils/currencyFormatter'

export default {
	components: {
		ThePage,
		AppLoader,
		AppStatus
	},
	setup() {
		const store = useStore()
		const route = useRoute()
		const router = useRouter()
		const id = route.params.id
		const loading = ref(false)
		const request = ref()
		const status = ref()

		onMounted(async () => {
			loading.value = true
			request.value = await store.dispatch('request/loadRequest', id)
			status.value = request.value?.status
			loading.value = false
		})

		const isChangedStatus = computed(() => {
			return status.value !== request.value.status
		})

		const remove = async () => {
			await store.dispatch('request/remove', id)
			router.push('/')
		}

		const update = async () => {
			await store.dispatch('request/update', {
				...request.value,
				status: status.value,
				id
			})
			request.value.status = status.value
		}

		return {
			loading,
			request,
			id,
			currency,
			status,
			isChangedStatus,
			remove,
			update
		}
	}
}
</script>

<style>

</style>