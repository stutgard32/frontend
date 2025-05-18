<template>
  <header :class="'header'">
    <div class="container">
      <div class="header__wrapper">
        <img
          class="header__menu"
          @click="activeMenu"
          src="/img/burger.png"
          alt="logo"
        />
        <CommonMobilMenu
          class="header__mobil"
          v-if="openMenu"
          @closeMenu="activeMenu"
        />
        <span class="header__none"></span>
        <nav class="header__nav">
          <ul class="list-reset header__list">
            <li
              v-for="(item, index) in navList"
              :key="index"
              class="header__item"
            >
              <NuxtLink :class="'header__link'" :to="item.link">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <NuxtLink href="/"
          ><img class="header__logo" src="/img/logo.png" alt="logo"
        /></NuxtLink>
      </div>
      <div class="header__wrapper-2">
        <ul class="list-reset header__list header__1024">
          <li class="header__item">
            <span :class="'header__link'">9:00 - 18:00, Пн-Пт</span>
            <p :class="'header__link'">
              г. Казань, ул. Побежимова, д. 55А, офис 401, 402, 403
            </p>
          </li>
          <li class="header__item">
            <a :class="'header__link'" href="tel:88432121700">
              8(843) 212-17-00
            </a>
            <a :class="'header__link'" href="tel:88432409584">
              8(843) 240-95-84
            </a>
            <a :class="'header__link'" href="mailto:info@st-av.ru">
              info@st-av.ru
            </a>
          </li>
        </ul>
        <NuxtLink href="/"
          ><img class="header__logo-1024" src="/img/logo.png" alt="logo"
        /></NuxtLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const openMenu = ref(false)
const activeMenu = () => {
  openMenu.value = !openMenu.value
}
</script>

<style scoped lang="scss">
.header {
  position: relative;
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
    @media screen and (max-width: 639px) {
      margin-right: 0;
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
    @media screen and (max-width: 408px) {
      max-width: 194px;
    }
  }
  &__link {
    color: #fff;
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
      font-size: 13px;
      color: #fff;
      font-weight: 400;
    }
    @media screen and (max-width: 408px) {
      font-size: 12px;
    }
  }
  &__1024 {
    display: none;
    @media screen and (max-width: 1024px) {
      display: flex;
    }
    // @media screen and (max-width: 639px) {
    //   display: none;
    // }
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
    @media screen and (max-width: 1024px) {
      display: none;
    }
    @media screen and (max-width: 639px) {
      display: flex;
    }
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
    @media screen and (max-width: 1024px) {
      display: none;
    }
    @media screen and (max-width: 639px) {
      display: block;
      width: 40px;
      height: auto;
    }
    &-1024 {
      display: none;
      @media screen and (max-width: 1024px) {
        display: block;
      }
      @media screen and (max-width: 639px) {
        display: none;
      }
    }
  }
  &__wrapper-2 {
    display: none;
    @media screen and (max-width: 1024px) {
      padding: 20px 0;
      display: flex;
    }
    @media screen and (max-width: 639px) {
      width: 100%;
      position: absolute;
      left: 0;
      margin: 0 auto;
      padding: 15px 40px;
      max-width: 1700px;
      background: rgba(81, 125, 162, 0.6) 84.28%;
    }
    @media screen and (max-width: 480px) {
      padding: 15px 15px;
    }
  }
  &__mobil {
    display: none;
    @media screen and (max-width: 639px) {
      display: block;
      z-index: 9999 !important;
    }
  }
}
</style>
