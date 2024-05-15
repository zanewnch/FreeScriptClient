<script setup lang="ts">
import * as echarts from 'echarts'
import { ref, onMounted, watchEffect, watch, type Ref } from 'vue'
import request from '../../utils/Request'

interface BarChartData {
  tag: string
  total_likes: number
}

const chartInstance = ref<echarts.ECharts | null>(null)
const barChartData: Ref<BarChartData[]> = ref([])
const tagList: Ref<string[]> = ref([])
const totalLikesList: Ref<number[]> = ref([])

const requestBarChartData = async () => {
  const res = await request.get('/content/bar-chart')
  barChartData.value = res.data.data

  for (let i = 0; i < barChartData.value.length; i++) {
    tagList.value.push(barChartData.value[i]['tag'])
    totalLikesList.value.push(Number(barChartData.value[i]['total_likes']))
  }

  const chartConfig = {
    xAxis: { type: 'category', data: tagList.value, name: 'Tag' },
    yAxis: { name: 'Total Likes' },
    series: [
      {
        name: 'Total Likes',
        type: 'bar',
        data: totalLikesList.value,
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
}

onMounted(() => {
  requestBarChartData()

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
