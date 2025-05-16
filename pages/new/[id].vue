<template>
  <section class="newsPages">
    <div class="container">
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
</script>

<style scoped lang="scss">
.newsPages {
  padding: 53px 0 130px 0;
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
  }
  &__img {
    margin-bottom: 50px;
    padding-left: 90px;
    width: 100%;
    max-height: 800px;
    object-fit: cover;
  }
  &__text {
    color: #252525;
    font-family: 'Roboto';
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 39px */
    letter-spacing: -0.78px;
  }
}
</style>
