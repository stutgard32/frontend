<template>
  <div class="prevCard">
    <div class="prevCard__image">
      <img :src="img" alt="img" class="prevCard__img" />
    </div>
    <div class="prevCard__prevWrapper">
      <div class="prevCard__description-wrapper">
        <div
          class="prevCard__description-wrapper-prev"
          v-html="htmlDescription"
        ></div>
        <button
          class="btn-reset prevCard__button"
          @click="emit('scroll-to-tab', 'description')"
        >
          Подробности
        </button>
      </div>
      <div class="prevCard__specifications-wrapper">
        <div
          class="prevCard__specifications-prev"
          v-html="htmlSpecifications"
        ></div>
        <button
          class="btn-reset prevCard__button"
          @click="emit('scroll-to-tab', 'specs')"
        >
          Все характеристики
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { marked } from 'marked'
const emit = defineEmits(['scroll-to-tab'])
const htmlSpecifications = computed(() =>
  props.prevdescription ? marked.parse(props.prevdescription) : ''
)
const htmlDescription = computed(() =>
  props.prevspecifications ? marked.parse(props.prevspecifications) : ''
)
const props = defineProps<{
  img?: string
  prevdescription?: string
  prevspecifications?: string
}>()
</script>

<style scoped lang="scss">
.prevCard {
  display: flex;
  gap: 60px;
  justify-content: center;
  margin-bottom: 40px;
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 874px) {
    margin-bottom: 10px;
  }
  &__description-wrapper {
    margin-bottom: 20px;
  }
  &__specifications-wrapper {
    margin-bottom: 20px;
  }
  &__description-wrapper-prev {
    margin-bottom: 5px;
    max-width: 650px;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    @media (max-width: 950px) {
      max-width: 100%;
    }
    @media (max-width: 874px) {
      font-size: 14px;
    }
  }
  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__specifications-prev {
    font-size: 16px;
    line-height: 1.5;
    color: #333;
  }
  &__img {
    width: 100%;
    max-width: 425px;
    height: auto;
    object-fit: cover;
  }
  &__button {
    color: #3f5d77;
    font-size: 16px;
    line-height: 1.5;
    text-decoration: underline;
    &:last-child {
      margin-bottom: 0px;
    }
    @media (max-width: 874px) {
      font-size: 14px;
    }
  }
}
:deep(ul) {
  margin: 0;
  padding-left: 20px;
  margin-bottom: 5px;
}
:deep(p strong) {
  display: block;
  margin-bottom: 10px;
  @media (max-width: 874px) {
    font-size: 14px;
  }
}
:deep(li) {
  @media (max-width: 874px) {
    font-size: 14px;
  }
}
</style>
