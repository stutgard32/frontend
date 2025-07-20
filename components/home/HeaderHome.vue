<template>
  <header :class="'header'">
    <div class="container">
      <!-- <div class="header__wrapper">
        <img
          class="header__menu"
          @click="activeMenu"
          src="/img/burger.png"
          alt="logo"
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
      </div> -->

      <div class="header__wrapper-2">
        <div class="header__wrapper-4">
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
          <NuxtLink href="/"
            ><img class="header__logo" src="/img/logo.png" alt="logo"
          /></NuxtLink>
        </div>
        <div class="header__titleWrapper-2">
          <span class="header__title">АО «Штутгарт Амтомейшн»</span>
        </div>
        <ul class="list-reset header__list">
          <li
            class="header__item"
            style="display: flex; flex-direction: row; max-width: 100%"
          >
            <div class="header__titleWrapper">
              <span class="header__title">АО «Штутгарт Амтомейшн»</span>
            </div>
            <div class="header__info">
              <span :class="'header__link'">9:00 - 18:00, Пн-Пт</span>
              <p :class="'header__link'">
                г. Казань, ул. Побежимова, д. 55А, офис 401, 402, 403
              </p>
            </div>
          </li>
          <li class="header__item-2">
            <div class="header__wrapper-3">
              <a :class="'header__link'" href="tel:88432121700">
                8(843) 212-17-00
              </a>
              <a :class="'header__link'" href="tel:88432409584">
                8(843) 240-95-84
              </a>
              <a :class="'header__link'" href="mailto:info@st-av.ru">
                info@st-av.ru
              </a>
            </div>
            <NuxtLink href="/" class="header__logo-1024"
              ><img src="/img/logo.png" alt="logo"
            /></NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <nav class="header__nav">
      <ul class="list-reset header__list-nav">
        <li v-for="(item, index) in navList" :key="index" class="header__item">
          <NuxtLink :class="'header__link'" :to="item.link">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import CommonMobilMenu from '../common/MobilMenu.vue'
const openMenu = ref(false)
const activeMenu = () => {
  openMenu.value = !openMenu.value
}
</script>

<style scoped lang="scss">
.header {
  position: relative;
  background: rgba(81, 125, 162, 0.6) 84.28%;

  &__list {
    display: flex;
    gap: 30px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-right: 50px;
    @media screen and (max-width: 639px) {
      margin-right: 0;
    }
    &-nav {
      padding: 7px 0;
      display: flex;
      gap: 40px;
      width: 100%;
      justify-content: center;
      @media screen and (max-width: 1024px) {
        display: none;
      }
      li {
        position: relative;

        &:not(:last-child)::after {
          content: '';
          position: absolute;
          right: -20px;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 15px;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
        }
      }

      @media screen and (max-width: 768px) {
        gap: 20px;
        flex-wrap: wrap;
        padding: 10px 20px;
      }
    }
  }

  &__nav {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: block !important;
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    max-width: 217px;
  }
  &__info {
    max-width: 217px;
  }
  &__item-2 {
    display: flex;
    align-items: center;
    gap: 50px;
    @media screen and (max-width: 1455px) {
      gap: 50px;
    }
  }
  &__titleWrapper {
    @media screen and (max-width: 915px) {
      display: none;
    }
    &-2 {
      display: none;
      @media screen and (max-width: 915px) {
        display: block;
      }
    }
  }
  &__title {
    margin-right: 50px;
    display: inline-block;
    color: #fff;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    @media screen and (max-width: 915px) {
      margin-right: 0;
      margin-bottom: 20px;
    }
    @media screen and (max-width: 875px) {
      margin-bottom: 10px;
      font-size: 14px;
    }
  }
  &__link {
    color: #fff;
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 31.2px */
    text-decoration: none;
    position: relative;
    padding: 3px 6px;
    border-radius: 6px;
    transition: all 0.3s ease;

    @media screen and (max-width: 1280px) {
      padding: 0;
    }
    @media screen and (max-width: 875px) {
      font-size: 12px;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      @media screen and (max-width: 1024px) {
        background: none;
        transform: none;
        box-shadow: none;
      }
    }
    // @media screen and (max-width: 1024px) {
    //   padding: 0;
    // }
  }
  // &__1024 {
  //   display: flex;
  // }
  // &__none {
  //   @media screen and (max-width: 1024px) {
  //     display: none;
  //   }
  // }
  // &__menu {
  //   display: block;
  //   width: 30px;
  //   height: 30px;
  // }
  &__logo-1024 {
    @media screen and (max-width: 1024px) {
      width: 60px;
      height: auto;
    }
    @media screen and (max-width: 639px) {
      display: none;
    }
  }
  &__wrapper-2 {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
  }
  &__wrapper-3 {
    display: flex;
    gap: 6px;
    flex-direction: column;
    // @media screen and (max-width: 1455px) {

    //   gap: 2px;
    // }
    // @media screen and (max-width: 1024px) {
    //   gap: 6px;
    // }
  }
  &__wrapper-4 {
    display: none;
    @media screen and (max-width: 639px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
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
    @media screen and (max-width: 639px) {
      width: 40px;
      height: auto;
    }
  }
}
</style>
