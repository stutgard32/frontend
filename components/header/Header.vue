<template>
  <header :class="['header', colorbackground]">
    <div class="container">
      <div class="header__wrapper">
        <img
          class="header__menu"
          src="/img/burger.png"
          @click="activeMenu"
          alt="logo"
        />
        <CommonMobilMenu
          class="header__mobil"
          v-if="openMenu"
          @closeMenu="activeMenu"
        />
        <ul class="list-reset header__list header__1024">
          <li class="header__item">
            <span :class="['header__link', colorHeader]"
              >9:00 - 18:00, Пн-Пт</span
            >
            <p :class="['header__link', colorHeader]">
              г. Казань, ул. Побежимова, д. 55А, офис 401, 402, 403
            </p>
          </li>
          <li class="header__item">
            <a :class="['header__link', colorHeader]" href="tel:88432121700">
              8(843) 212-17-00
            </a>
            <a :class="['header__link', colorHeader]" href="tel:88432409584">
              8(843) 240-95-84
            </a>
            <a
              :class="['header__link', colorHeader]"
              href="mailto:info@st-av.ru"
            >
              info@st-av.ru
            </a>
          </li>
        </ul>
        <span class="header__none"></span>
        <nav class="header__nav">
          <ul class="list-reset header__list">
            <li
              v-for="(item, index) in navList"
              :key="index"
              class="header__item"
            >
              <NuxtLink :class="['header__link', colorHeader]" :to="item.link">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <NuxtLink href="/"
          ><img class="header__logo" src="/img/logo.png" alt="logo"
        /></NuxtLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
defineProps<{
  colorHeader?: string
  colorbackground?: string
}>()

const openMenu = ref(false)
const activeMenu = () => {
  openMenu.value = !openMenu.value
}
</script>

<style scoped lang="scss">
.header {
  @media screen and (max-width: 1024px) {
    background: rgba(81, 125, 162, 0.6) 84.28%;
  }
  @media screen and (max-width: 639px) {
    background: #517da2;
  }
  &__list {
    display: flex;
    gap: 30px;
    @media screen and (max-width: 1024px) {
      width: 100%;
      justify-content: space-between;
      margin-right: 50px;
    }
  }
  &__nav {
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
  &__item {
    @media screen and (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      gap: 5px;
      max-width: 217px;
    }
  }
  &__link {
    color: #000;
    font-family: 'Roboto';
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 31.2px */
    text-decoration: none;
    @media screen and (max-width: 1280px) {
      font-size: 22px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 16px;
      color: #fff;
      font-weight: 400;
    }
  }
  &__1024 {
    display: none;
    @media screen and (max-width: 1024px) {
      display: flex;
    }
    @media screen and (max-width: 639px) {
      display: none;
    }
  }
  &__none {
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
  }
  &__menu {
    display: none;
    @media screen and (max-width: 639px) {
      display: block;
      width: 30px;
      height: 30px;
    }
  }
  &__logo {
    @media screen and (max-width: 639px) {
      width: 40px;
      height: auto;
    }
  }
}
</style>
