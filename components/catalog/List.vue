<script lang="ts" setup>
defineProps<{
  catalogList: Catalog[]
}>()
import type { Catalog } from '~/types/types'
</script>

<template>
  <div class="catalog">
    <ul class="list-reset catalog__items">
      <li
        class="catalog__item"
        v-for="item in catalogList"
        :key="item.documentId"
      >
        <CatalogItem
          :link="item.documentId"
          :title="item.title"
          :img="item.img ? item.img[0].url : '/img/no-image.png'"
          :description="item.description"
          :isBackground="item.id === 27"
          :isColor="item.id === 27"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.catalog {
  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
}
</style>
