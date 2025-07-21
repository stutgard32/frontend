<template>
  <div class="product">
    <div class="container">
      <div class="product__wrapper">
        <CommonBreadCrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <PrevCard
        :img="product?.data?.img[0]?.url"
        :prevdescription="product?.data?.prevdescription"
        :prevspecifications="product?.data?.prevspecifications"
        @scroll-to-tab="scrollToTab"
      />
      <ProductContentCard
        ref="contentCardRef"
        :prevdescription="product?.data?.description"
        :prevspecifications="product?.data?.specifications"
        :documents="
          Array.isArray(product?.data?.documents)
            ? product?.data?.documents
            : product?.data?.documents
            ? [product?.data?.documents]
            : []
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PrevCard from '~/components/product/PrevCard.vue'
import ProductContentCard from '~/components/product/ContentCard.vue'
import { ref } from 'vue'
import { apiProducts } from '~~/utils/apiUrls'
import type { Product } from '~/types/types'
const route = useRoute()
const id = route.params.id as string

const product = await useLoadData<'', Product>(`${apiProducts}/${id}`)

const breadcrumbs = computed(() => {
  const crumbs = [
    { title: 'Главная', path: '/', isActive: false },
    { title: 'Каталог', path: '/catalog', isActive: false },
  ]

  if (product.value?.data?.catalog) {
    crumbs.push({
      title: product.value.data.catalog.title,
      path: `/products/${product.value.data.catalog.documentId}`,
      isActive: false,
    })
  }
  crumbs.push({
    title: product.value?.data?.title || '',
    path: `/product/${id}`,
    isActive: true,
  })
  return crumbs
})

const contentCardRef = ref()
function scrollToTab(tab: string) {
  if (
    contentCardRef.value &&
    typeof contentCardRef.value.setTab === 'function'
  ) {
    contentCardRef.value.setTab(tab)
    contentCardRef.value.$el.scrollIntoView({ behavior: 'smooth' })
  } else if (contentCardRef.value?.$el) {
    contentCardRef.value.$el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped lang="scss">
.product {
  padding: 53px 0 50px 0;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
}
</style>
