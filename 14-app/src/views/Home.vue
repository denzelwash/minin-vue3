<template>
	<Loader v-if="loading"></Loader>
	<ThePage v-else title="Список заявок">
		<template #header>
			<button class="btn primary" @click="modal = true">Создать</button>
		</template>
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
import AppModal from '@/components/AppModal'
import RequestModal from '@/components/request/RequestModal'
import Loader from '@/components/Loader'

export default {
	components: {
		ThePage,
		RequestTable,
		AppModal,
		RequestModal,
		Loader
	},
	setup() {
		const store = useStore()
		const modal = ref(false)
		const loading = ref(false)
		const requests = computed(() => {
			return store.getters['request/getRequests']
		})

		onMounted(async () => {
			loading.value = true
			await store.dispatch('request/loadRequests')
			loading.value = false
		})

		return {
			modal,
			requests,
			loading
		}
	}
}
</script>

<style>

</style>