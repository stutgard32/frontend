<template>
  <section class="hero">
    <div class="container">
      <div class="hero__wrapper">
        <CommonBreadCrumbs :breadcrumbs="breadcrumbs" />
        <h1 class="hero__title">О компании</h1>
        <p class="hero__description">
          Компания АО «Штутгарт Автомейшн» осуществляет комплексный инжиниринг в
          области аналитических решений, обладает собственным  производством
          контрольно измерительных приборов и осуществляет поставку
          запорно-регулирующей арматуры.
        </p>
        <p class="hero__description">
          Благодаря высококвалифицированному штату сотрудников и передовым
          техническим решениям, уровень оказываемых услуг и поставляемого
          оборудования позволяет нашим заказчикам занимать лидирующие позиции на
          рынке. В область компетенции входят – реализация проекта «под ключ» от
          этапа подготовки технического задания до создания проектного решения с
          последующей реализацией сертифицированного решения /продукции /
          оборудования. проекта «под ключ» от этапа подготовки технического
          задания до создания проектного решения с последующей реализацией
          сертифицированного решения /продукции / оборудования.
        </p>
      </div>

      <ul class="list-reset hero__items">
        <li class="hero__item" v-for="(item, index) in aboutList" :key="index">
          <h3 class="hero__subtitle">{{ item.title }}</h3>
          <p class="hero__description-2">{{ item.description }}</p>
          <NuxtLink class="hero__link" :to="item.link">Подробнее</NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
const breadcrumbs = computed(() => {
  return [
    { title: 'Главная', path: '/', isActive: false },
    { title: 'О компании', path: '/about', isActive: true },
  ]
})
</script>
<style scoped lang="scss">
.hero {
  padding: 53px 0 150px 0;
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
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 60px */
    letter-spacing: -1.2px;
    @media screen and (max-width: 1280px) {
      font-size: 28px;
    }
    @media screen and (max-width: 875px) {
      font-size: 22px;
    }
  }
  &__description {
    margin-bottom: 20px;
    color: #000;
    font-family: 'Roboto';
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 39px */
    letter-spacing: -0.78px;
    &:last-child {
      margin-bottom: 50px;
    }
    @media screen and (max-width: 1280px) {
      font-size: 18px;
    }
    @media screen and (max-width: 875px) {
      font-size: 14px;
    }
  }
  &__wrapper {
    width: 100%;
    max-width: 850px;
  }
  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  &__item {
    background: #fdfdfd;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    height: 100%;
    min-height: 420px;
    border: 1px solid #517da2;
    background: #fff;
    @media screen and (max-width: 1024px) {
      min-height: 350px;
    }
  }
  &__subtitle {
    padding: 30px 30px 0 30px;
    color: #252525;
    text-align: center;
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 36px */
    letter-spacing: -0.72px;
    text-transform: uppercase;
    @media screen and (max-width: 1280px) {
      font-size: 18px;
      padding: 30px 20px 0 20px;
    }
  }
  &__description-2 {
    max-width: 410px;
    padding: 0 30px 0 30px;
    color: #252525;
    text-align: center;
    font-family: 'Roboto';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 39px */
    letter-spacing: -0.78px;
    @media screen and (max-width: 1280px) {
      font-size: 16px;
      padding: 0 20px 0 20px;
    }
  }
  &__link {
    width: 100%;
    margin-top: auto;
    padding: 14px 0;
    text-align: center;
    color: #fdfdfd;
    font-family: 'Roboto';
    font-size: 18px;
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
    @media screen and (max-width: 1280px) {
      font-size: 16px;
    }
  }
}
</style>
