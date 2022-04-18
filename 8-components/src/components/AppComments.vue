<template>
    <p>
        <app-btn v-if="!comments.length" @click="loadComments" :classList="'btn primary'">Загрузить комментарии</app-btn>
    </p>
    <div class="loader" v-if="loading"></div>
    <div class="card" v-if="comments.length">
        <h2>Комментарии</h2>
        <ul class="list">
            <li class="list-item"
                v-for="item in comments"
                :key="item.id"
            >
                <div>
                    <p><strong>{{item.email}}</strong></p>
                    <small>{{item.body}}</small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import AppBtn from './AppBtn.vue'

export default {
    components: { AppBtn },
        data() {
            return {
                comments: [],
                loading: false
            }
        },
        methods: {
            async loadComments() {
                try {
                    this.loading = true
                    const comments = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=42')
                    this.comments = await comments.json()
                    this.loading = false
                } catch(e) {
                    console.log(e)
                }
            }
        }
    }
</script>

<style>

</style>