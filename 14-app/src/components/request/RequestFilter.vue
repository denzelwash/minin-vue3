<template>
  <div class="filter">
    <div class="form-control">
      <input type="text" placeholder="Начните писать имя" v-model="name">
    </div>
    <div class="form-control">
      <select v-model="status">
        <option disabled selected>Выберите статус</option>
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>
    <button v-if="isActiveFilter" class="btn warning" @click="resetFilter">Очистить</button>
  </div>
</template>

<script>
import {ref, computed, watch} from 'vue'

export default {
	props: ['filter'],
	emits: ['update:modelValue'],
	setup(props, {emit}) {
		const name = ref()
		const status = ref()

		watch([name, status], () => {
			emit('update:modelValue', {name, status})
		})

		const isActiveFilter = computed(() => {
			if (name.value || status.value) {
				return true
			}
		})

		const resetFilter = () => {
			name.value = null
			status.value = null
		}
	
		return {
			name,
			status,
			resetFilter,
			isActiveFilter
		}
	}
}
</script>
