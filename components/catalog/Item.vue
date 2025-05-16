<script lang="ts" setup>
defineProps<{
  title: string
  img: string
  isBackground?: boolean
  isColor?: boolean
  description: string
  link: string
}>()
</script>

<template>
  <div
    class="catalog__item"
    :class="{
      'catalog__item--background': isBackground,
      'catalog__item--hover': isBackground,
    }"
    :style="isBackground ? `background-image: url(${img})` : ''"
  >
    <div class="catalog__description">
      <p class="catalog__text">{{ description }}</p>
    </div>
    <div class="catalog__content">
      <h3 class="catalog__title" :class="{ catalog__color: isColor }">
        {{ title }}
      </h3>
      <div v-if="!isBackground" class="catalog__img-wrapper">
        <img class="catalog__img" :src="img" alt="img" />
      </div>
    </div>
    <NuxtLink class="list-reset catalog__btn" :to="`/products/${link}`"
      >Перейти в каталог</NuxtLink
    >
  </div>
</template>

<style lang="scss" scoped>
.catalog {
  &__item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    min-height: 282px;
    border: 1px solid #517da2;
    background: #fff;
    &--background {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      transition: all 0.3s ease-in-out;
    }
    &:hover .catalog__description {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
    &:hover .catalog__content {
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease-in-out;
    }
    &--hover:hover {
      background-image: none !important;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s ease-in-out;
  }
  &__color {
    color: #fff !important;
  }
  &__description {
    position: absolute;
    inset: 0;
    color: #000;
    padding: 20px;
    opacity: 0;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  &__text {
    color: #252525;
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 39px */
    letter-spacing: -0.78px;
  }
  &__title {
    padding: 20px 20px 0 20px;
    margin-bottom: 30px;
    color: #252525;
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
  }
  &__img {
    width: 100%;
    height: 100%;
    &-wrapper {
      margin-bottom: 30px;
      padding: 0 20px 0 20px;
      width: 100%;
      max-height: 350px;
    }
  }
  &__btn {
    padding: 14px 0;
    text-align: center;
    color: #fdfdfd;
    font-family: 'Roboto';
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    background: linear-gradient(180deg, #517da2 83.02%, #fff 141.7%);
    text-decoration: none;
    z-index: 5;
  }
}
</style>
