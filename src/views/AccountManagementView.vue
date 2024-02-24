<script setup lang="ts">
import request from '@/utils/Request'
import { onMounted, ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'
import HomeNav from '@/components/Nav/HomeNav.vue'
import { Edit, Search } from '@element-plus/icons-vue'
import type { Article } from '@/interface/ArticleInterface'

const username = ref('')
const password = ref('')

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

const handleSearchButton = async () => {
  try {
    if (windowWidth > 768) {
      const res = await request.get('/search', {
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
interface searchRecommend {
  value: string
  link: string
}
const showData: Ref<searchRecommend[]> = ref([])
let timeout: ReturnType<typeof setTimeout>
const data = ref(null)
const searchText: Ref<string> = ref('')
const windowWidth = window.innerWidth
const isMobile = ref(windowWidth < 768)
const router = useRouter()
const handleSelect = (item: searchRecommend) => {
  console.log(item)
  // window.open(item.link)
}

const updateData = async () => {
  try {
    const res = await request.post('/account-management', {
      username: username.value,
      password: password.value
    })
  } catch (e) {
    console.log(e)
  }
}
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
const isService = ref(false)
const getData = async () => {
  try {
    const res = await request.get('/account-management')

    data.value = res.data
  } catch (e) {
    console.log(e)
  }
}

onMounted(async () => {
  await getData()
})
</script>
<template>
  <!-- md view -->
  <div
    v-html="data"
    v-if="!isMobile"
  ></div>

  <!-- sm view -->
  <div
    class="xl:w-full md:h-screen"
    v-if="isMobile"
  >
    <!-- NAV -->
    <!-- <div
      class="md:w-full md:flex md:justify-center md:h-20"
      style="border-bottom: 0.5px solid #e0e0e0"
    > -->
      <!-- <div class="md:w-full">
        <Nav>
          <template #search>
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
          </template> -->
          <!-- write button -->
          <!-- <template #write>
            <li class="flex justify-center items-center">
              <el-icon>
                <Edit />
              </el-icon>
              <a
                href="/new-article"
                class="text-black hover:underline"
              >Write</a>
            </li>
          </template> -->

          <!-- login button -->
          <!-- <template #about>
            <li><a
                href="login"
                class="text-black hover:underline"
              >login</a></li>
            <li></li>
          </template> -->

          <!-- services -->
          <!-- <template #services>
            <li> -->
              <!-- 下拉式菜单 -->
              <!-- <div class="relative group">
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
            </li> -->
          <!-- </template> -->

          <!-- contact button -->
          <!-- <template #setting>
            <li><a
                href="/account-management"
                class="text-black hover:underline"
              >Setting</a></li>
          </template>
        </Nav> -->
      <!-- </div> -->
    <!-- </div> -->
    <HomeNav></HomeNav>

    <!-- main content -->
    <div class=" sm:flex sm:justify-center sm:items-center sm:h-screen">
      <div class=" sm:w-3/5 sm:h-4/5 sm:flex sm:justify-center sm:items-start ">
        <ul class="sm:flex sm:flex-col sm:justify-start sm:items-start sm:mt-12">
          <li>
            <p>Username:</p>
          </li>
          <li>
            <input
              type="text"
              class="sm:focus:outline-none"
              v-model="username"
            />
          </li>
          <li>
            <p>password:</p>
          </li>
          <li>
            <input
              type="password"
              class="sm:focus:outline-none"
              v-model="password"
            />
          </li>
          <li class='sm:flex sm:justify-center  sm:w-full sm:items-center'>
            <button @click="updateData">submit</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
