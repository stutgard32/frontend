<template>
  <section class="hero">
    <div class="hero__overlay-dark"></div>
    <video
      autoplay
      muted
      loop
      playsinline
      class="hero__video"
      poster="/img/hero-poster.webp"
    >
      <source src="/video/hero-home.mp4" type="video/mp4" />
      Ваш браузер не поддерживает видео фон.
    </video>
    <!-- <picture class="hero__overlay-image">
      <img class="hero__image" src="/img/hero-home-1024.webp" alt="Hero" />
    </picture> -->
    <HeaderHome class="hero__header" :colorHeader="'colorHeader'" />
    <div class="hero__wrapper">
      <div class="container">
        <div class="hero__content">
          <h1 class="hero__title">АО «Штутгарт Автомейшн»</h1>
          <p class="hero__description">Инжиниринговая компании полного цикла</p>
          <p class="hero__description">
            Собственное производство контрольно-измерительных приборов
          </p>
          <p class="hero__description">
            Комплексная реализация проектов автоматизации
          </p>
          <NuxtLink href="/catalog" class="hero__btn"
            >Перейти в каталог</NuxtLink
          >
        </div>
      </div>
    </div>
    <span class="hero__none"></span>
  </section>
</template>

<script lang="ts" setup>
import HeaderHome from './HeaderHome.vue'
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  &__overlay-dark {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  &__content {
    max-width: 740px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &__overlay-image {
    display: none;
    @media screen and (max-width: 1024px) {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__title {
    margin-bottom: 25px;
    font-family: 'Stetica';
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 39px */
    color: #fff;
    @media screen and (max-width: 1280px) {
      font-size: 22px;
    }
    @media screen and (max-width: 875px) {
      font-size: 18px;
    }
    @media screen and (max-width: 639px) {
      font-size: 16px;
      margin-bottom: 15px;
    }
  }
  &__description {
    margin-bottom: 15px;
    font-family: 'Stetica';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 39px */
    color: #fff;

    @media screen and (max-width: 1280px) {
      font-size: 18px;
    }
    @media screen and (max-width: 875px) {
      font-size: 16px;
    }
    @media screen and (max-width: 639px) {
      font-size: 14px;
    }
  }
  &__btn {
    padding: 10px 15px;
    background: linear-gradient(180deg, #517da2 83.02%, #fff 141.7%);
    width: 100%;
    max-width: 400px;
    color: #fff;
    font-family: 'Roboto';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 31.2px */
    text-decoration: none;
    text-align: center;
    border: 2px solid transparent;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &:hover {
      background: #2c4a6b;
      border: 2px solid #517da2;
      box-shadow: 0 8px 20px rgba(81, 125, 162, 0.4);
    }

    @media screen and (max-width: 1280px) {
      font-size: 20px;
    }
    @media screen and (max-width: 875px) {
      font-size: 18px;
    }
    @media screen and (max-width: 639px) {
      font-size: 14px;
      max-width: 300px;
      padding: 5px 10px;
    }
  }
}
</style>
<style>
.colorHeader {
  color: #fff !important;
}
.colorFooter {
  color: #e4d4d4 !important;
}
</style>
