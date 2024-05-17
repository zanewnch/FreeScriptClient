<!--suppress ALL -->
<script lang="ts" setup>
import { onMounted, ref } from 'vue'

// @ts-ignore
import { useUserStore } from '../stores/UserStore.ts'

import { reactive } from 'vue'

const userStore = useUserStore()

const formInline = reactive({
  user: '',
  region: '',
  date: ''
})

const handleClick = () => {
  console.log('click')
}

onMounted(() => {
  userStore.pageNum = 1
  userStore.pageSize = 10
  userStore.getByPage()
  userStore.getUserStatusList()
  userStore.getTotalDataAmount()

  console.log(userStore.requestData?.data.mapperReturnValue)
})
</script>

<template>
  <div class="container">
    <div class="content">
      <el-row class="elRowUp">
        <el-col
          :span="24"
          style="display: flex; justify-content: center; align-items: center"
          class="elColUp"
        >
          <el-form
            :inline="true"
            size="default"
            label-position="top"
            class="demo-form-inline"
            style="text-align: center"
          >
            <el-form-item>
              <div>
                <p>Username</p>
                <el-input v-model="userStore.username" placeholder="" clearable />
              </div>
            </el-form-item>

            <el-form-item>
              <div>
                <p>User status</p>
                <el-select v-model="userStore.userStatus" placeholder="" clearable>
                  <el-option
                    v-for="(status, index) in userStore.userStatusForList?.data"
                    :key="index"
                    :label="status.user_status"
                    :value="status.user_status"
                  />
                </el-select>
              </div>
            </el-form-item>

            <el-form-item>
              <div>
                <p>Activity time</p>
                <el-date-picker
                  v-model="formInline.date"
                  type="date"
                  placeholder="Pick a date"
                  clearable
                />
              </div>
            </el-form-item>

            <el-form-item>
              <el-button
                type="info"
                @click="
                  userStore.get({ username: userStore.username, userStatus: userStore.userStatus })
                "
                >Search</el-button
              >
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>

      <el-row class="elRowDown">
        <el-col :span="24" class="elColDown">
          <el-table
            :data="userStore.requestData?.data"
            :header-cell-style="{
              'background-color': '#6C6C6C',
              color: '#fff',
              'font-size': '16px',
              'font-weight': 'bold',
              'text-align': 'center'
            }"
            :cell-style="{
              'font-size': '16px',
              'font-weight': 'bold',
              color: '#00000',
              'text-align': 'center'
            }"
            class="table"
          >
            <el-table-column fixed prop="id" label="id" width="180" />

            <el-table-column prop="username" label="username" width="250" />

            <el-table-column prop="registration_date" label="last_login_date" width="250" />

            <el-table-column prop="user_status" label="user_status" width="250" />

            <el-table-column fixed="right" label="Operations" width="250">
              <template #default>
                <el-button link type="primary" size="small" @click="handleClick">Detail</el-button>
                <el-button link type="primary" size="small">Edit</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>

        <el-col :span="24" class="elColButtom">
          <el-pagination
            v-model:current-page="userStore.pageNum"
            v-model:page-size="userStore.pageSize"
            :page-sizes="[5, 20, 30, 40]"
            :small="false"
            :disabled="false"
            :background="false"
            layout="total, sizes, prev, pager, next, -> , jumper"
            :total="userStore.totalDataAmount?.data"
            @current-change="userStore.getByPage()"
            @size-change="userStore.getByPage()"
            class="pagination"
          />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  .content {
    width: 95%;
    height: 90%;

    border: solid 1px;
    border-color: rgba(0, 0, 0, 0);
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
    /* 設置陰影，偏移（X和Y軸偏移）、模糊度和顏色 */
    border-radius: 10px;
    margin: 50px;

    .elRowUp {
      padding-top: 5vh;

      .elColUp {
        display: flex;
        align-items: center;
        justify-content: left;

        .column {
          display: flex;
          align-items: center;
          margin-right: 70px;

          .searchTitle {
            margin-right: 5px;
          }

          .card {
            width: 150px;

            .input {
              color: red;
            }
          }
        }
      }
    }

    .elRowDown {
      padding-top: 5vh;

      .elColDown {
        width: 100%;
        height: 100%;

        :deep(.table) {
          width: 100%;
          height: 100%;
          // display: flex;
          // justify-content: space-around;
        }
      }

      .elColButtom {
        display: flex;
        justify-content: center;
        align-items: center;

        .pagination {
        }
      }
    }
  }
}

:deep(.demo-form-inline) {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
