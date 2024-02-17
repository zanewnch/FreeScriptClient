<script setup lang="ts">
import type { Article } from '@/interface/ArticleInterface'
import request from '@/utils/Request'
import { ref, type Ref, onMounted } from 'vue'
import { Edit, Search } from '@element-plus/icons-vue'
import Nav from '@/components/HomeView/Nav.vue'
import { useRoute, type RouteLocationNormalizedLoaded } from 'vue-router'

const route: RouteLocationNormalizedLoaded = useRoute();
const articleAuthor: string | string[] = route.params.author;
const articleTitle: string | string[] = route.params.title;
const articleData: any = ref('a');
const avatarPath: string = `../../public/userAvatar/${articleAuthor}.png`;

const requestData = async () => {
  try {
    const res = await request.get(`/article/${articleAuthor}/${articleTitle}`)
    articleData.value = res.data.data
  } catch (e) {
    console.error(e)
  }
}

onMounted(async () => {
  console.log(articleData.value)
  await requestData()
  console.log(articleData.value[0]['content'])
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

  // worse case
  // res.data.data.forEach((item: Article) => {
  //   showData.value.push({
  //     value: item['title'],
  //     link: item['author']
  //   })
  // })

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
    <!-- NAV -->
    <div
      class="md:w-full md:flex md:justify-center md:h-20"
      style="border-bottom: 0.5px solid #e0e0e0;"
    >
      <div class="md:w-full">
        <Nav>
          <template #search>
            <div class="">
              <el-autocomplete
                v-model="searchText"
                :fetch-suggestions="querySearchAsync"
                placeholder=""
                clearable
                class="el-input_wrapper md:ml-4 md:w-80 md:rounded-md"
                @select="handleSelect"
              />
              <!-- <button class="border-2 md:w-12 md:ml-4 md:h-8 md:text-sm md:flex md:justify-center md:items-center">
                  <el-icon>
                    <Search />
                  </el-icon>
                  Search
                </button> -->

              <el-button
                type="primary"
                :icon="Search"
                class="search-button border-2 md:w-12 md:ml-4"
                plain
              ></el-button>
            </div>
          </template>
          <!-- write button -->
          <template #write>
            <li class="flex justify-center items-center">
              <el-icon>
                <Edit />
              </el-icon>
              <a
                href="#"
                class="text-black hover:underline"
              >Write</a>
            </li>
          </template>

          <!-- login button -->
          <template #about>
            <li><a
                href="login"
                class="text-black hover:underline"
              >login</a></li>
            <li></li>
          </template>

          <!-- services -->
          <template #services>
            <li>
              <!-- 下拉式菜单 -->
              <div class="relative group">
                <button
                  class="text-black hover:underline focus:outline-none"
                  @click="toggleServiceDropDown"
                >
                  Services
                </button>
                <ul
                  class="absolute mt-2 space-y-2 bg-white border border-gray-300 rounded-lg py-2"
                  v-if="isService"
                >
                  <li class="flex justify-center items-center">
                    <a
                      href="/data"
                      class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >Service 1</a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >Service 2</a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >Service 3</a>
                  </li>
                </ul>
              </div>
            </li>
          </template>

          <!-- contact button -->
          <template #contact>
            <li><a
                href="#"
                class="text-black hover:underline"
              >Contact</a></li>
          </template>
        </Nav>
      </div>
    </div>

    <!-- Main content -->
    <div class="md:w-full md:flex md:justify-center">
      <div class="md:w-2/5 md:flex md:flex-col">
        <div class="title">
          <div v-html="articleData[0]['title']"></div>
        </div>

        <div
          class="author md:flex md:justify-start md:items-center md:h-16"
          style="border-bottom: 0.5px solid #e0e0e0;"
        >
          <el-avatar :src="avatarPath" />
          <div v-html="articleData[0]['author']"></div>
        </div>
        <div class="content">
          <div v-html="articleData[0]['content']"></div>
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
}
</style>
