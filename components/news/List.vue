<script lang="ts" setup>
defineProps<{
  NewsList: any[]
}>()
</script>

<template>
  <div class="newsList">
    <ul class="list-reset newsList__items">
      <li
        class="newsList__item"
        v-for="item in NewsList"
        :key="item.documentId"
      >
        <NewsItem
          :title="item.title"
          :img="item.img ? item.img[0].url : '/img/no-image.png'"
          :date="item.createdAt"
          :link="item.documentId"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.newsList {
  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  &__item {
    border: 1px solid #517da2;
  }
}
</style>
