<script setup lang="ts">
import request from '@/utils/Request'
import { ref, onMounted, type Ref } from 'vue'
import { urlFriendly } from '@/utils/UrlFriendly'

const articles: Ref<any> = ref(null)
const tags: Ref<any> = ref(null)

// !有一些part太麻煩 就沒寫 用isFinish 先隱藏
const isFinish = ref(false)

const requestStaffPicks = async () => {
  try {
    const res = await request.get('/article/staff-picks')

    articles.value = res.data.data
  } catch (e) {
    console.log(e)
  }
}
const requestTags = async () => {
  try {
    const res = await request.get('/article/tags')
    tags.value = res.data.data
    console.log(tags.value)
  } catch (e) {
    console.log(e)
  }
}

onMounted(() => {
  requestStaffPicks()
  requestTags()
})



const writerList: {
  name: string
  description: string
}[] = [
  {
    name: 'John Doe',
    description: 'Software Developer, JavaScript, React, Vue'
  },
  {
    name: 'Jane Smith',
    description: 'Data Analyst, Statistics, Data Visualization'
  },
  {
    name: 'Bob Johnson',
    description: 'Project Manager, Team Coordination, Product Development'
  },
  {
    name: 'Alice Williams',
    description: 'UX Designer, User Interfaces, User Experience'
  },
  {
    name: 'Charlie Brown',
    description: 'Digital Marketer, SEO, Content Marketing'
  },
  {
    name: 'David Davis',
    description: 'Full-Stack Developer, JavaScript, Python'
  },
  {
    name: 'Eva Green',
    description: 'Product Manager, Software Development'
  },
  {
    name: 'Frank Miller',
    description: 'Data Scientist, Data Analysis, Large Datasets'
  }
]
</script>

<template>
  <section class="section md:w-4/5 md: md:flex md:flex-col md:justify-center items-center md:h-80">
    <div class="highlight-top md:w-full md:h-8 md:flex md:justify-center">
      <p
        class="highlight-top-content md:text-start md:text-lg md:text-wrap md:text-black md:text md:font-bold"
        style="color: #0080ff"
      >
        Staff Picks
      </p>
    </div>
    <div v-for="(item, index) in articles" :key="index" class="card-container md:h-24">
      <router-link :to="urlFriendly(item['author'] || '', item['title'] || '')">
        <div class="md:flex md:justify-start md:items-center">
          <el-avatar
            :src="`../../../userAvatar/${item['author']
              .replace(/<\/?p>/g, '')
              .trim()
              .toLowerCase()
              .replace(/\s+/g, '-')}.png`"
            class="md:w-4 md:h-4"
          />
          <p class="cart-title md:text-start md:ml-1">{{ item['author'] }}</p>
        </div>
        <p class="card-content md:text-start">{{ item['title'] }}</p>
      </router-link>
    </div>

    <div class="md:w-full md:flex md:justify-center md:items-center">
      <router-link
        to="/data"
        class="full-content md:text-start md:font-bold hover:md:text-blue-500 md:mt-24"
        >See the full list</router-link
      >
    </div>
  </section>

  <section class="section md:w-4/5 md: md:flex md:flex-col md:justify-start items-center">
    <div class="p-5 flex flex-col space-y-4 md:w-4/5">
      <div class="flex flex-col space-y-2">
        <div style="font-weight: bolder">TAGS</div>
        <div class="flex justify-center space-x-4 flex-wrap">
          <router-link 
            :to="'/article/specific-tags/'+item['_id']"
            style="padding-top: 0.1em; padding-bottom: 0.1rem"
            class="text-xs px-3 bg-gray-200 text-gray-800 rounded-full md:text-wrap md:text-center md:mt-2"
            v-for="(item, index) in tags"
            :key="index"
          >
            {{ item['_id'] }}
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <section
    class="section md:w-4/5 md:h-auto md: md:flex md:flex-col md:justify-center items-center"
    v-if="isFinish"
  >
    <div class="highlight-top md:w-full md:h-8 md:flex md:justify-center">
      <p
        class="highlight-top-content md:text-start md:text-lg md:text-wrap md:text-black md:text md:font-bold"
        style="color: #0080ff"
      >
        Who To Follow
      </p>
    </div>
    <div v-for="(item, index) in writerList" :key="index" class="card-container">
      <div class="md:flex md:justify-start md:items-center">
        <el-icon class="icon">
          <User />
        </el-icon>
        <p class="cart-title md:text-start">{{ item['name'] }}</p>
      </div>
      <p class="cart-title md:text-start">{{ item['description'] }}</p>
    </div>
    <div class="md:w-full md:flex md:justify-center md:items-center">
      <a href="/data" class="full-content md:text-start md:font-bold hover:md:text-blue-500"
        >See the full list</a
      >
    </div>
  </section>

  <section
    class="section md:w-4/5 md: md:flex md:flex-col md:justify-center items-center md:h-80"
    v-if="isFinish"
  >
    <div class="highlight-top md:w-full md:h-8 md:flex md:justify-center">
      <p
        class="highlight-top-content md:text-start md:text-lg md:text-wrap md:text-black md:text md:font-bold"
      >
        Recent Save
      </p>
    </div>
    <div v-for="(item, index) in articles" :key="index" class="card-container">
      <div class="md:flex md:justify-start md:items-center">
        <el-icon class="icon">
          <User />
        </el-icon>
        <p class="cart-title md:text-start">{{ item['name'] }}</p>
      </div>
      <p class="card-content md:text-start">{{ item['articleTitle'] }}</p>
    </div>
    <div class="md:w-full md:flex md:justify-center md:items-center">
      <a href="/data" class="full-content md:text-start md:font-bold hover:md:text-blue-500"
        >See the full list</a
      >
    </div>
  </section>
</template>
<style lang="scss" scoped>
@media (min-width: 768px) {
  .section {
    margin-top: 50px;
  }

  .highlight-top {
    .highlight-top-content {
      width: 80%;
    }
  }

  .card-container {
    margin-top: 10px;
    width: 80%;
  }

  .card-content {
    margin-top: 5px;
  }

  .full-content {
    width: 80%;
    margin-top: 10px;
  }

  .icon {
    margin-right: 5px;
  }

  p {
    //overflow: hidden;
    //white-space: nowrap;

    text-overflow: ellipsis;
    font-weight: bolder;
  }
}
</style>
