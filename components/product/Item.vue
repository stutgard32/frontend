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
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 26px */
    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }
    @media screen and (max-width: 875px) {
      font-size: 16px;
    }
  }
  &__wrap {
    margin-bottom: 50px;
    display: flex;
    gap: 50px;
    @media screen and (max-width: 808px) {
      flex-direction: column;
      gap: 30px;
    }
  }
  &__img {
    width: 100%;
    max-width: 290px;
    height: auto;
    border: 1px solid #517da2;
    padding: 20px 100px;
    @media screen and (max-width: 1024px) {
      width: 100%;
      max-width: 280px;
      height: auto;
    }
    @media screen and (max-width: 808px) {
      max-width: 250px;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media screen and (max-width: 808px) {
      gap: 10px;
    }
  }
  &__execution {
    color: rgba(0, 0, 0, 0.7);
    font-family: 'Roboto';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 26px */
    @media screen and (max-width: 1024px) {
      font-size: 18px;
    }
    @media screen and (max-width: 875px) {
      font-size: 16px;
    }
  }
  &__specifications {
    color: rgba(0, 0, 0, 0.7);
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }
    @media screen and (max-width: 875px) {
      font-size: 16px;
    }
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
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    @media screen and (max-width: 1024px) {
      font-size: 20px;
    }
    @media screen and (max-width: 875px) {
      font-size: 18px;
    }
    @media screen and (max-width: 808px) {
      font-size: 14px;
    }
  }
  &__wrap-3 {
    width: 100%;
    max-width: 690px;
  }

  &__arrow {
    transition: transform 0.3s ease;
  }

  &__arrow-rotated {
    transform: rotate(180deg);
  }
}
</style>
<style lang="scss">
.product__property {
  color: rgba(0, 0, 0, 0.8);
  font-family: 'Roboto';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.6px;
  ul {
    list-style: none;
    padding-left: 0;
  }
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
  @media screen and (max-width: 875px) {
    font-size: 14px;
  }
  @media screen and (max-width: 808px) {
    font-size: 12px;
  }
}
</style>
