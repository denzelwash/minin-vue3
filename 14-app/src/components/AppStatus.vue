<template>
  <span :class="['badge', statusMap[type].class]">{{ statusMap[type].title }}</span>
</template>

<script>

export default {
  props: ['type'],
	setup() {
    const statusMap = {
			active: {
				title: 'активный',
				class: 'primary'
			},
			done: {
				title: 'выполнено',
				class: 'primary'
			},
			cancelled: {
				title: 'отменен',
				class: 'danger'
			},
			pending: {
				title: 'В процессе',
				class: 'warning'
			}
		}

		return {
			statusMap
		}
	}
}
</script>
