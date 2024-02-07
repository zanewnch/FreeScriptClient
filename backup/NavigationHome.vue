
<script lang="ts" setup>

import { useUserStore } from '../../stores/UserStore';
import { useLoginStore } from '../../stores/LoginStore';
import { ElMessageBox } from 'element-plus'

const userStore = useUserStore();
const loginStore = useLoginStore();


const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}

/*
  el-menu:
  :default-active="activeIndex"：这个属性用于设置默认选中的菜单项。您需要将一个在菜单项中定义的 name 属性的值赋给 activeIndex，以确保页面加载时显示特定的菜单项为选中状态。

  class="el-menu-demo"：这是为 el-menu 组件添加的自定义 CSS 类，它可以用来对菜单进行样式定制。在您的 CSS 文件中，您可以使用 .el-menu-demo 类选择器来定义特定的样式规则。

  mode="horizontal"：mode 属性用于设置菜单的显示模式。在这里，它被设置为 "horizontal"，表示菜单将以水平方式显示，通常用于顶部导航栏。

  :ellipsis="false"：这个属性用于控制菜单项文本是否截断显示。如果设置为 false，则文本不会截断，而是显示完整的文本。如果设置为 true，则文本可能会被截断以适应菜单项的宽度。

  @select="handleSelect"：这是一个事件监听器，用于捕获菜单项被选中的事件。当用户选择菜单项时，会触发 select 事件，然后调用 handleSelect 方法来处理所选的菜单项。
  */
</script>

<template>
  <div class="container">
    

    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      router
      background-color='#E0E0E0'
    >
      <el-menu-item index="/">
        <img
          src="../../../public/crisis-management.png"
          alt="Management logo"
          class="logo"
        />
      </el-menu-item>

      <el-menu-item
        index="/"
        style='padding-left: 30px;'
      >
        <p style='font-weight: bolder;font-size:20px;color:#213d5b'>Management System</p>
      </el-menu-item>

      <div class="flex-grow" />

      <el-menu-item
        index="login"
        style="margin-right: 10px"
      >
        <p
          style='font-size: 20px;color:#213d5b'
          v-if='!userStore.isLogin'
        >Sign in</p>
      </el-menu-item>


      <!-- TODO: make dialog show on center -->
      <el-dialog
      v-model="userStore.showSignOutAlarm"
      title="Tips"
      width="30%"
      :before-close="handleClose"
      :center="true"
      
    >
      <span>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="userStore.showSignOutAlarm = false">Cancel</el-button>
          <el-button
            type="primary"
            @click="userStore.showSignOutAlarm = false"
          >
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>

      <el-sub-menu index="2">
        <template #title>
          <span style='font-size: 20px;color:#213d5b'>Setting</span>
        </template>
        <el-menu-item index="2-1">item one</el-menu-item>

        <el-menu-item index="2-2">item two</el-menu-item>

        <el-menu-item>
          <el-button
            type=""
            text
            @click='loginStore.signOut'
          >Sign out</el-button>
          <div>{{ userStore.isLogin }}</div>


        </el-menu-item>

        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100%;
  width: 100%;

  margin: 0px;
  padding: 0px;

  flex-grow: 1;
  
  border: solid blue 2px;


  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.15);
  // 向右偏移, 向下偏移, 陰影廣度, rgb, 透明度

  border-bottom: solid 0.01px #8E8E8E;


  :deep(.el-menu-demo) {
    height: 100%;
    width: 100%;

    .logo {
      width: 70px;
      height: 70px;

      margin-left: 30px;
      color: Transparent;

    }

    .flex-grow {
      flex-grow: 1;
    }

    .routerLink {
      color: black;
      text-decoration: none;
    }

    .routerLink:hover {
      color: #55a6fe;
      cursor: pointer;
    }

  }


}


.hightlight:hover {
  color: #55a6fe;
  cursor: pointer;
}
</style>
