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
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    max-width: 1200px;
    margin: 0 auto;

    @media screen and (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      max-width: 100%;
      padding: 0 20px;
    }

    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 10px;
      padding: 0 15px;
    }

    @media screen and (max-width: 480px) {
      padding: 0 10px;
    }
  }
}
</style>
