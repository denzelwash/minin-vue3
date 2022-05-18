<template>
	<div class="card page-card">
		<div class="breadcrumbs text-left" v-if="back">
			<router-link to="/">Вернуться на главную</router-link>
		</div>
		<h1 class="card-title">
			<span>{{ title }}</span>
			<slot name="header"></slot>
		</h1>
		<slot name="default"></slot>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true
		},
		back: {
			type: Boolean
		}
	}
}
</script>

<style>

</style>