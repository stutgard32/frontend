<template>
  <section class="products">
    <div class="container">
      <div class="products__wrapper">
        <CommonBreadCrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <ProductsList :List="product?.data || []" />
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
    'sort[0]': 'updatedAt:desc',
    'fields[0]': 'title',
    'populate[img][fields][0]': 'id',
    'populate[img][fields][1]': 'url',
    'populate[catalog][fields][0]': 'title',
  },
})
const breadcrumbs = computed(() => {
  const crumbs = [
    { title: 'Главная', path: '/', isActive: false },
    { title: 'Каталог', path: '/catalog', isActive: false },
  ]
  if (product.value?.data?.[0]?.catalog) {
    crumbs.push({
      title: product.value.data[0].catalog.title,
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
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  &__download {
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #517da2;
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.3s ease;
    &:hover {
      background-color: #2c4a6b;
    }
  }
}
</style>
