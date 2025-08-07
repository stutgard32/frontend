<template>
  <div class="item">
    <img class="item__img" :src="img" alt="img" />
    <div class="item__wrap">
      <div class="item__content">
        <h1 class="item__title">{{ title }}</h1>
        <span class="item__date">{{ formattedDate }}</span>
      </div>
      <NuxtLink class="item__link" :to="`/news/${link}`">Подробнее</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string
  img: string
  date: string
  link: string
}>()

const formattedDate = computed(() => {
  const dateObj = new Date(props.date)
  const day = String(dateObj.getDate()).padStart(2, '0')
  const month = String(dateObj.getMonth() + 1).padStart(2, '0') // месяцы с 0
  const year = dateObj.getFullYear()
  return `${day}.${month}.${year}`
})
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__title {
    padding: 0 15px;
    color: #000;
    text-align: center;
    font-family: 'Roboto';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 39px */
    letter-spacing: -0.78px;
    @media screen and (max-width: 1200px) {
      font-size: 16px;
    }
  }
  &__img {
    margin-bottom: 20px;
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center;
  }
  &__date {
    display: block;
    text-align: right;
    padding: 0 15px;
    margin-bottom: 20px;
    color: #000;
    font-family: 'Roboto';
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    letter-spacing: -0.48px;
  }
  &__wrap {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 15px;
  }

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  &__link {
    display: inline-block;
    padding: 14px 0;
    text-align: center;
    color: #fdfdfd;
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    background: linear-gradient(180deg, #517da2 83.02%, #fff 141.7%);
    text-decoration: none;
    z-index: 5;
    &:hover {
      background: #2c4a6b;
      box-shadow: 0 8px 20px rgba(81, 125, 162, 0.4);
    }
    @media screen and (max-width: 1200px) {
      font-size: 18px;
    }
  }
}
</style>
