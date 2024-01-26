<script setup lang='ts'>
import { ref, type Ref } from 'vue';

const isTableDetail: Ref<boolean> = ref(false);
const isReportDetail: Ref<boolean> = ref(false);
    const showTableDetail = (): void => {
  isTableDetail.value = true;
}

const showReportDetail = (): void => {
  isReportDetail.value = true;
}
</script>
<template>
    <!-- Sidebar -->
    <nav class="flex flex-col w-64 h-screen px-4 py-8 bg-gray-100 border-r">
        <ul class="flex flex-col space-y-4">
          <li><strong class="text-xl">Supermarket Sales CMS</strong></li>
          <li><a
              href="/"
              class="text-blue-500 hover:text-blue-600"
            >Home</a></li>
          <li class="relative">
            <a
              href="#"
              class="text-blue-500 hover:text-blue-600"
              @click='showTableDetail'
            >Data Table</a>
            <!-- Submenu -->
            <ul
              class="flex flex-col space-y-2 pl-4 mt-2 bg-gray-200 border-l-4 border-blue-500"
              v-if='isTableDetail'
            >
              <li><a
                  href="/data/supermarket"
                  class="text-blue-500 hover:text-blue-600"
                >Supermarket table</a></li>
              <li><a
                  href="/data/user"
                  class="text-blue-500 hover:text-blue-600"
                >User table</a></li>
            </ul>
          </li>
  
          <li class="relative">
            <a
              href="#"
              class="text-blue-500 hover:text-blue-600"
              @click='showReportDetail'
            >Report</a>
            <!-- Submenu -->
            <ul
              class="flex flex-col space-y-2 pl-4 mt-2 bg-gray-200 border-l-4 border-blue-500"
              v-if='isReportDetail'
            >
              <li><a
                  href="barChart"
                  class="text-blue-500 hover:text-blue-600"
                >Bar chart</a></li>
              <li><a
                  href="lineChart"
                  class="text-blue-500 hover:text-blue-600"
                >Line chart</a></li>
            </ul>
          </li>
  
        </ul>
      </nav>
</template>
<script scoped lang='scss'></script>