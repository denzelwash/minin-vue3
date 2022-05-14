<template>
	<ThePage title="Список заявок">
		<template #header>
			<button class="btn primary" @click="modal = true">Создать</button>
		</template>
		<RequestTable :requests="[]"></RequestTable>
		<teleport to="body">
			<AppModal v-if="modal" :title="'Создать завку'" @close="modal = false">
				<RequestModal></RequestModal>
			</AppModal>
		</teleport>
	</ThePage>
</template>

<script>
import {ref} from 'vue'
import ThePage from '@/components/ThePage'
import RequestTable from '@/components/request/RequestTable'
import AppModal from '@/components/AppModal'
import RequestModal from '@/components/request/RequestModal'

export default {
	components: {
		ThePage,
		RequestTable,
		AppModal,
		RequestModal
	},
	setup() {
		const modal = ref(false)

		return {
			modal
		}
	}
}
</script>

<style>

</style>