<template>
  <section class="catalog">
    <div class="container">
      <div class="catalog__wrapper">
        <h1 class="catalog__title">Оборудование европейского стандарта</h1>
        <p class="catalog__description">
          Использование современных технологий и собственное производство
          позволяет компании успешно конкурировать с импортным оборудованием
        </p>
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
</script>

<style scoped lang="scss">
.catalog {
  padding-top: 53px;
  &__title {
    margin-bottom: 22px;
    color: #000;
    font-family: 'Stetica';
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 60px */
    letter-spacing: -1.2px;
    @media screen and (max-width: 1280px) {
      font-size: 32px;
    }
    @media screen and (max-width: 875px) {
      font-size: 24px;
    }
  }
  &__description {
    color: #000;
    font-family: 'Roboto';
    font-size: 26px;
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
