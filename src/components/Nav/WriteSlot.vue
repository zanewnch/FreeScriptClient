<script setup lang='ts'>

import { Edit } from '@element-plus/icons-vue'
</script>
<template>
    <li class="md:flex md:justify-center md:items-center">
        <el-icon>
          <Edit />
        </el-icon>
        <router-link to="/new-article" class="router-link-hover text-black hover:underline">Write</router-link>
      </li>
</template>
<style scoped lang='scss'>
.router-link-hover:hover {
  color: #60a5fa;
}
</style>