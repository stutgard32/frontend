<template>
  <header :class="['header', colorbackground]">
    <div class="container">
      <div class="header__wrapper">
        <span class="header__none"></span>
        <nav class="header__nav">
          <ul class="list-reset header__list">
            <li
              v-for="(item, index) in navList"
              :key="index"
              class="header__item"
            >
              <NuxtLink :class="['header__link', colorHeader]" :to="item.link">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <NuxtLink href="/"
          ><img class="header__logo" src="/img/logo.png" alt="logo"
        /></NuxtLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
defineProps<{
  colorHeader?: string
  colorbackground?: string
}>()
</script>

<style scoped lang="scss">
.header {
  &__list {
    display: flex;
    gap: 30px;
  }
  &__link {
    color: #000;
    font-family: 'Roboto';
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 31.2px */
    text-decoration: none;
  }
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
  }
}
</style>
