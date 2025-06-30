<template>
  <section class="newsPages">
    <div class="container">
      <CommonBreadCrumbs :breadcrumbs="breadcrumbs" />
      <h1 class="newsPages__title">{{ product?.data.title }}</h1>
    </div>
    <img class="newsPages__img" :src="product?.data.img[0].url" alt="img" />
    <div class="container">
      <div class="newsPages__text" v-html="htmlSpecifications"></div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { marked } from 'marked'
import type { ProductNews } from '~~/types/types'
const route = useRoute()
const id = route.params.id as string

const product = await useLoadData<'', ProductNews>(`${apiNews}/${id}`, {
  query: {
    populate: '*',
  },
})

const htmlSpecifications = computed(() =>
  product.value?.data.description
    ? marked.parse(product.value?.data.description)
    : ''
)

const breadcrumbs = computed(() => {
  return [
    { title: 'Главная', path: '/', isActive: false },
    { title: 'Новости', path: '/news', isActive: false },
    {
      title: product.value?.data.title || 'Новость',
      path: `/news/${id}`,
      isActive: true,
    },
  ]
})
</script>

<style scoped lang="scss">
.newsPages {
  padding: 53px 0 130px 0;
  @media screen and (max-width: 1024px) {
    padding: 53px 0 110px 0;
  }
  @media screen and (max-width: 639px) {
    padding: 53px 0 40px 0;
  }
  &__title {
    max-width: 1000px;
    margin-bottom: 30px;
    color: #000;
    font-family: 'Stetica';
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 60px */
    letter-spacing: -1.2px;
    @media screen and (max-width: 1280px) {
      font-size: 32px;
    }
    @media screen and (max-width: 875px) {
      font-size: 24px;
    }
  }
  &__img {
    margin-bottom: 50px;
    padding-left: 90px;
    width: 100%;
    max-height: 800px;
    object-fit: cover;
    @media screen and (max-width: 1280px) {
      padding-left: 65px;
    }
    @media screen and (max-width: 1024px) {
      padding-left: 0;
    }
  }
  &__text {
    color: #252525;
    font-family: 'Roboto';
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 39px */
    letter-spacing: -0.78px;
    @media screen and (max-width: 1280px) {
      font-size: 20px;
    }
    @media screen and (max-width: 875px) {
      font-size: 18px;
    }
  }
}
</style>
