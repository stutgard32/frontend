<template>
  <section class="geography">
    <div class="container">
      <CommonBreadCrumbs :breadcrumbs="breadcrumbs" />
      <h1 class="geography__title">География работ</h1>
      <p class="geography__description">
        Работаем с крупнейшими промышленными организациями на территерии РФ
      </p>
    </div>
    <img class="geography__img" src="/img/geography-img.webp" alt="img" />
    <div class="container">
      <div class="geography__wrapper">
        <ul class="list-reset geography__list">
          <li class="geography__item">Москва</li>
          <li class="geography__item">Санкт-Петербург</li>
          <li class="geography__item">Казань</li>
          <li class="geography__item">Тверь</li>
          <li class="geography__item">Воронеж</li>
          <li class="geography__item">Краснодар</li>
          <li class="geography__item">Пермь</li>
        </ul>
        <ul class="list-reset geography__list">
          <li class="geography__item">Уфа</li>
          <li class="geography__item">Екатеринбург</li>
          <li class="geography__item">Челябинск</li>
          <li class="geography__item">Тюмень</li>
          <li class="geography__item">Новосибирск</li>
          <li class="geography__item">Красноярск</li>
          <li class="geography__item">Свободный</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'geography',
})
const breadcrumbs = computed(() => {
  return [
    { title: 'Главная', path: '/', isActive: false },
    { title: 'О компании', path: '/about', isActive: false },
    { title: 'География работ', path: '/geography', isActive: true },
  ]
})
</script>

<style scoped lang="scss">
.geography {
  padding: 53px 0 150px 0;
  background: rgba(81, 125, 162, 0.6) 84.28%;
  min-height: 100%;
  @media screen and (max-width: 1024px) {
    padding: 53px 0 110px 0;
  }
  @media screen and (max-width: 639px) {
    padding: 53px 0 40px 0;
  }
  &__title {
    margin-bottom: 22px;
    color: #000;
    font-family: 'Stetica';
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 60px */
    letter-spacing: -1.2px;
    @media screen and (max-width: 1280px) {
      font-size: 32px;
    }
    @media screen and (max-width: 875px) {
      font-size: 24px;
    }
  }
  &__description {
    max-width: 764px;
    margin-bottom: 20px;
    color: #000;
    font-family: 'Roboto';
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 39px */
    letter-spacing: -0.78px;
    @media screen and (max-width: 1280px) {
      font-size: 22px;
    }
    @media screen and (max-width: 875px) {
      font-size: 16px;
    }
  }
  &__img {
    padding-left: 90px;
    width: 100%;
    height: auto;
    object-fit: contain;
    @media screen and (max-width: 1280px) {
      padding-left: 65px;
    }
    @media screen and (max-width: 639px) {
      padding-left: 0;
      margin-bottom: 30px;
    }
  }
  &__wrapper {
    display: none;
    @media screen and (max-width: 639px) {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }
  }
  &__item {
    color: #000;
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    letter-spacing: -0.48px;
    text-transform: uppercase;
  }
}
</style>
