<template>
  <section class="catalog">
    <div class="container">
      <div class="catalog__wrapper">
        <CommonBreadCrumbs :breadcrumbs="breadcrumbs" />
        <h1 class="catalog__title">Оборудование и  проектные  решения</h1>
      </div>

      <div class="catalog__list">
        <CatalogList :catalogList="catalogList?.data || []" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Catalog } from '~/types/types'
const catalogList = await useLoadData<'', Catalog[]>(apiCatalog, {
  query: {
    populate: ['*'],
    'sort[0]': 'createdAt:asc',
  },
})

const breadcrumbs = computed(() => {
  return [
    { title: 'Главная', path: '/', isActive: false },
    { title: 'Каталог', path: '/catalog', isActive: true },
  ]
})
</script>

<style scoped lang="scss">
.catalog {
  padding-top: 53px;
  &__title {
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
  &__description {
    color: #000;
    font-family: 'Roboto';
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 39px */
    letter-spacing: -0.78px;
    @media screen and (max-width: 1280px) {
      font-size: 22px;
    }
    @media screen and (max-width: 875px) {
      font-size: 16px;
    }
  }
  &__wrapper {
    width: 100%;
    max-width: 850px;
  }
  &__list {
    padding-bottom: 110px;
    @media screen and (max-width: 1024px) {
      padding: 0 0 110px 0;
    }
    @media screen and (max-width: 639px) {
      padding: 0 0 40px 0;
    }
  }
}
</style>
