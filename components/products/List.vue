<template>
  <div class="productWrap">
    <div class="productWrap__nav">
      <ul class="list-reset productWrap__nav-list">
        <li
          class="productWrap__nav-item"
          v-for="item in catalogList?.data || []"
          :key="item?.documentId"
        >
          {{ item?.title }}
        </li>
      </ul>
    </div>
    <ul class="list-reset productWrap__items">
      <li class="productWrap__item" v-for="item in List" :key="item.documentId">
        <ProductsItem
          :id="item.documentId"
          :title="item.title"
          :img="item.img ? item.img[0].url : '/img/no-image.png'"
          :specifications="item.specifications"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { Product } from '~/types/types'
import type { Catalog } from '~/types/types'
const catalogList = await useLoadData<'', Catalog[]>(apiCatalog, {
  query: {
    populate: ['*'],
    'sort[0]': 'createdAt:asc',
  },
})

defineProps<{
  List: Product[]
}>()
</script>

<style lang="scss" scoped>
.productWrap {
  display: grid;
  grid-template-columns: 300px 1fr;
  align-items: flex-start;
  gap: 20px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
  &__items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    width: 100%;
    @media screen and (max-width: 1400px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 782px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 480px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 28px 20px 22px 20px;
    border: 1px solid #6fa7d4;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1),
        0 16px 32px rgba(0, 0, 0, 0.1);
    }
  }
  &__nav {
    background: #fff;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    padding: 4px 0;
    max-width: 320px;
    width: 100%;
    box-sizing: border-box;
    &-list {
      display: flex;
      flex-direction: column;
      gap: 0;
      margin: 0;
      padding: 0;
    }
    &-item {
      font-size: 15px;
      color: #333;
      padding: 18px 18px;
      background: #fff;
      border: none;
      border-bottom: 1px solid #e0e0e0;
      cursor: pointer;
      transition: background 0.2s;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background: #f5f7fa;
      }
    }
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
}
</style>
