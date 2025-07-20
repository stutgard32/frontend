<template>
  <div class="product">
    <div class="container">
      <h1 class="product__title">{{ product?.data?.title }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { apiProducts } from '~~/utils/apiUrls'
import type { Product } from '~/types/types'
const route = useRoute()
const id = route.params.id as string

const product = await useLoadData<'', Product>(`${apiProducts}/${id}`)
</script>

<style scoped lang="scss">
.product {
  &__title {
    color: #3f5d77;
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 26px */
  }
}
</style>
