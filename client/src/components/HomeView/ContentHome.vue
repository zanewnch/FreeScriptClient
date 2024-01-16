<script lang="ts" setup>
import { ref } from 'vue';
const count = ref(0);
const load = () => {
  count.value += 2
};
</script>

<template>
  <div class="container">
    <el-row>
      <el-col :span='24'>
        
        <div
          style='width: 100%;background-color:#E0E0E0;height:250px;box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.15);display:flex;justify-content:space-around;align-items:center;'
        >
          <span style='font-weight:bolder;font-size:60px'>Management
            <br>
            System
          </span>


          
        </div>

      </el-col>
    </el-row>
    <el-row class='elRow'>
      <el-col
        :span="24"
        class="elCol"
      >
        <div class='contentRight'>

          <div class='contentRightMain'>
            <span class='contentLeftHeader'>Function List</span>
          </div>

          <div
            class='contentRightMain'
            style='border-bottom: 0.1px solid #666;'
          >

            <router-link
              to="/data/supermarket"
              class='routerLink'
            >
              <div class='contentItem'>
                <el-image
                  src="../../../data.png"
                  fit="fill"
                  class='contentImage'
                />
                <span>Data table</span>
              </div>
            </router-link>


            <router-link
              to="/data/user"
              class='routerLink'
            >

              <div class='contentItem'>
                <el-image
                  src="../../../report.png"
                  fit="fill"
                  class='contentImage'
                />
                <span>Report</span>


              </div>
            </router-link>

          </div>
          <div class='contentRightMain'>

          </div>
          <div class='contentRightMain'></div>

        </div>

      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 700px;
  width: 100%;

  .elRow {
    height: 100%;


    .elCol {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 100%;

      .contentRight {

        height: 300px;
        width: 20%;

        display: flex;
        flex-direction: column;
        align-items: center;

        margin-bottom: 15%;

        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
        /* 水平偏移，垂直偏移，模糊度，阴影颜色 */

        .contentRightMain {
          height: 25%;
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;



          .contentItem {
            display: flex;
            flex-direction: column;
            align-items: center;


            height: 70px;
            width: 70px;


            .contentImage {
              width: 50px;
              height: 50px;
            }

            span {
              width: 100%;
              text-align: center;

            }
          }


        }
      }
    }
  }



  .routerLink {
    text-decoration: none; // 去除下滑線
    color: inherit; // 繼承parent tag color
  }

  .routerLink:hover {
    color: #55a6fe;
    cursor: pointer;
  }

  
}
</style>
