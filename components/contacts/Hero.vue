<template>
  <section class="hero">
    <div class="container">
      <h1 class="hero__title">Контакты</h1>
      <img class="hero__img" src="/img/contacts-hero.png" />
      <ul class="list-reset hero__items">
        <li class="hero__item">
          <div class="hero__wrapper">
            <img class="hero__icon" src="/svg/phone.svg" />
            <div class="hero__phone-wrapper">
              <a href="tel:88432121700" class="hero__link">8(843) 212-17-00</a>
              <a href="tel:88432409584" class="hero__link">8(843) 240-95-84</a>
            </div>
          </div>
        </li>
        <li class="hero__item">
          <div class="hero__img-wrapper">
            <img class="hero__icon" src="/svg/mail.svg" /><a
              href="mailto:info@st-av.ru"
              class="hero__link"
              >info@st-av.ru</a
            >
          </div>
          <p class="hero__link">ИНН 1661070513</p>
        </li>
        <li class="hero__item">
          <p class="hero__link">9:00 - 18:00, Пн-Пт</p>
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
    margin-bottom: 28px;
    color: #000;
    font-family: 'Stetica';
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -1.2px;
    @media screen and (max-width: 1280px) {
      font-size: 32px;
    }
    @media screen and (max-width: 875px) {
      font-size: 24px;
    }
  }
  &__icon {
    @media screen and (max-width: 875px) {
      width: 20px;
      height: 20px;
    }
  }
  &__wrapper {
    display: flex;
    gap: 15px;
    @media screen and (max-width: 875px) {
      align-items: center;
    }
  }
  &__phone-wrapper {
    display: flex;
    flex-direction: column;
  }
  &__img-wrapper {
    display: flex;
    gap: 5px;
  }
  &__img {
    margin-bottom: 50px;
    width: 100%;
  }
  &__items {
    display: flex;
    gap: 150px;
    @media screen and (max-width: 1194px) {
      gap: 120px;
    }
    @media screen and (max-width: 1024px) {
      gap: 30px;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    @media screen and (max-width: 639px) {
      flex-direction: column-reverse;
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__link {
    color: #7f7f7f;
    font-family: 'Stetica';
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    text-decoration: none;
    @media screen and (max-width: 1280px) {
      font-size: 22px;
    }
    @media screen and (max-width: 875px) {
      font-size: 18px;
    }
  }
}
</style>
