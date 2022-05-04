<template>
    <div class="card">
        <h2 class="card-title">
            {{ task.title }}
            <AppStatus :type="task.status"/>
        </h2>
        <p>
            <strong>
                <small>
                    {{new Date(task.date).toLocaleDateString()}}
                </small>
            </strong>
        </p>
        <button class="btn primary" @click="openTaskPage">Посмотреть</button>
    </div>
</template>

<script>
import {useRouter} from 'vue-router'
import AppStatus from '@/components/AppStatus'

export default {
    components: {
        AppStatus
    },
    props: ['task'],
    setup(props) {
        const router = useRouter()
        const openTaskPage = () => {
            router.push({
                name: 'Task',
                params: {
                    id: props.task.id
                }
            })
        }
        return {
            openTaskPage
        }
    }
}
</script>

<style>

</style>