<template>
  <section class="news">
    <div class="container">
      <div class="news__wrapper">
        <CommonBreadCrumbs :breadcrumbs="breadcrumbs" />
        <h1 class="news__title">Новости и события</h1>
      </div>
      <div class="news__list">
        <NewsList :NewsList="listNews?.data || []" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { News } from '~/types/types'
const listNews = await useLoadData<'', News[]>(apiNews, {
  query: {
    populate: ['*'],
    'sort[0]': 'createdAt:desc',
  },
})

const breadcrumbs = computed(() => {
  return [
    { title: 'Главная', path: '/', isActive: false },
    { title: 'О компании', path: '/about', isActive: false },
    { title: 'Новости', path: '/news', isActive: true },
  ]
})
</script>

<style scoped lang="scss">
.news {
  padding: 53px 0 110px 0;
  @media screen and (max-width: 639px) {
    padding: 53px 0 40px 0;
  }
  &__title {
    margin-bottom: 38px;
    color: #000;
    font-family: 'Stetica';
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 60px */
    letter-spacing: -1.2px;
    @media screen and (max-width: 1280px) {
      font-size: 28px;
    }
    @media screen and (max-width: 875px) {
      font-size: 22px;
    }
  }
  &__wrapper {
    width: 100%;
    max-width: 850px;
  }
}
</style>
