<template>
	<h2 v-if="!requests.length">Заявок пока нет</h2>
	<table v-else class="table">
		<tr>
			<th>#</th>
			<th>ФИО</th>
			<th>Телефон</th>
			<th>Сумма</th>
			<th>Статус</th>
			<th>Действие</th>
		</tr>
		<tr v-for="(request, index) in requests" :key="request.id">
			<td>{{ index + 1 }}</td>
			<td>{{ request.fio }}</td>
			<td>{{ request.phone }}</td>
			<td>{{ currency(request.summ) }}</td>
			<td><AppStatus :type="request.status"></AppStatus></td>
			<td>
				<router-link custom v-slot="{ navigate }" :to="`/request/${request.id}`">
					<button class="btn" @click="navigate">Открыть</button>
				</router-link>
			</td>
		</tr>
	</table>
</template>

<script>
import {currency} from '@/utils/currencyFormatter'
import AppStatus from '@/components/AppStatus'

export default {
	components: {AppStatus},
	props: ['requests'],
	setup() {

		return {
			currency
		}
	}
}
</script>

<style>

</style>