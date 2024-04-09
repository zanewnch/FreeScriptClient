<script setup lang='ts'>

</script>
<template>
  <div
      class="md:w-full md:flex md:justify-center md:h-20"
      style="border-bottom: 0.5px solid #e0e0e0"
    >
  <div class="md:w-full">
  <div class='w-full h-20 '>
    <nav class=" p-4 w-full h-full ">
      <div class="md:w-full mx-auto h-full ">
        <div class="md:w-full flex justify-between items-center h-full ">
          <!-- 左侧 Logo 或标题 -->
          <div class="website-title text-black text-2xl font-bold h-full  flex justify-center items-center ">
            <router-link
              to='/'
              class='sm:text-blue-500 md:mb-2'
            >Free Script</router-link>

            <slot name='search'></slot>
          </div>

          <!-- 右侧导航链接 -->
          <ul
            class="website-list space-x-4 h-full flex justify-center items-center p-0 m-0"
            style=''
          >
            <slot name='write'></slot>
            
            <slot name='services'></slot>
            <slot name='setting'></slot>

            <slot name='login'></slot>
            <slot name='publish'></slot>








          </ul>
        </div>
      </div>
    </nav>

  </div>
</div>
</div>
</template>
<style scoped lang='scss'>
@media(min-width:768px) {
  .website-title {
    margin-left: 10px;
  }

  .website-list {
    margin-right: 10px;
  }

  .search {
    margin-left: 20px;

    .search-button {
      margin-left: 10px;
    }
  }
}
</style>