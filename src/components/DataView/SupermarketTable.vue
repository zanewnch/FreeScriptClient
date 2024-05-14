<script setup lang="ts">
import { onMounted, ref, type Ref, watch } from 'vue'
import request from '../../utils/Request'
import { da, pa } from 'element-plus/es/locale/index.mjs'

const pageNum: Ref<number> = ref(1)
const pageSize: Ref<number> = ref(10)
const likeAmount: Ref<number | null> = ref(null)
const startDateData: Ref<Date> = ref(new Date())
const endDateData: Ref<Date> = ref(new Date())
const viewsAmount: Ref<number | null> = ref(null)
const ArticleData = ref(null)

const likeList = [100, 1000, 5000]
const viewsList = [3000, 6000, 9000]

// function formatDate(date: Date): string {
//   const year = date.getFullYear()
//   const month = String(date.getMonth() + 1).padStart(2, '0') // Months are 0-based
//   const day = String(date.getDate()).padStart(2, '0')
//   const hours = String(date.getHours()).padStart(2, '0')
//   const minutes = String(date.getMinutes()).padStart(2, '0')
//   const seconds = String(date.getSeconds()).padStart(2, '0')

//   return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
// }

function formatDate(date: Date): Date {
  const year = date.getFullYear()
  const month = date.getMonth() // Months are 0-based
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return new Date(year, month, day, hours, minutes, seconds)
}

const defaultTime = new Date(2000, 1, 1, 0, 0, 0)

const filterViewsArticle = async () => {
  const res = await request.get('/content/filter-views', {
    params: {
      views: 5000,
      pageNum: pageNum.value,
      pageSize: pageSize.value
    }
  })
  console.log(res.data)
}

const filterLikeArticle = async () => {
  const res = await request.get('/content/filter-like', {
    params: {
      like: 5000,
      pageNum: pageNum.value,
      pageSize: pageSize.value
    }
  })
  console.log(res.data)
}

const requestTagsList = async () => {
  const res = await request.get('/content/tags-list')
  console.log(res.data)
}
const totalDataAmount = ref(null)
const requestTotalDataAmount = async () => {
  const res = await request.get('/content/total-amount')
  totalDataAmount.value = res.data.data
  console.log(res.data)
}

const requestArticleData = async () => {
  const res = await request.get('/content', {
    params: {
      pageNum: pageNum.value,
      pageSize: pageSize.value
    }
  })
  ArticleData.value = res.data.data
}

const handleClick = () => {
  console.log('click')
}

const isSameTime = (date1: Date, date2: Date) => {
  const diffInMilliseconds = Math.abs(date2.getTime() - date1.getTime())
  const diffInMinutes = diffInMilliseconds / (1000 * 60)

  if (diffInMinutes < 1) {
    return true
  } else {
    return false
  }
}

const requestSearch = async () => {
  try {
    pageNum.value = 1
    pageSize.value = 10

    if (isSameTime(startDateData.value, new Date() || isSameTime(endDateData.value, new Date()))) {
      const res = await request.get('/content/comprehensive-search', {
        params: {
          like: likeAmount.value,
          views: viewsAmount.value,

          pageNum: pageNum.value,
          pageSize: pageSize.value
        }
      })

      ArticleData.value = res.data.data
      console.log(res.data.data)
    } else {
      const res = await request.get('/content/comprehensive-search', {
        params: {
          like: likeAmount.value,
          views: viewsAmount.value,
          startDate: formatDate(startDateData.value),
          endDate: formatDate(endDateData.value),
          pageNum: pageNum.value,
          pageSize: pageSize.value
        }
      })
      ArticleData.value = res.data.data
      console.log(res.data.data)
    }

    
  } catch (e) {
    console.log(e)
  }
}

onMounted(() => {
  requestArticleData()
  requestTotalDataAmount()
})
</script>
<template>
  <div class="md:w-full md:h-full md:flex md:flex-col md:justify-start md:items-center">
    <!-- el-form -->
    <div class="md:h-20 md:mt-4">
      <el-form
        :inline="true"
        size="default"
        label-position="top"
        class="demo-form-inline"
        style="text-align: center"
      >
        <el-form-item>
          <div>
            <p>Like</p>
            <el-select v-model="likeAmount" clearable placeholder="">
              <el-option
                v-for="(item, index) in likeList"
                :key="index"
                :label="item"
                :value="item"
              />
            </el-select>
          </div>
        </el-form-item>

        <el-form-item>
          <div>
            <p>Views</p>
            <el-select v-model="viewsAmount" clearable placeholder="">
              <el-option
                v-for="(item, index) in viewsList"
                :key="index"
                :label="item"
                :value="item"
              />
            </el-select>
          </div>
        </el-form-item>

        <el-form-item>
          <div>
            <p>Start Month</p>
            <el-date-picker
              v-model="startDateData"
              type="month"
              placeholder="Pick a month"
              :default-value="defaultTime"
            />
          </div>
        </el-form-item>

        <el-form-item>
          <div>
            <p>End Month</p>
            <el-date-picker
              v-model="endDateData"
              type="month"
              placeholder="Pick a month"
              :default-value="defaultTime"
            />
          </div>
        </el-form-item>

        <el-form-item class="">
          <div class="md:w-full md:h-full md:flex md:justify-center md:items-end md:mt-8">
            <button
              @click.prevent="requestSearch()"
              class="sm:text-blue-500 md:text-blue-500 md:w-12 md:text-center"
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
        :data="ArticleData"
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
        <el-table-column prop="author" label="author" width="180" />
        <el-table-column prop="title" label="title" width="180" />
        <el-table-column prop="content" label="content" width="180" />
        <el-table-column prop="views" label="views" width="180" />
        <el-table-column prop="like" label="like" width="180" />
        <el-table-column prop="tags" label="tags" width="180" />

        <el-table-column prop="status" label="status" width="180" />
        <el-table-column prop="summary" label="summary" width="180" />
        <el-table-column prop="comments" label="comments" width="180" />
        <el-table-column prop="createdDate" label="createdDate" width="180" />
        <el-table-column prop="publishedDate" label="publishedDate" width="180" />
        <el-table-column prop="updatedDate" label="updatedDate" width="180" />

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
        v-model:current-page="pageNum"
        v-model:page-size="pageSize"
        :page-sizes="[5, 20, 30, 40]"
        :small="false"
        :disabled="false"
        :background="false"
        layout="total, sizes, prev, pager, next, -> , jumper"
        :total="totalDataAmount"
        @current-change="requestArticleData()"
        @size-change="requestArticleData()"
      />
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
