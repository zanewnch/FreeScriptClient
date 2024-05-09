<script setup lang="ts"></script>
<template>
  <div
    class="md:w-full md:flex md:justify-center md:h-20"
    style="border-bottom: 0.5px solid #e0e0e0"
  >
    <div class="md:w-full">
      <div class="md:w-full md:h-20">
        <nav class="md:p-4 md:w-full md:h-full">
          <div class="md:w-full md:mx-auto md:h-full">
            <div class="md:w-full md:flex md:justify-between md:items-center md:h-full">
              <!-- 左侧 Logo 或标题 -->
              <div
                class="website-title md:text-black md:text-2xl md:font-bold md:h-full md:flex md:justify-center md:items-center"
              >
                <router-link to="/" class="sm:text-blue-500 md:mb-2">Free Script</router-link>

                <slot name="search"></slot>
              </div>

              <!-- 右侧导航链接 -->
              <ul
                class="website-list md:space-x-4 md:h-full md:flex md:justify-center md:items-center md:p-0 md:m-0"
                style=""
              >
                <slot name="write"></slot>
                <slot name="administrator"></slot>

                <slot name="services"></slot>
                <slot name="setting"></slot>

                <slot name="login"></slot>
                <slot name="register"></slot>
                <slot name="publish"></slot>
                <slot name="logout"></slot>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@media (min-width: 768px) {
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

  .router-link-hover:hover {
    color: #3b82f6;
  }
}
</style>
