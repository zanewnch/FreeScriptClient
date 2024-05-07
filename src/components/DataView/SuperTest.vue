<script setup lang="ts">
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
  <div class="bg-green-400 md:w-full md:h-full">
    <div class="md:h-20 bg-blue-300 md:mt-4">
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

        <el-form-item style="display: flex; justify-content: center; align-items: center">
          <el-button
            type="info"
            @click="
              superMarketSaleStore.get({
                branch: superMarketSaleStore.branch,
                city: superMarketSaleStore.city,
                customerType: superMarketSaleStore.customerType
              })
            "
            >Search</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table
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
        <el-table-column fixed prop="id" label="id" width="180" />

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

        <el-table-column prop="gross_income" label="grossIncome" width="180" />

        <el-table-column prop="rating" label="rating" width="180" />

        <el-table-column fixed="right" label="Operations" width="120">
          <template #default>
            <el-button link type="primary" size="small" @click="handleClick">Detail</el-button>
            <el-button link type="primary" size="small">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
