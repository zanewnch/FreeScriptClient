<!--suppress ALL -->
<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import { useSuperMarketSaleStore } from '../../stores/SupermarketSaleStore'
import { useUserStore } from '../../stores/UserStore'

const superMarketSaleStore = useSuperMarketSaleStore()

onMounted(() => {
  superMarketSaleStore.pageNum = 1
  superMarketSaleStore.pageSize = 10
  superMarketSaleStore.getByPage()
  superMarketSaleStore.getTotalDataAmount()
  superMarketSaleStore.getBranchList()
  superMarketSaleStore.getCityList()
  superMarketSaleStore.getCustomerTypeList()
})

const handleClick = () => {
  console.log('click')
}

const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
]
</script>

<template>
  <div class="md:w-full md:h-full md:flex md:flex-col md:justify-start md:items-center">
    <!-- el-from -->
    <div class="md:h-20 md:mt-4">
      <el-form
        :inline="true"
        size="default"
        label-position="top"
        class="demo-form-inline"
        style="text-align: center"
      >
        <el-form-item>
          <div class="">
            <p>Branch</p>
            <el-select v-model="superMarketSaleStore.branch" clearable placeholder="">
              <el-option
                v-for="(branch, index) in superMarketSaleStore.branchList?.data"
                :key="index"
                :label="branch.branch"
                :value="branch.branch"
              />
            </el-select>
          </div>
        </el-form-item>

        <el-form-item>
          <div>
            <p>City</p>
            <el-select v-model="superMarketSaleStore.city" clearable placeholder="">
              <el-option
                v-for="(city, index) in superMarketSaleStore.cityList?.data"
                :key="index"
                :label="city.city"
                :value="city.city"
              />
            </el-select>
          </div>
        </el-form-item>

        <el-form-item>
          <div>
            <p>Customer Type</p>
            <el-select v-model="superMarketSaleStore.customerType" clearable placeholder="">
              <el-option
                v-for="(customerType, index) in superMarketSaleStore.customerTypeList?.data"
                :key="index"
                :label="customerType.customer_type"
                :value="customerType.customer_type"
              />
            </el-select>
          </div>
        </el-form-item>

        <el-form-item>
          <div>
            <p>Date</p>
            <el-date-picker
              v-model="superMarketSaleStore.date"
              type="date"
              placeholder=""
              clearable
            />
          </div>
        </el-form-item>

        <el-form-item class="">
          <div class="md:w-full md:h-full md:flex md:justify-center md:items-end md:mt-6">
            <button
              @click="
                superMarketSaleStore.get({
                  branch: superMarketSaleStore.branch,
                  city: superMarketSaleStore.city,
                  customerType: superMarketSaleStore.customerType
                })
              "
              class="sm:text-blue-500 md:text-blue-500"
              style="border: 1px solid"
            >
              Search
            </button>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <!-- el-table -->
    <div class="md:overflow-auto md:w-4/5 md:flex md:mt-4">
      <el-table
        style="width: 100%"
        max-height="350"
        scrollbar-always-on:true
        :data="superMarketSaleStore.requestData?.data"
        class="table"
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
          color: '#000000',
          'text-align': 'center'
        }"
      >
        <el-table-column fixed prop="id" label="id" width="100" />

        <el-table-column prop="branch" label="branch" width="180" />

        <el-table-column prop="city" label="city" width="180" />

        <el-table-column prop="customer_type" label="customerType" width="180" />
        <el-table-column prop="gender" label="gender" width="180" />
        <el-table-column prop="product_line" label="productLine" width="180" />

        <el-table-column prop="unit_price" label="unitPrice" width="180" />

        <el-table-column prop="quantity" label="quantity" width="180" />

        <el-table-column prop="tax_5_percent" label="tax5Percent" width="180" />

        <el-table-column prop="total" label="total" width="180" />

        <el-table-column prop="date" label="date" width="250" />

        <el-table-column prop="time" label="time" width="180" />

        <el-table-column prop="payment" label="payment" width="180" />

        <el-table-column prop="cogs" label="cogs" width="180" />

        <el-table-column prop="gross_margin_percentage" label="grossMarginPercentage" width="180" />

        <el-table-column prop="rating" label="rating" width="180" />

        <el-table-column fixed="right" label="Operations" width="120">
          <template #default>
            <el-button link type="primary" size="small" @click="handleClick">Detail</el-button>
            <el-button link type="primary" size="small">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- el-pagination -->
    <div class="md:w-5/6 md:mt-4">
      <el-pagination
        v-model:current-page="superMarketSaleStore.pageNum"
        v-model:page-size="superMarketSaleStore.pageSize"
        :page-sizes="[5, 20, 30, 40]"
        :small="false"
        :disabled="false"
        :background="false"
        layout="total, sizes, prev, pager, next, -> , jumper"
        :total="superMarketSaleStore.totalDataAmount?.data"
        @current-change="superMarketSaleStore.getByPage()"
        @size-change="superMarketSaleStore.getByPage()"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@media (min-width: 768px) {
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
          :deep(.table) {
            width: 100%;
            height: 500px;
          }
        }
  
        .elColButtom {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  
}
</style>
