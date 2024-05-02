<script setup lang='ts'>
// @ts-ignore
import { Edit } from '@element-plus/icons-vue'
</script>
<template>
    <li class="flex justify-center items-center">
        <el-icon>
          <Edit />
        </el-icon>
        <router-link to="/new-article" class="text-black hover:underline">Write</router-link>
      </li>
</template>
<style scoped lang='scss'>
</style>;