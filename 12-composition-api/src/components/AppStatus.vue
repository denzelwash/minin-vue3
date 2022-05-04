<template>
  <span :class="['badge', status.class]">{{ status.text }}</span>

</template>

<script>
import {computed} from '@vue/runtime-core'

export default {
  props: {
    type: {
      type: String,
      validator(value) {
        return ['active', 'done', 'cancelled', 'pending'].includes(value)
      }
    }
  },
  setup(props) {
    const statusMap = {
      active: {
        text: 'Активная',
        class: 'primary'
      },
      done: {
        text: 'Завершена',
        class: 'primary'
      },
      cancelled: {
        text: 'Отменена',
        class: 'warning'
      },
      pending: {
        text: 'В работе',
        class: ''
      }
    }
    const status = computed(() => {
      return statusMap[props.type]
    })
    return {
      status
    }
  }
}
</script>
