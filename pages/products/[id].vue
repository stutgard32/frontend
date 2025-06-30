<template>
  <section class="products">
    <div class="container">
      <CommonBreadCrumbs :breadcrumbs="breadcrumbs" />
      <ProductList :List="product?.data || []" />
    </div>
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

const breadcrumbs = computed(() => {
  const crumbs = [
    { title: 'Главная', path: '/', isActive: false },
    { title: 'Каталог', path: '/catalog', isActive: false },
  ]
  if (product.value?.data[0].catalog) {
    crumbs.push({
      title: product.value?.data[0].catalog.title,
      path: route.path,
      isActive: true,
    })
  }
  return crumbs
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
