<template>
	<AppLoader v-if="loading"></AppLoader>
	<ThePage v-else title="Список заявок">
		<template #header>
			<button class="btn primary" @click="modal = true">Создать</button>
		</template>
		<RequestFilter v-model="filter"></RequestFilter>
		<RequestTable :requests="requests"></RequestTable>
		<teleport to="body">
			<AppModal v-if="modal" :title="'Создать завку'" @close="modal = false">
				<RequestModal @close="modal = false"></RequestModal>
			</AppModal>
		</teleport>
	</ThePage>
</template>

<script>
import {ref, computed, onMounted} from 'vue'
import {useStore} from 'vuex'
import ThePage from '@/components/ThePage'
import RequestTable from '@/components/request/RequestTable'
import RequestFilter from '@/components/request/RequestFilter'
import AppModal from '@/components/AppModal'
import RequestModal from '@/components/request/RequestModal'
import AppLoader from '@/components/AppLoader'

export default {
	components: {
		ThePage,
		RequestTable,
		AppModal,
		RequestModal,
		AppLoader,
		RequestFilter
	},
	setup() {
		const store = useStore()
		const modal = ref(false)
		const loading = ref(false)
		const filter = ref({})
		const requests = computed(() => {
			const requests = store.getters['request/getRequests']
			return requests.filter(request => {
				if (filter.value.name) {
					return request.fio.includes(filter.value.name)
				}
				return request
			}).filter(request => {
				if (filter.value.status) {
					return request.status === filter.value.status
				}
				return request
			})
		})

		onMounted(async () => {
			loading.value = true
			await store.dispatch('request/loadRequests')
			loading.value = false
		})

		return {
			modal,
			requests,
			loading,
			filter
		}
	}
}
</script>

<style>

</style>