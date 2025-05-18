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
          :isBackground="
            item.title.includes('ЭЛАРА') ||
            item.title ===
              'Комплексные решения для АСУ ТП на базе оборудования ЭЛАРА (Россия)'
          "
          :isColor="
            item.title.includes('ЭЛАРА') ||
            item.title ===
              'Комплексные решения для АСУ ТП на базе оборудования ЭЛАРА (Россия)'
          "
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.catalog {
  &__items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 30px;
    @media screen and (max-width: 445px) {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
}
</style>
