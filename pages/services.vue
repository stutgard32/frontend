<template>
  <section class="services">
    <div class="container">
      <CommonBreadCrumbs :breadcrumbs="breadcrumbs" />
      <h1 class="services__title">Услуги</h1>
    </div>
    <div class="services__content">
      <img class="services__img" src="/img/services.webp" alt="img" />
    </div>
    <div class="container">
      <h2 class="services__subtitle">Сервис и техническое обслуживание</h2>
      <p class="services__description">
        Акционерное общество «Штутгарт Автомейшн» обладает своим собственным
        сервисно техническим центром, оказывают Специалисты прошли подготовку на
        базе предприятий производителей, обладают высокой квалификацией и
        многолетним опытом работы.
      </p>
      <p class="services__description">
        Наша компания всегда готова оперативно оказать услуги по сервису и
        техническому обслуживанию.
      </p>
      <h2 class="services__subtitle">Проектирование</h2>
      <p class="services__description">
        Акционерное общество «Штутгарт Автомейшн» благодаря многолетнему
        успешному опыту работы и высокой квалификации сотрудников производит
        проектирование объектов и сопутствующих компонентов любой сложности и
        условий внедрения.
      </p>
      <h2 class="services__subtitle">Постгарантийное обслуживание</h2>
      <p class="services__description">
        Учитывая длительность жизненного цикла оборудования, заказчики часто
        сталкиваются с тем, что вопросы в работе с оборудованием и его ремонтом
        возникают по истечению гарантийного срока службы, акционерное общество
        «Штутгарт Автомейшн» предоставляет услуги по постгарантийному
        обслуживанию оборудования любой сложности, его диагностики и ремонту.
      </p>
      <h2 class="services__subtitle">Монтажные и шеф монтажные работы</h2>
      <p class="services__description">
        Акционерное общество «Штутгарт Автомейшн» проводит полный цикл шеф
        монтажных и монтажных работ при вводе в эксплуатацию объекта и при
        комплексной поставке оборудования.
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
const breadcrumbs = computed(() => {
  return [
    { title: 'Главная', path: '/', isActive: false },
    { title: 'О компании', path: '/about', isActive: false },
    { title: 'Услуги', path: '/services', isActive: true },
  ]
})
</script>
<style scoped lang="scss">
.services {
  padding: 53px 0 150px 0;
  @media screen and (max-width: 1024px) {
    padding: 53px 0 110px 0;
  }
  @media screen and (max-width: 639px) {
    padding: 53px 0 40px 0;
  }
  &__title {
    margin-bottom: 30px;
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
  &__content {
    margin-bottom: 50px;
    position: relative;
  }
  &__img {
    width: 100%;
    padding-left: 90px;
    width: 100%;
    max-height: 900px;
    object-fit: cover;
    @media screen and (max-width: 1280px) {
      padding-left: 65px;
    }
    @media screen and (max-width: 639px) {
      padding-left: 0;
    }
  }
  &__subtitle {
    margin-bottom: 10px;
    color: #000;
    font-family: 'Stetica';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 45px */
    letter-spacing: -0.9px;
    @media screen and (max-width: 1280px) {
      font-size: 18px;
    }
    @media screen and (max-width: 875px) {
      font-size: 16px;
    }
  }
  &__description {
    margin-bottom: 20px;
    color: #252525;
    font-family: 'Roboto';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 39px */
    letter-spacing: -0.78px;
    @media screen and (max-width: 1280px) {
      font-size: 16px;
    }
    @media screen and (max-width: 875px) {
      font-size: 14px;
    }
  }
}
</style>
