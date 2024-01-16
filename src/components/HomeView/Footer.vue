<script lang="ts" setup></script>

<template>
  <el-row class="footer">
    <el-col :span="12" class="leftText">
      <p class="text">Copyright © 2023 Zane Wang.</p>
    </el-col>
    <el-col :span="12" class="rightText">
      <p class="text">Contact Me</p>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">
.footer {
  background-color: #a6a9ad;
  width: 100%;
  height: 100%;

  box-shadow: 5px -10px 15px rgba(0, 0, 0, 0.15);
  // 向右偏移, 向下偏移, 陰影廣度, rgb, 透明度

  .leftText {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .rightText{
    display: flex;
    justify-content: center; /* 水平置中 */
    align-items: center; /* 垂直置中 */
  }


}
</style>
