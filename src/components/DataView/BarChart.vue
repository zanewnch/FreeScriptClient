<script setup lang="ts">
import { ref, onMounted, watchEffect, watch } from 'vue';
import * as echarts from 'echarts';
import { useSuperMarketSaleStore } from '@/stores/SupermarketSaleStore';
// 每月營業額
const msg = "hello world"
const supermarketSaleStore = useSuperMarketSaleStore();
const chartInstance = ref<echarts.ECharts | null>(null);
/*
在onmount method 裡面用async  跟使用watch()  哪一種方式比較常見

在 Vue 應用中，選擇在 onMounted 鉤子中使用 async 函數或者使用 watch 來處理異步數據，通常取決於特定的使用場景和數據流的特點。每種方法都有其適用場景：

使用 async in onMounted
適用場景：當您需要在組件加載時執行一次性的異步操作，且這些操作是組件渲染的前置條件時。
常見用途：加載組件所需的數據，設置初始狀態，或者進行 API 請求。
優點：代碼直觀且易於理解，適合一次性操作。
局限性：不適合監控數據的持續變化，只在組件初始化時執行。
使用 watch
適用場景：當需要響應式地監控數據變化並執行某些操作時。
常見用途：實時響應外部數據的變化（如從 Vuex store 或 props），執行相應的更新。
優點：提供了一種反應式的方式來自
動響應數據的變化，且可用於長期監控數據。

局限性：相對於一次性的異步操作，watch 更適合持續的數據變化。它可能不適用於只在組件初始化時需要的異步操作。
綜合考慮
在實踐中，選擇哪種方法取決於您的具體需求：

如果您的目標是在組件加載時執行一次性的異步操作（例如，從 API 加載數據以初始化組件），則在 onMounted 中使用 async 是一種直觀且清晰的方法。
如果您需要持續監控某個響應式數據源（如 Vuex store 中的狀態或父組件傳入的 prop）並根據這些數據的變化來執行操作，則使用 watch 更為合適。
在某些情況下，這兩種方法甚至可能在同一組件中共存，各自處理不同的邏輯。总的来说，没有固定的“更好”的方法，关键在于选择最适合您当前场景的方法。
*/

/*
但我還是不理解  我onmount 不就已經get data   那我再寫一個normal function 放在get method 之後   不就可以成功   為什麼一定要用 watch
您提出的問題非常合理。在理解為什麼需要使用 watch 之前，我們先來看一下 Vue 和異步數據處理的一些關鍵點。

當您在 onMounted 鉤子中調用 supermarketSaleStore.getBarChart() 方法時，這個方法很可能是異步的，即它不會立即返回數據。這意味著，即使您在 getBarChart 調用後立即執行一個函數，這個函數仍然可能在數據實際到達之前執行。換句話說，當您的函數執行時，supermarketSaleStore.barChartData 可能還是空的或未更新的。

這就是為什麼 watch 在這種情況下非常有用：

響應式更新：watch 允許您響應式地監視數據變化。當 supermarketSaleStore.barChartData 更新時（無論這發生在何時），watch 的回調函數會被觸發，此時您可以確定數據已經準備好了。

異步處理：由於數據加載是異步的，使用 watch 可以確保只有在數據真正到達並且準備好後，才執行更新圖表的邏輯。

如果您不使用 watch，您可能需要在 getBarChart 方法中返回一個 Promise，然後在 Promise 解決時執行更新圖表的邏輯。這是另一種解決方案，但它要求您對 getBarChart 方法進行修改，使其支持 Promise 或異步處理。

總之，使用 watch 是一種更簡潔且符合 Vue 響應式數據流的方式來處理這種異步數據更新的情況。
*/
onMounted(() => {
    supermarketSaleStore.getBarChart();
    // 初始化圖表，但不設置任何選項
    const chartElement = document.getElementById('main');
    if (chartElement) {
        chartInstance.value = echarts.init(chartElement);
    }
});

watch(() => supermarketSaleStore.barChartData, (newData) => {
    if (!newData || newData.data.length === 0) return;

    /* newData.data is an array
     map function would create a new array
     map的操作是針對array裡面每一個element, item 就是element的代稱 也就是item是array裡面的每一個element 所以item["product_line"] 其實就是object["product_line"]
     */
    /*
    { [x: string]: any; } 是一个 TypeScript 中的类型注解，用于指定参数 item 的类型。具体来说，它表示参数 item 是一个对象，该对象具有字符串类型的键（key）和任何类型的值（value）。
    */
    const productLineList = newData.data.map((item: { [x: string]: any; }) => item["product_line"]);
    const avgGrossIncome = newData.data.map((item: { [x: string]: string; }) => parseFloat(item["avg_gross_income"]));
    const avgTotal = newData.data.map((item: { [x: string]: string; }) => parseFloat(item["avg_total"]));

    const chartDataNew = {
        xAxis: { data: productLineList },
        yAxis: {},
        series: [
            {
                name: "Average gross income", type: "bar", data: avgGrossIncome,
                showBackground: true, backgroundStyle: {
                    color: 'rgba(220, 220, 220, 0.8)'
                },
                itemStyle: {
                    barBorderRadius: 5,
                    borderWidth: 1,
                    borderType: 'solid',
                    borderColor: '#73c0de',
                    shadowColor: '#5470c6',
                    shadowBlur: 3
                }
            },
            {
                name: "Average total", type: "bar",
                data: avgTotal,
                showBackground: true, backgroundStyle: {
                    color: 'rgba(220, 220, 220, 0.8)'
                },
                itemStyle: {
                    barBorderRadius: 5,
                    borderWidth: 1,
                    borderType: 'solid',
                    borderColor: '#73c0de',
                    shadowColor: '#5470c6',
                    shadowBlur: 3,
                    color: 'rgba(220, 220, 220, 0.8)'
                }
            }
        ]
    };

    if (chartInstance.value) {
        chartInstance.value.setOption(chartDataNew);
    }
}, {
    deep: true
});
</script>

<template>
    <div class='container flex justify-center items-center'>
        <el-row class='elRow w-full h-full'>
            <el-col
                :span='24'
                class='elCol flex items-end justify-center h-80 w-full'
                style='height: 80%;'
            >
                <div
                    id="main"
                    style='width: 100%; 
                    height: 600px;margin-top: -3%;
                    box-shadow: 3px 0px 15px rgba(0, 0, 0, 0.15)'                
                ></div>
            </el-col>
            <el-col
                :span='24'
                class='flex justify-center items-start '
                style='margin-top: 2rem;'
            >
                <span>This chart display the total sale amount and gross income for the different product line.
                    <br>
                    As you can see,there is no significant variation among the various product lines, indicating there isn't
                    specific product preferred by customers.
                </span>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    justify-content: center;
    align-items: center;

    .elRow {
        height: 100%;
        width: 100%;




        .elCol {
            display: flex;
            justify-content: center;
            align-items: end;

            height: 80%;
            width: 100%;

            //background-color: blue;

            #main {
                margin-top: -3%;
                box-shadow: 3px 0px 15px rgba(0, 0, 0, 0.15);

                
            }
        }

        
    }


}
</style>
