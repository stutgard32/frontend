<template>
  <div class="product">
    <div class="product__wrap">
      <img class="product__img" :src="img" alt="img" />
      <div class="product__content">
        <h2 class="product__title">{{ title }}</h2>
        <span class="product__execution">{{ execution }}</span>
        <div @click="toggleProperty" class="product__wrap-2">
          <p class="product__specifications">Показать характеристики</p>
          <img
            :class="{
              'product__arrow-rotated': isProperty,
              product__arrow: true,
            }"
            src="/svg/arrow.svg"
          />
        </div>
      </div>
    </div>
    <div v-if="isProperty" class="product__wrap-3">
      <h2 class="product__subtitle">
        {{ subtitle }}
      </h2>
      <div class="product__property" v-html="htmlSpecifications"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { marked } from 'marked'
const props = defineProps<{
  title: string
  img?: string
  execution?: string
  article?: boolean
  subtitle: string
  specifications?: string
}>()

const isProperty = ref(true)

const toggleProperty = () => {
  isProperty.value = !isProperty.value
}

const htmlSpecifications = computed(() =>
  props.specifications ? marked.parse(props.specifications) : ''
)
</script>

<style lang="scss" scoped>
.product {
  &__title {
    color: #000;
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 26px */
  }
  &__wrap {
    margin-bottom: 50px;
    display: flex;
    gap: 50px;
  }
  &__img {
    border: 1px solid #517da2;
    padding: 20px 100px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  &__execution {
    color: rgba(0, 0, 0, 0.7);
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 26px */
  }
  &__specifications {
    color: rgba(0, 0, 0, 0.7);
    font-family: 'Roboto';
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
  }
  &__wrap-2 {
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  &__subtitle {
    margin-bottom: 20px;
    color: #000;
    font-family: 'Roboto';
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
  }
  &__wrap-3 {
    width: 100%;
    max-width: 690px;
  }
  &__property {
    color: rgba(0, 0, 0, 0.8);
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.6px;
  }
  &__arrow {
    transition: transform 0.3s ease;
  }

  &__arrow-rotated {
    transform: rotate(180deg);
  }
}
</style>
