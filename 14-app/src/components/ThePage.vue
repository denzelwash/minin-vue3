<template>
	<div class="card page-card">
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
		}
	}
}
</script>

<style>

</style>