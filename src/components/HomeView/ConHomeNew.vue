<script setup lang='ts'></script>
<template>
    <el-row class='w-screen'>
        <el-col
          :span='16'
          class='h-screen w-full  flex flex-col justify-start items-start '
          style=''
        >
          <div class=' w-full  h-2/6 border-gray-500  border-solid border-r-2 '>
            <div class='states-bar flex justify-around items-center overflow-x-hidden whitespace-nowrap'>
                <button class="prev-button" onclick="scrollStatus(-1)">←</button>
                <div class="status-container flex justify-around items-center gap-4">
                    <div class="status">状态 1</div>
                    <div class="status">状态 2</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    <div class="status">状态 3</div>
                    
                  </div>
                <button class="next-button" onclick="scrollStatus(1)">→</button>
            </div>
            <div>content</div>
          </div>
          <div class='   w-full h-4/6 border-gray-500  border-solid border-r-2'>bbb</div>
          
        </el-col>
        <el-col :span='8' class=''>ccc</el-col>
      </el-row>
</template>
<style scoped lang='scss'></style>