<template>
    <div class="card card-w70">
        <h3 v-if="resume.length === 0">Добавьте первый блок, чтобы увидеть результат</h3>
        <div v-else>
            <app-resume-item
                v-for="(item, i) in resume"
                :key="i"
                :item="item"
            ></app-resume-item>
        </div>
    </div>
</template>

<script>
import AppResumeItem from './AppResumeItem.vue'

export default {
    props: ['resume'],
    components: {
        AppResumeItem
    },
}
</script>

<style>

</style>