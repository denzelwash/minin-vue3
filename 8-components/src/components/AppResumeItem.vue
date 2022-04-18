<template>
    <component v-if="item.type !== 'avatar'" :is="item.tag">{{item.text}}</component>
    <div v-if="item.type === 'avatar'" style="text-align: center">
        <img :src="item.text" alt="">    
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        },
        
    }
}
</script>

<style>

</style>