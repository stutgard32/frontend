<template>
  <section class="partners">
    <div class="container">
      <CommonBreadCrumbs :breadcrumbs="breadcrumbs" />
      <h1 class="partners__title">Наши заказчики</h1>
      <p class="partners__description">
        Нам доверяют крупнейшие производственны и нефтеперерабатывающие заводы
      </p>
      <div class="partners__items-2">
        <ul class="list-reset partners__list">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="partners__item"
          >
            <img class="partners__img-part" :src="item.img" alt="img" />
          </li>
        </ul>
      </div>
      <div class="partners__items">
        <Vue3Marquee>
          <img src="/img/partners-img-1.webp" alt="img" />
          <img src="/img/partners-img-2.webp" alt="img" />
          <img src="/img/partners-img-3.webp" alt="img" />
          <img src="/img/partners-img-4.webp" alt="img" />
        </Vue3Marquee>
        <Vue3Marquee direction="reverse">
          <img src="/img/partners-img-5.webp" alt="img" />
          <img src="/img/partners-img-6.webp" alt="img" />
          <img src="/img/partners-img-7.webp" alt="img" />
          <img src="/img/partners-img-8.webp" alt="img" />
        </Vue3Marquee>
        <Vue3Marquee>
          <img src="/img/partners-img-9.webp" alt="img" />
          <img src="/img/partners-img-10.webp" alt="img" />
          <img src="/img/partners-img-11.webp" alt="img" />
          <img src="/img/partners-img-12.webp" alt="img" />
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

<script lang="ts" setup>
const breadcrumbs = computed(() => {
  return [
    { title: 'Главная', path: '/', isActive: false },
    { title: 'О компании', path: '/about', isActive: false },
    { title: 'Партнеры и заказчики', path: '/partners', isActive: true },
  ]
})
const items = [
  {
    img: '/img/partners-img-1.webp',
  },
  {
    img: '/img/partners-img-2.webp',
  },
  {
    img: '/img/partners-img-3.webp',
  },
  {
    img: '/img/partners-img-4.webp',
  },
  {
    img: '/img/partners-img-5.webp',
  },
  {
    img: '/img/partners-img-6.webp',
  },
  {
    img: '/img/partners-img-7.webp',
  },
  {
    img: '/img/partners-img-8.webp',
  },
  {
    img: '/img/partners-img-9.webp',
  },
  {
    img: '/img/partners-img-10.webp',
  },
  {
    img: '/img/partners-img-11.webp',
  },
  {
    img: '/img/partners-img-12.webp',
  },
]
</script>

<style scoped lang="scss">
.partners {
  padding: 53px 0 150px 0;
  @media screen and (max-width: 1024px) {
    padding: 53px 0 110px 0;
  }
  @media screen and (max-width: 639px) {
    padding: 53px 0 40px 0;
  }
  &__title {
    margin-bottom: 20px;
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
    @media screen and (max-width: 1280px) {
      font-size: 22px;
    }
    @media screen and (max-width: 875px) {
      font-size: 16px;
    }
  }
  &__items {
    margin-bottom: 100px;
    @media screen and (max-width: 639px) {
      display: none;
    }
  }
  &__img {
    width: 100%;
    height: 100%;
    padding-left: 90px;
    max-height: 670px;
    object-fit: cover;
    &-part {
      width: 100%;
      max-width: 200px;
      height: auto;
      object-fit: cover;
    }
    @media screen and (max-width: 1280px) {
      padding-left: 65px;
    }
    @media screen and (max-width: 639px) {
      padding-left: 0;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    align-items: center;
  }
  &__items-2 {
    display: none;
    @media screen and (max-width: 639px) {
      display: block;
      margin-bottom: 50px;
    }
  }
}
</style>
