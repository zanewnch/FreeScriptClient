<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(0)
const increment = () => {
  count.value++
}
</script>

<template>
  <div>{{count}}</div>
</template>

<style scoped lang="scss"></style>
