<script setup lang="ts">
import type { Article } from '@/interface/ArticleInterface'
import request from '@/utils/Request'
import { ref, type Ref, onMounted } from 'vue'
import { Edit, Search } from '@element-plus/icons-vue'
import HomeNav from '@/components/Nav/HomeNav.vue'
import { useRoute, type RouteLocationNormalizedLoaded } from 'vue-router'

const route: RouteLocationNormalizedLoaded = useRoute()
const articleAuthor: string | string[] = route.params.author
const articleTitle: string | string[] = route.params.title
const articleData: any = ref('a')
const avatarPath: string = `../../public/userAvatar/${articleAuthor}.png`
const commentData: Ref<any> = ref(null)

const requestData = async () => {
  try {
    const res = await request.get(`/article/${articleAuthor}/${articleTitle}`)
    articleData.value = res.data.data
    commentData.value = res.data.data[0]['comments']


  } catch (e) {
    console.error(e)
  }
}

onMounted(async () => {
  console.log(articleData.value)
  await requestData()
  console.log(articleData.value[0]['content'])
  console.log("comment")
  console.log(commentData.value)
})

// for user input data in search bar
const searchText: Ref<string> = ref('')

// the interface of data to show in search bar recommended list
interface searchRecommend {
  value: string
  link: string
}
// the array to store the data to show in search bar recommended list
const showData: Ref<searchRecommend[]> = ref([])

let timeout: ReturnType<typeof setTimeout>
const querySearchAsync = async (queryString: string, cb: (arg: any) => void) => {
  const res = await request.get('/search', {
    params: {
      keyword: queryString
    }
  })

  // better case
  showData.value = res.data.data.map((item: Article) => {
    return {
      value: item['title'],
      link: item['author']
    }
  })

  clearTimeout(timeout)
  timeout = setTimeout(() => {
    cb(showData.value)
  }, 3000 * Math.random())
}

const handleSelect = (item: searchRecommend) => {
  console.log(item)
  // window.open(item.link)
}

const isService = ref(false)
const toggleServiceDropDown = (event: MouseEvent) => {
  /*
    const changeService = ()=>{
    isService.value = true;
    // document.addEventListener('click',closeService,false);
  }  為什麼我沒加evenlistener 就可以正常操作  只要ㄧ加 eventListener 就會沒有反應
  ChatGPT
  如果在 changeService 函数中添加了 document.addEventListener，但是服务列表点击后没有响应，有可能是因为事件冒泡导致的。

  当你点击 "Services" 按钮时，首先会触发按钮自身的点击事件，然后事件会继续向上冒泡到 document 元素。如果在 changeService 函数中添加了 document.addEventListener，并在 closeService 函数中使用 document.removeEventListener，那么在点击 "Services" 按钮时，会先触发按钮的点击事件，然后立即触发 closeService 函数，将 isService 设置为 false，导致服务列表关闭。

  为了解决这个问题，你可以使用 event.stopPropagation() 方法来阻止事件冒泡，从而阻止事件传播到 document 元素。 */
  /*
    在你的代码中，使用 event.stopPropagation() 是为了防止在点击 "Services" 按钮时立即触发 document 上的点击事件监听器，从而确保点击按钮时只执行打开服务列表的逻辑，而不会立即关闭它。这样你可以点击按钮以外的地方来关闭服务列表。
   */
  event.stopPropagation()
  isService.value = !isService.value
  // listen whether has click event, if has, then invoke the corresponding function
  if (isService.value) {
    document.addEventListener('click', closeService, { once: true })
  } else {
    document.removeEventListener('click', closeService, false)
  }
}

const closeService = () => {
  isService.value = false
}
</script>
<template>
  <div class="xl:w-full md:h-screen">
    <HomeNav></HomeNav>

    <!-- Main content -->
    <div class="md:w-full md:flex md:flex-col md:justify-center md:items-center ">
      <!-- article content -->
      <div class="md:w-2/5 md:flex md:flex-col">
        <div class="title">
          <div v-html="articleData[0]['title']"></div>
        </div>

        <div
          class="author md:flex md:justify-start md:items-center md:h-16"
          style="border-bottom: 0.5px solid #e0e0e0"
        >
          <el-avatar :src="avatarPath" />
          <div v-html="articleData[0]['author']"></div>
        </div>
        <div
          class="content pb-4"
          style=''
        >
          <div v-html="articleData[0]['content']"></div>
        </div>
      </div>
      <div class="md:w-2/5 md:flex    md:flex-col   md:justify-center ">
        <!-- card content for comment-->
        <div
          class="card md:w-full md:h-44 md:flex md:flex-col md:justify-center md:overflow-hidden md:mt-6"
          style='border-bottom: #e0e0e0 0.5px solid;
          box-shadow:1px 1px 3px #e0e0e0;'
          v-for="(item, index) in commentData"
          :key="index"
        >
          <a
            href="/"
            class=' md:flex md:flex-col md:items-start 
            '
          >
            <div class="md:flex md:justify-start md:items-center  ">
              <!-- <el-avatar :src="`../../../userAvatar/${item['author']
                .replace(/<\/?p>/g, '')
                .trim()
                .toLowerCase()
                .replace(/\s+/g, '-')}.png`" /> -->
              <div v-html="item['username']"></div>
            </div>

            <div class="">
              <div v-html="item['content']"></div>
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
}</style>
