<script lang="ts" setup>


const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

/*
el-menu:
open	展开指定的 sub-menu	index: 需要打开的 sub-menu 的 index
close	收起指定的 sub-menu	index: 需要收起的 sub-menu 的 index
 */
</script>

<template>
  <el-row class="elRow">
    <el-col
      :span="24"
      class="elCol"
    >
      <el-menu
        active-text-color="#66B3FF"
        background-color="#6C6C6C"
        class="el-menu-vertical-demo"
        default-active="1"
        router=true
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >

      <el-menu-item index="/">
        <el-icon><icon-menu /></el-icon>
        <span class='navigationText highlight'>
          Home
        </span>
      </el-menu-item>

        <el-sub-menu>
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span class='navigationText highlight' >
              Table Chart</span>
          </template>

          <el-menu-item index="supermarket" class='highlight'>
            Supermarket sale table
          </el-menu-item>
          <el-menu-item index="user" class='highlight'>
            User table
          </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span class='navigationText highlight' >
              Report</span>
          </template>

          <el-menu-item index="barChart" class='highlight'>
            Bar chart
          </el-menu-item>
          <el-menu-item index="lineChart" class='highlight'>
            Line chart
          </el-menu-item>
        </el-sub-menu>

        <el-menu-item index="bulletin">
          <el-icon>
            <icon-menu />
          </el-icon>
          <span class='navigationText'>Bulletin</span>
        </el-menu-item>

        




      </el-menu>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
.elRow {
  height: 100%;

  .elCol {
    height: 100vh;



    .el-menu-vertical-demo {
      height: 100vh;

      //display: flex;
      //flex-direction: column;
      //justify-content: space-around;

      :deep(.el-menu-item-group) {}



    }
  }
}

.navigationText {
  //margin-left: 10px;
  font-size: 16px;
}

:deep(.routerLink) {
  // text-decoration: none;
  /* 去除底線 */
  //color: #333; /* 自定義文字顏色 */
  // color: #FFFFFF;
  //background-color: red;
}

:deep(.el-menu-vertical-demo) {
  --text-color: #2e1010;
  --bg-color: #2e1010;
}

.highlight:hover{
  color: #55a6fe;
  cursor: pointer;
}
</style>