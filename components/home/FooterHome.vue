<template>
  <footer :class="'footer'">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__left">
          <a class="footer__link" href="/" target="_blank"
            >Политика конфиденциальности</a
          >
          <a class="footer__link" href="/" target="_blank"
            >Пользовательское соглашение</a
          >
        </div>
        <div class="footer__right">
          <ul class="list-reset footer__list">
            <li class="footer__item">
              <a class="footer__cont" href="tel:88432121700"
                >8(843) 212-17-00</a
              >
              <a class="footer__cont" href="tel:88432409584"
                >8(843) 240-95-84</a
              >
              <a class="footer__cont" href="mailto:info@st-av.ru"
                >info@st-av.ru</a
              >
            </li>
          </ul>
          <ul class="list-reset footer__list">
            <li class="footer__item">
              <p class="footer__cont">
                г. Казань, ул. Побежимова, д. 55А, офис 401, 402, 403
              </p>
              <p class="footer__cont">9:00 - 18:00, Пн-Пт</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.footer {
  padding: 0 0 30px 0;
  z-index: 2;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1280px) {
      flex-direction: column-reverse;
      gap: 30px;
    }
  }
  &__right {
    display: flex;
    gap: 30px;
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
  &__left {
    display: flex;
    align-items: flex-end;
    gap: 30px;
    @media screen and (max-width: 639px) {
      flex-direction: column;
      gap: 5px;
      align-items: flex-start;
    }
  }
  &__link {
    color: #ffffffde;
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration: none;
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  &__cont {
    max-width: 300px;
    color: #ffffffde;
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    text-decoration: none;
    @media screen and (max-width: 1280px) {
      font-size: 18px;
    }
    @media screen and (max-width: 639px) {
      color: #fff;
      font-size: 14px;
      max-width: 200px;
    }
    @media screen and (max-width: 380px) {
      font-size: 12px;
    }
  }
}
</style>
