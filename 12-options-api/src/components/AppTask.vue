<template>
    <div class="card">
        <h2 class="card-title">
            {{ task.title }}
            <AppStatus :type="task.status" />
        </h2>
        <p>
            <strong>
                <small>
                    {{new Date().toLocaleDateString()}}
                </small>
            </strong>
        </p>
        <button class="btn primary" @click="$router.push(`/task/${task.id}`)">Посмотреть</button>
    </div>
</template>

<script>
    import AppStatus from '@/components/AppStatus.vue'

    export default {
        props: ['task'],
        components: {AppStatus}
    }
</script>

<style>

</style>