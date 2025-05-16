<template>
  <footer :class="['footer', colorBackgroundFooter]">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__left">
          <a :class="['footer__link', colorFooter]" href="/" target="_blank"
            >Политика конфиденциальности</a
          >
          <a :class="['footer__link', colorFooter]" href="/" target="_blank"
            >Пользовательское соглашение</a
          >
        </div>
        <div class="footer__right">
          <ul class="list-reset footer__list">
            <li class="footer__item">
              <a :class="['footer__cont', colorFooter]" href="tel:88432121700"
                >8(843) 212-17-00</a
              >
              <a :class="['footer__cont', colorFooter]" href="tel:88432409584"
                >8(843) 240-95-84</a
              >
              <a
                :class="['footer__cont', colorFooter]"
                href="mailto:info@st-av.ru"
                >info@st-av.ru</a
              >
            </li>
          </ul>
          <ul class="list-reset footer__list">
            <li class="footer__item">
              <p :class="['footer__cont', colorFooter]">
                г. Казань, ул. Побежимова, д. 55А, офис 401, 402, 403
              </p>
              <p :class="['footer__cont', colorFooter]">9:00 - 18:00, Пн-Пт</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
defineProps<{
  colorFooter?: string
  colorBackgroundFooter?: string
}>()
</script>

<style scoped lang="scss">
.footer {
  padding: 0 0 30px 0;
  &__wrapper {
    display: flex;
    justify-content: space-between;
  }
  &__right {
    display: flex;
    gap: 30px;
  }
  &__left {
    display: flex;
    align-items: flex-end;
    gap: 30px;
  }
  &__link {
    color: #2b2b2b;
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
    color: #2b2b2b;
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    text-decoration: none;
  }
}
</style>
