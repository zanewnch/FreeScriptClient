<script lang="ts" setup>
import { ref, onMounted, type Ref } from 'vue'
import request from '@/utils/Request'
import type { SearchRecommend } from '@/interface/SearchRecommendInterface'
import { Search } from '@element-plus/icons-vue'
import type { Article } from '@/interface/ArticleInterface';

const searchText: Ref<string> = ref('');

const windowWidth:Ref<number> = ref(window.innerWidth);
let timeout: ReturnType<typeof setTimeout>
// the array to store the data to show in search bar recommended list
const showData: Ref<SearchRecommend[]> = ref([]);

const querySearchAsync = async (queryString: string, cb: (arg: any) => void) => {
  const res = await request.get('/article/search', {
    params: {
      keyword: queryString
    }
  });

  showData.value = res.data.data.map((item: Article) => {
    return {
      value: item['title'],
      link: item['author']
    }
  });

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    cb(showData.value)
  }, 3000 * Math.random())
}

// the function that handle the select event in search bar
const handleSelect = (item: SearchRecommend) => {
  console.log(item)
  // window.open(item.link)
}

const handleSearchButton = async () => {
  try {
    if (windowWidth.value > 768) {
      const res = await request.get('/article/search', {
        params: {
          keyword: searchText.value
        }
      })
    } else {
      console.log('hello world')
    }
  } catch (e) {
    console.error(e)
  }
}
</script>
<template>
  <div class="md:w-96 md:flex md:justify-center md:items-center">
    <el-autocomplete
      v-model="searchText"
      :fetch-suggestions="querySearchAsync"
      placeholder=""
      clearable
      class="el-input_wrapper md:ml-4 md:w-64 md:h-12 md:mt-2 md:rounded-md sm:hidden md:block"
      @select="handleSelect"
    />

    <el-button
      type="primary"
      :icon="Search"
      class="search-button border-2 md:w-12 md:ml-4 md:h-8 sm:ml-2"
      plain
      @click="handleSearchButton"
    ></el-button>
  </div>
</template>
<style scoped lang="scss"></style>
