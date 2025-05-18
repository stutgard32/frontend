<template>
  <section class="products">
    <ProductList :List="product?.data || []" />
  </section>
</template>

<script lang="ts" setup>
import { apiProducts } from '~~/utils/apiUrls'
import type { Product } from '~/types/types'
const route = useRoute()
const id = route.params.id as string

const product = await useLoadData<'', Product[]>(apiProducts, {
  query: {
    'filters[catalog][documentId]': id,
    sort: 'updatedAt:desc',
  },
})
</script>

<style lang="scss" scoped>
.products {
  padding: 53px 0 150px 0;
  @media screen and (max-width: 1024px) {
    padding: 53px 0 110px 0;
  }
  @media screen and (max-width: 639px) {
    padding: 53px 0 40px 0;
  }
}
</style>
