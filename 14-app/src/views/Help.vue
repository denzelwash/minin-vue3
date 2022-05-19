<template>
	<ThePage back title="Помощь">
		<AppQuestion
			v-for="question in questions"
			:key="question.title"
			:question="question"
		></AppQuestion>
	</ThePage>
</template>

<script>
import ThePage from '@/components/ThePage'
import AppQuestion from '@/components/AppQuestion'

export default {
	components: {
		ThePage,
		AppQuestion
	},
	setup() {
    const questions = [
      {title: 'Что есть в данной системе?', text: 'Тут есть все, для того, чтобы смотреть, какие заявки человек добавлял'},
      {title: 'Как тут работает авторизация?', text: 'Все реализовано через Firebase'}
    ]

		return {
			questions
		}
	}
}
</script>

<style>

</style>