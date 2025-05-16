<template>
  <section class="hero">
    <video autoplay muted loop playsinline class="hero__video">
      <source src="/video/hero-home.mp4" type="video/mp4" />
      Ваш браузер не поддерживает видео фон.
    </video>
    <div class="hero__overlay"></div>
    <Header class="hero__header" :colorHeader="'colorHeader'" />
    <div class="hero__wrapper">
      <div class="container">
        <div class="hero__content">
          <h1 class="hero__title">АО «Штутгарт Автомейшн»</h1>
          <p class="hero__description">
            Собственное производство датчиков давления и температуры, разработка
            и поставка промышленного оборудования европейского стандарта
          </p>
          <NuxtLink href="/catalog" class="hero__btn"
            >Перейти в каталог</NuxtLink
          >
        </div>
      </div>
    </div>
    <Footer class="hero__footer" :colorFooter="'colorFooter'" />
  </section>
</template>

<script lang="ts" setup></script>

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
  &__overlay {
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
    gap: 25px;
    align-items: flex-start;
  }
  &__title {
    font-family: 'Stetica';
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 39px */
    color: #fff;
  }
  &__description {
    font-family: 'Stetica';
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 39px */
    color: #fff;
  }
  &__btn {
    padding: 15px 20px;
    background: linear-gradient(180deg, #517da2 83.02%, #fff 141.7%);
    width: 100%;
    color: #fff;
    font-family: 'Roboto';
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 31.2px */
    text-decoration: none;
    text-align: center;
  }
  &__header,
  &__footer {
    z-index: 2;
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
