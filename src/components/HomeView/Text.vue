<script setup lang='ts'>

import { ref, computed, onMounted, onUnmounted } from 'vue';

// concat

let data = [
    { username: "David James", title: "title", content: "contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent" }
];
let refData = ref(data);


let needToLoad = false;

const load = () => {
    // initial value = false
    if (needToLoad) return;

    needToLoad = true;

    // load new data
    if (needToLoad) {
        refData.value = refData.value.concat(data);
    }
    console.log('load new data');
    // change needToLoad = false
    needToLoad = false;
}



const trigger = () => {
    /*
    頁面長度計算公式：
    頁面總長：
    可視區域：
    可視區域上方：
    可視區域下方： 這是未知，要求的
     */
    const viewTotalHeight = document.body.scrollHeight;
    const viewportHeight = document.documentElement.clientHeight;
    const topHeight = document.body.scrollTop || document.documentElement.scrollTop;
    const bottomHeight = viewTotalHeight - topHeight - viewportHeight;



    console.log('buttomheight');
    console.log(bottomHeight);

    if (bottomHeight < 10) {
        console.log('need to load');
        load();
    }

}

onMounted(() => {
    window.addEventListener("scroll", trigger, false);
})
onUnmounted(() => {
    window.removeEventListener("scroll", trigger, false);
})

</script>
<template>
    <div
        v-for='(item, index) in refData'
        :key='index'
        class='md:w-4/5  md:flex md:flex-col md:justify-center'
    >
        <p class='username'>{{ item['username'] }}</p>
        <p class=' title'>{{ item['title'] }}</p>
        <p class='content'>{{ item['content'] }}</p>
    </div>
</template>
<style scoped>
@media(min-width: 768px) {

    .username{
        text-align: left;
    }
    .title {
        text-align: left;
        margin-top: 5px;

    }

    .content {
        margin-top: 5px;
    }

    p {
        text-align: center;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;


    }
}
</style>