<template>
  <div class="about-dropdown">
    <NuxtLink
      v-for="item in aboutMenu"
      :key="item.link"
      :to="item.link"
      class="about-dropdown__item"
      @click="handleClick"
    >
      <span class="about-dropdown__item-title">{{ item.title }}</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { aboutMenu } from '~/utils/aboutMenu'
const emit = defineEmits(['close'])
function handleClick() {
  emit('close')
}
</script>

<style scoped>
.about-dropdown {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  padding: 5px 0;
  min-width: 250px;
  z-index: 1000;
}
.about-dropdown__item {
  padding: 10px 24px;
  border-radius: 12px;
  color: #222;
  text-decoration: none;
  font-size: 16px;
  transition: background 0.2s;
}
.about-dropdown__item:hover {
  background: #f7fafd;
}
.about-dropdown__item-title {
  font-size: 14px;
  color: #222;
  text-decoration: none;
}
</style>
