<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';
import { useSuperMarketSaleStore } from '@/stores/SupermarketSaleStore';
import gsap from 'gsap';

const supermarketSaleStore = useSuperMarketSaleStore();
const chartInstance = ref<echarts.ECharts | null>(null);
// const descriptionWords = [
// "This", "chart", "displays", "the", "total", "sales", "amount", "for", "each", "month", "from",
//     "January", "2019", "to", "March", "2019", ".",
//     "It", "is", "evident", "that", "the", "total", "sales", "amount", "is", "declining", "progressively",
//     "from", "one", "month", "to", "the", "next", "."
// // ];

onMounted(async () => {

    supermarketSaleStore.getLineChart();
    // 初始化圖表，但不設置任何選項
    const chartElement = document.getElementById('main');
    if (chartElement) {
        chartInstance.value = echarts.init(chartElement);
        console.log("chartElement be init:");
        console.log(chartElement);
    }



    // 使用 gsap 动画库创建逐字逐字淡入效果
    // descriptionWords.forEach((word, index) => {
    //     const wordWithSpace = word + (index === descriptionWords.length - 1 ? '' : ' ');
    //     gsap.fromTo(
    //         `.animate-text:nth-child(${index + 1})`,
    //         { autoAlpha: 0 },
    //         {
    //             autoAlpha: 1, duration: 1, delay: index * 0.1, onComplete: () => {
    //                 // 在句号后添加换行
    //                 if (wordWithSpace.includes('.')) {
    //                     const brElement = document.createElement('br');
    //                     document.querySelector(`.animate-text:nth-child(${index + 1})`)?.appendChild(brElement);
    //                 }
    //             }
    //         }
    //     );
    // });
});





watch(() => supermarketSaleStore.lineChartData, (newData) => {
    if (!newData || newData.data.length === 0) return;

    const list: object[] = newData.data;
    const monthList: string[] = list.map((item: { [x: string]: any; }) => item["month"]);
    const totalAmountList: number[] = list.map((item: { [x: string]: any; }) => parseFloat(item["total_amount"]));

    console.log(monthList);
    console.log(totalAmountList);

    const chartData = {
        xAxis: {
            type: "category",
            data: monthList
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: totalAmountList,
                type: 'line'
            }
        ]
    };

    if (chartInstance.value) {
        console.log("chartInstance.value");
        console.log(chartInstance.value);
        chartInstance.value.setOption(chartData);
    };
}, {
    deep: true
})


</script>

<template>
    <div class='container flex justify-center items-center'>
        <el-row class='elRow w-full h-full'>
            <el-col
                :span='24'
                class='elCol flex items-end justify-center  w-full'
                style='height:80%'
            >
                <div
                    id="main"
                    style='width: 100%; 
                    height: 600px;margin-top: 0%;
                    box-shadow: 3px 0px 15px rgba(0, 0, 0, 0.15)' 
                ></div>
            </el-col>
            <el-col
                :span='24'
                class='elColDown flex justify-center items-start'
                style='margin-top: 2rem;'
            >
                <span>This chart displays the total sales amount for each month from January 2019 to March 2019.
                    <br>
                    It evident that the total sales amount is declining progressively from one month to the next.
                </span>

                <!-- 第二版本 -->
                <!-- <span
                    class="animate-text"
                    v-for="(word, index) in descriptionWords"
                    :key="index"
                ><span v-if="word !== ' '">{{ word }}</span>
                    <span v-else>&nbsp;</span>
                    在句号后添加换行 -->
                <!-- <br v-if="word === '2019.' || word === 'next.'" /> -->
                <!-- </span> -->

                <!-- 第三版本 -->
                <!-- <span class="description">
                    <template v-for="(word, index) in descriptionWords"
                    :key="index">
                        <span
                            class="animate-text"
                            
                        >{{ word }}</span>
                        <span v-if="index < descriptionWords.length - 1">&nbsp;</span>
                        <br v-if="word === '.'" />
                    </template>
                </span> -->
            </el-col>
        </el-row>
    </div>
</template>

<style scoped lang="scss">

</style>
