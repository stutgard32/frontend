<template>
  <div class="catalog-dropdown">
    <NuxtLink
      v-for="cat in catalogList?.data"
      :key="cat.id"
      :to="`/products/${cat.documentId}`"
      class="catalog-dropdown__item"
      @click="handleClick"
    >
      <img
        :src="cat.img[0].url"
        :alt="cat.title"
        class="catalog-dropdown__img"
      />
      <span class="catalog-dropdown__title">{{ cat.title }}</span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { Catalog } from '~/types/types'

const emit = defineEmits(['close'])
function handleClick() {
  emit('close')
}

const catalogList = await useLoadData<'', Catalog[]>(apiCatalog, {
  query: {
    fields: ['title', 'description'],
    populate: ['img'],
    'sort[0]': 'createdAt:asc',
  },
})
</script>

<style scoped>
.catalog-dropdown {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px 24px;
  background: #fff;
  padding: 32px 24px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  width: 100%;
  min-width: 900px;
  z-index: 1000;
}
.catalog-dropdown__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: box-shadow 0.2s, background 0.2s;
  border-radius: 8px;
  padding: 12px;
  text-decoration: none;
  color: inherit;
}
.catalog-dropdown__item:hover {
  box-shadow: 0 2px 8px rgba(81, 125, 162, 0.15);
  background: #f7fafd;
}
.catalog-dropdown__img {
  width: 64px;
  height: 64px;
  object-fit: contain;
  margin-bottom: 12px;
}
.catalog-dropdown__title {
  font-size: 14px;
  color: #222;
  font-weight: 600;
}
@media (max-width: 1200px) {
  .catalog-dropdown {
    grid-template-columns: repeat(3, 1fr);
    min-width: 700px;
  }
}
@media (max-width: 900px) {
  .catalog-dropdown {
    grid-template-columns: repeat(2, 1fr);
    min-width: 400px;
  }
}
@media (max-width: 600px) {
  .catalog-dropdown {
    grid-template-columns: 1fr;
    min-width: 220px;
    padding: 16px 8px;
    gap: 16px 0;
  }
  .catalog-dropdown__img {
    width: 48px;
    height: 48px;
  }
  .catalog-dropdown__title {
    font-size: 14px;
  }
}
</style>
