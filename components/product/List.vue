<template>
  <div class="productWrap">
    <div class="container">
      <ul class="list-reset productWrap__items">
        <li
          class="productWrap__item"
          v-for="item in List"
          :key="item.documentId"
        >
          <ProductItem
            :title="item.title"
            :img="item.img ? item.img[0].url : '/img/no-image.png'"
            :execution="item.execution"
            :subtitle="item.subtitle"
            :specifications="item.specifications"
          />
        </li>
      </ul>
    </div>
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
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
  }
  &__item {
    padding: 30px;
    border: 1px solid #517da2;
    background: rgba(217, 217, 217, 0);
    @media screen and (max-width: 808px) {
      padding: 15px;
    }
  }
}
</style>
