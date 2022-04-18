<template>
    <form class="card card-w30" @submit.prevent="submit">
        <div class="form-control">
            <label for="type">Тип блока</label>
            <select id="type" v-model="select">
                <option value="title">Заголовок</option>
                <option value="subtitle">Подзаголовок</option>
                <option value="avatar">Аватар</option>
                <option value="text">Текст</option>
            </select>
        </div>

        <div class="form-control">
            <label for="value">Значение</label>
            <textarea id="value" rows="3" v-model="text"></textarea>
        </div>

        <app-btn :classList="'btn primary'" :disabled="!checkTextLength">Добавить</app-btn>
    </form>
</template>

<script>
import AppBtn from './AppBtn.vue'

export default {
  components: { AppBtn },
  emits: ['click'],
    data() {
        return {
            select: 'title',
            text: '',
        }
    },
    computed: {
        checkTextLength() {
            return this.text.length >= 3
        },
        selectTag() {
            const arr = {
                title: 'h1',
                subtitle: 'h2',
                avatar: 'img',
                text: 'p'
            }
            return arr[this.select]
        }
    },
    methods: {
        submit() {
            this.$emit('addResumeItem', {
                type: this.select,
                tag: this.selectTag,
                text: this.text
            })
            this.select = 'title'
            this.text = ''
        }
    }
}
</script>

<style>

</style>