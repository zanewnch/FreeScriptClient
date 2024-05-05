<script setup lang="ts">
import type { Article } from '../interface/ArticleInterface'
import request from '../utils/Request'
import { ref, type Ref, onMounted } from 'vue'
// @ts-ignore
import { Edit, Search } from '@element-plus/icons-vue'
import HomeNav from '../components/Nav/HomeNav.vue'
import { useRoute, type RouteLocationNormalizedLoaded } from 'vue-router'
import { useGlobalStore } from '../stores/GlobalStore'
import type { AxiosResponse } from 'node_modules/axios/index.cjs'
import { Result } from '../utils/Result'
import type { Comment } from '../interface/CommentInterface'

const globalStore = useGlobalStore()

const route: RouteLocationNormalizedLoaded = useRoute()
const articleAuthor: string | string[] = route.params.author
const articleTitle: string | string[] = route.params.title
const articleData: Ref<Article[] | null> = ref(null)
const avatarPath: string = `../../public/userAvatar/${articleAuthor}.png`
const commentData: Ref<Comment[] | null> = ref(null)

const requestData = async () => {
  try {
    const res: AxiosResponse<Result<Article[]>> = await request.get(
      `/article/${articleAuthor}/${articleTitle}`
    )
    if (res.data && res.data.data && res.data.data[0] && res.data.data[0]['comments']) {
      articleData.value = res.data.data
      commentData.value = res.data.data[0]['comments']
    }
  } catch (e) {
    console.error(e)
  }
}

onMounted(async () => {
  await requestData()
})

// for user input data in search bar
const searchText: Ref<string> = ref('')

// the interface of data to show in search bar recommended list
interface searchRecommend {
  value: string | undefined
  link: string | undefined
}
// the array to store the data to show in search bar recommended list
const showData: Ref<searchRecommend[] | null> = ref(null)

let timeout: ReturnType<typeof setTimeout>
const querySearchAsync = async (queryString: string, cb: (arg: any) => void): Promise<void> => {
  try {
    const res: AxiosResponse<Result<Article[]>> = await request.get('/article/search', {
      params: {
        keyword: queryString
      }
    })

    // better case
    if (res.data && res.data.data) {
      showData.value = res.data.data.map((item: Article) => {
        return {
          value: item['title'],
          link: item['author']
        }
      })
    }

    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb(showData.value)
    }, 3000 * Math.random())
  } catch (e) {
    console.error(e);    
  }
}
</script>
<template>
  <div class="xl:w-full md:h-screen">
    <HomeNav></HomeNav>

    <!-- Main content -->
    <div class="md:w-full md:flex md:flex-col md:justify-center md:items-center">
      <!-- article content -->
      <div class="md:w-2/5 md:flex md:flex-col">
        <div class="title">
          <div v-if="articleData" v-html="articleData[0]['title']"></div>
        </div>

        <div
          class="author md:flex md:justify-start md:items-center md:h-16"
          style="border-bottom: 0.5px solid #e0e0e0"
        >
          <el-avatar :src="avatarPath" />
          <div v-if="articleData" v-html="articleData[0]['author']"></div>
        </div>
        <div class="content pb-4" style="">
          <div v-if="articleData" v-html="articleData[0]['content']"></div>
        </div>
      </div>
      <div class="md:w-2/5 md:flex md:flex-col md:justify-center">
        <!-- card content for comment-->
        <div
          class="card md:w-full md:h-44 md:flex md:flex-col md:justify-center md:overflow-hidden md:mt-6"
          style="border-bottom: #e0e0e0 0.5px solid; box-shadow: 1px 1px 3px #e0e0e0"
          v-for="(item, index) in commentData"
          :key="index"
        >
          <a href="/" class="md:flex md:flex-col md:items-start md:h-full md:w-full">
            <div class="comment-username md:flex md:justify-start md:items-center md:mt-6">
              <!-- <el-avatar :src="`../../../userAvatar/${item['author']
                .replace(/<\/?p>/g, '')
                .trim()
                .toLowerCase()
                .replace(/\s+/g, '-')}.png`" /> -->
              <p v-html="item['username']"></p>
            </div>

            <div class="comment-content md:mt-4">
              <p v-html="item['content']"></p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@media (min-width: 768px) {
  .title {
    margin-top: 2rem;

    p {
      text-align: left;

      white-space: normal;
      word-break: break-word;
      text-wrap: normal;

      font-size: 32px;
      font-weight: bolder;
    }

    div {
      text-align: left;

      white-space: normal;
      word-break: break-word;
      text-wrap: normal;

      font-size: 32px;
      font-weight: bolder;
    }
  }

  .author {
    p {
      text-align: center;
    }

    div {
      text-align: center;
      margin-left: 1rem;
    }
  }

  .content {
    margin-top: 2rem;

    p {
      text-align: left;

      white-space: normal;
      word-break: break-word;
      text-wrap: normal;
    }

    div {
      text-align: left;

      white-space: normal;
      word-break: break-word;
      text-wrap: normal;
    }
  }

  .comment-username {
    p {
      font-size: 16px;
      font-weight: bolder;
      text-align: left;
    }
  }

  .comment-content {
    p {
      text-align: left;
    }
  }
}
</style>
