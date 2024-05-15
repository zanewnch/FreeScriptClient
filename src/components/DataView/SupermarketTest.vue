<script setup lang="ts">
import * as echarts from 'echarts'
import { ref, onMounted, watchEffect, watch, type Ref } from 'vue'
import request from '../../utils/Request'

interface LineChartData {
  month: string
  total_views: string
}

const chartInstance = ref<echarts.ECharts | null>(null)
const lineChartData: Ref<LineChartData[]> = ref([])
const monthList: Ref<string[]> = ref([])
const totalViewsList: Ref<number[]> = ref([])

const requestLineChartData = async () => {
  try {
    const res = await request.get('/content/line-chart')
    lineChartData.value = res.data.data
    for (let i = 0; i < lineChartData.value.length; i++) {
      monthList.value.push(lineChartData.value[i]['month'])
      totalViewsList.value.push(Number(lineChartData.value[i]['total_views']))
    }

    const chartConfig = {
      xAxis: {
        type: 'category',
        data: monthList.value,
        name: 'Month'
      },
      yAxis: {
        name: 'Total Views'
      },
      series: [
        {
          name: 'Total Views',
          type: 'line',
          data: totalViewsList.value,
          showBackground: true,
          backgroundStyle: {
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
        }
      ]
    }
    if (chartInstance.value) {
      chartInstance.value.setOption(chartConfig)
    }
  } catch (e) {
    console.log(e)
  }
}

onMounted(() => {
  requestLineChartData()

  const chartElement = document.getElementById('main')
  if (chartElement) {
    chartInstance.value = echarts.init(chartElement)
  }
})
</script>
<template>
  <div class="md:w-full md:h-full md:flex md:justify-center md:items-center">
    <div
      id="main"
      style="
        width: 100%;
        height: 600px;
        margin-top: -3%;
        box-shadow: 3px 0px 15px rgba(0, 0, 0, 0.15);
      "
    ></div>
  </div>
</template>
<style lang="scss" scoped></style>
