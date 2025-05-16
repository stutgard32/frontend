<template>
  <section class="partners">
    <div class="container">
      <h1 class="partners__title">Наши заказчики</h1>
      <p class="partners__description">
        Нам доверяют крупнейшие производственны и нефтеперерабатывающие заводы
      </p>
      <div class="partners__items">
        <Vue3Marquee>
          <img src="/img/partners-img-1.png" alt="img" />
          <img src="/img/partners-img-2.png" alt="img" />
          <img src="/img/partners-img-3.png" alt="img" />
          <img src="/img/partners-img-4.png" alt="img" />
        </Vue3Marquee>
        <Vue3Marquee direction="reverse">
          <img src="/img/partners-img-5.png" alt="img" />
          <img src="/img/partners-img-6.png" alt="img" />
          <img src="/img/partners-img-7.png" alt="img" />
          <img src="/img/partners-img-8.png" alt="img" />
        </Vue3Marquee>
        <Vue3Marquee>
          <img src="/img/partners-img-9.png" alt="img" />
          <img src="/img/partners-img-10.png" alt="img" />
          <img src="/img/partners-img-11.png" alt="img" />
          <img src="/img/partners-img-12.png" alt="img" />
        </Vue3Marquee>
      </div>
      <h2 class="partners__title">Наши парнеры</h2>
      <p class="partners__description">
        Помимо собственной производственной базы, мы сотрудничаем с крупнейшими
        поставщиками из Европы и Азии
      </p>
    </div>
    <img class="partners__img" src="/img/partners-logo.png" alt="img" />
  </section>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.partners {
  padding: 53px 0 150px 0;
  &__title {
    margin-bottom: 20px;
    color: #000;
    font-family: 'Stetica';
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 60px */
    letter-spacing: -1.2px;
  }
  &__description {
    margin-bottom: 60px;
    max-width: 764px;
    color: #252525;
    font-family: 'Roboto';
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 39px */
    letter-spacing: -0.78px;
    &:last-child {
      margin-bottom: 30px;
    }
  }
  &__items {
    margin-bottom: 100px;
  }
  &__img {
    width: 100%;
    height: 100%;
    padding-left: 90px;
    max-height: 670px;
    object-fit: cover;
  }
}
</style>
