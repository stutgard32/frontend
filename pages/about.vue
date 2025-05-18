<template>
  <section class="hero">
    <div class="container">
      <div class="hero__wrapper">
        <h1 class="hero__title">О компании</h1>
        <p class="hero__description">
          Акционерное общество «Штутгарт Автомейшн» специализируется на
          комплексном инжиниринге для B2B-сегмента, предлагая решения «под ключ»
          – от технического задания до выпуска сертифицированного оборудования
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

<script lang="ts" setup></script>

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
    margin-bottom: 50px;
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
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 36px */
    letter-spacing: -0.72px;
    text-transform: uppercase;
    @media screen and (max-width: 1280px) {
      font-size: 20px;
      padding: 30px 20px 0 20px;
    }
  }
  &__description-2 {
    max-width: 410px;
    padding: 0 30px 0 30px;
    color: #252525;
    text-align: center;
    font-family: 'Roboto';
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 39px */
    letter-spacing: -0.78px;
    @media screen and (max-width: 1280px) {
      font-size: 18px;
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
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    background: linear-gradient(180deg, #517da2 83.02%, #fff 141.7%);
    text-decoration: none;
    z-index: 5;
    @media screen and (max-width: 1280px) {
      font-size: 18px;
    }
  }
}
</style>
