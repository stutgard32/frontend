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
    class="catalogItem__item-inner"
    :class="{
      'catalogItem__item--background': isBackground,
      'catalogItem__item--hover': isBackground,
    }"
    :style="
      isBackground ? `background: url(${img}) center / cover no-repeat` : ''
    "
  >
    <div class="catalogItem__description">
      <p class="catalogItem__text">{{ description }}</p>
    </div>
    <div class="catalogItem__content">
      <h3 class="catalogItem__title" :class="{ catalogItem__color: isColor }">
        {{ title }}
      </h3>
      <div v-if="!isBackground" class="catalogItem__img-wrapper">
        <img class="catalogItem__img" :src="img" alt="img" />
      </div>
    </div>
    <NuxtLink class="list-reset catalogItem__btn" :to="`/products/${link}`">
      Перейти в каталог
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.catalogItem {
  &__item-inner {
    height: 100%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    border: 1px solid #517da2;

    &--background {
      background-repeat: no-repeat !important;
      background-size: cover !important;
      background-position: center !important;
      transition: all 0.3s ease-in-out !important;
    }

    &--hover:hover {
      background-image: none !important;
    }

    &:hover .catalogItem__description {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }

    &:hover .catalogItem__content {
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease-in-out;
    }
  }

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    transition: all 0.3s ease-in-out;
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
    background-color: rgb(255, 255, 255); // добавь это
  }

  &__text {
    font-size: 18px;
    line-height: 150%;
    font-weight: 500;
    color: #252525;
    @media screen and (max-width: 1280px) {
    }
  }

  &__title {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
    line-height: 130%;
    color: #252525;
  }

  &__color {
    color: #fff !important;
  }

  &__img-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    margin-bottom: 20px;
    overflow: hidden;
  }

  &__img {
    max-height: 180px;
    max-width: 100%;
    object-fit: contain;
  }

  &__btn {
    padding: 14px 0;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    background: linear-gradient(180deg, #517da2 83.02%, #fff 141.7%);
    color: #fff;
    text-decoration: none;
    z-index: 1;
    &:hover {
      background: #2c4a6b;
      box-shadow: 0 8px 20px rgba(81, 125, 162, 0.4);
    }
  }
}
</style>
