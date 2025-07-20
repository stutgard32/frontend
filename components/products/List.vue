<template>
  <div class="productWrap">
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

defineProps<{
  List: Product[]
}>()
</script>

<style lang="scss" scoped>
.productWrap {
  &__items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    width: 100%;
    max-width: 1136px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
  &__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 28px 28px 22px 28px;
    border: 1px solid #6fa7d4;
    width: 100%;
    height: 100%;
    max-width: 272px;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1),
        0 16px 32px rgba(0, 0, 0, 0.1);
    }
    // @media screen and (max-width: 808px) {
    //   padding: 15px;
    // }
  }
}
</style>
