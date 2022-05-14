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
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	</table>
</template>

<script>
export default {
	props: ['requests']
}
</script>

<style>

</style>