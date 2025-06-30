<template>
  <nav class="breadcrumbs" aria-label="Хлебные крошки">
    <ol class="breadcrumbs__list">
      <li
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
        class="breadcrumbs__item"
      >
        <NuxtLink
          v-if="!crumb.isActive"
          :to="crumb.path"
          class="breadcrumbs__link"
        >
          {{ crumb.title }}
        </NuxtLink>
        <span v-else class="breadcrumbs__current" aria-current="page">
          {{ crumb.title }}
        </span>

        <span
          v-if="index < breadcrumbs.length - 1"
          class="breadcrumbs__separator"
          aria-hidden="true"
        >
          /
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
interface Breadcrumb {
  title: string
  path: string
  isActive: boolean
}

const props = defineProps<{
  breadcrumbs?: Breadcrumb[]
}>()

// Если breadcrumbs не переданы, используем пустой массив
const breadcrumbs = computed(() => props.breadcrumbs || [])
</script>
<style scoped lang="scss">
.breadcrumbs {
  margin-bottom: 20px;

  &__list {
    display: flex;
    align-items: center;
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
  }

  &__item {
    display: flex;
    align-items: center;
  }

  &__link {
    text-decoration: none;
    color: #517da2;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    transition: color 0.3s ease;
    line-height: normal;

    &:hover {
      color: #2c4a6b;
      text-decoration: underline;
    }
  }

  &__current {
    color: #666;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
  }

  &__separator {
    color: #999;
    margin-left: 10px;
    font-size: 16px;
    line-height: 1.2;
  }
}
</style>
