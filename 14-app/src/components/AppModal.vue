<template>
	<div class="modal-backdrop" @click="$emit('close')">
		<div class="modal" @click.stop>
			<h3 v-if="title">{{ title }}</h3>
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: ['title'],
	emits: ['close']
}
</script>

<style>

</style>