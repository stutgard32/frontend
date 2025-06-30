<template>
  <section class="certificates">
    <div class="container">
      <div class="certificates__content">
        <CommonBreadCrumbs :breadcrumbs="breadcrumbs" />
        <h1 class="certificates__title">Сертификаты и документы</h1>
        <p class="certificates__description">
          Акционерное общество «Штутгарт Автомейшн» обладает необходимыми
          лицензиями и сертификатами для выполнения полного комплекса
          инжиниринговых работ
        </p>
      </div>
      <ul class="list-reset certificates__items">
        <li
          v-for="(item, index) in certificatesList"
          :key="index"
          class="certificates__item"
        >
          <Image class="certificates__img" :src="item.img" preview alt="img" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Image from 'primevue/image'
const breadcrumbs = computed(() => {
  return [
    { title: 'Главная', path: '/', isActive: false },
    { title: 'О компании', path: '/about', isActive: false },
    { title: 'Сертификаты', path: '/certificates', isActive: true },
  ]
})
// const openImg = (img: string) => {
//   window.open(img, '_blank')
// }
</script>

<style scoped lang="scss">
.certificates {
  padding: 53px 0 150px;
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
  &__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
  }

  &__description {
    color: #252525;
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
  &__content {
    margin-bottom: 63px;
    width: 100%;
    max-width: 750px;
    @media screen and (max-width: 875px) {
      margin-bottom: 40px;
    }
  }
  &__img {
    cursor: pointer;
  }
}
</style>
