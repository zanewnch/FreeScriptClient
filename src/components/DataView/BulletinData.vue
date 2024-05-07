<script setup lang='ts'>


import type { AxiosResponse } from 'node_modules/axios/index.cjs';
import request from '../../utils/Request';
import { ref, onMounted } from 'vue';

const bulletinData = ref<string|null>(null);

const getBulletinData = async () => {
    const res:AxiosResponse<string|null> = await request.get('/supermarket/bulletin');

    bulletinData.value = res.data;
    
}

onMounted(() => {
    getBulletinData();
})
</script>
<template>
    <div v-html="bulletinData"></div>
</template>
<style lang='scss' scoped>

</style>