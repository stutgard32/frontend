<template>
  <header :class="'header'">
    <div class="container">
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
          <div class="header__titleWrapper-3">
            <span class="header__title">АО «Штутгарт Амтомейшн»</span>
          </div>
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
    <HeaderCatalogDropdown
      class="header__catalog-dropdown"
      v-if="dropdown === 'catalog' && windowWidth > 1024"
      @close="dropdown = null"
      @mouseenter="onDropdownEnter('catalog')"
      @mouseleave="onDropdownLeave('catalog')"
    />
    <nav class="header__nav">
      <ul class="list-reset header__list-nav">
        <li v-for="(item, index) in navList" :key="index" class="header__item">
          <div
            v-if="item.title === 'Каталог'"
            class="header__catalog-wrapper"
            @mouseenter="onDropdownEnter('catalog')"
            @mouseleave="onDropdownLeave('catalog')"
          >
            <NuxtLink :class="'header__link'" :to="item.link">
              {{ item.title }}
            </NuxtLink>
          </div>
          <div
            v-else-if="item.title === 'О компании'"
            class="header__about-wrapper"
            @mouseenter="onDropdownEnter('about')"
            @mouseleave="onDropdownLeave('about')"
          >
            <NuxtLink :class="'header__link'" :to="item.link">
              {{ item.title }}
            </NuxtLink>
            <AboutDropdown
              v-if="dropdown === 'about' && windowWidth > 1024"
              class="header__about-dropdown"
              @close="dropdown = null"
            />
          </div>
          <template v-else>
            <NuxtLink :class="'header__link'" :to="item.link">
              {{ item.title }}
            </NuxtLink>
          </template>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import CommonMobilMenu from '../common/MobilMenu.vue'
import HeaderCatalogDropdown from '~/components/header/CatalogDropdown.vue'
import AboutDropdown from '~/components/header/AboutDropdown.vue'
import { ref, onMounted, onUnmounted } from 'vue'
const openMenu = ref(false)
const activeMenu = () => {
  openMenu.value = !openMenu.value
}
const dropdown = ref<'catalog' | 'about' | null>(null)
let hideTimeout: ReturnType<typeof setTimeout> | null = null
function onDropdownEnter(type: 'catalog' | 'about') {
  if (hideTimeout) clearTimeout(hideTimeout)
  dropdown.value = type
}
function onDropdownLeave(type: 'catalog' | 'about') {
  hideTimeout = setTimeout(() => {
    if (dropdown.value === type) {
      dropdown.value = null
    }
  }, 300)
}
const windowWidth = ref(
  typeof window !== 'undefined' ? window.innerWidth : 1920
)
function handleResize() {
  windowWidth.value = window.innerWidth
}
onMounted(() => {
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped lang="scss">
.header {
  background: rgba(81, 125, 162, 0.6) 84.28%;
  position: relative;

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
      position: relative;
      padding: 7px 0;
      display: flex;
      gap: 40px;
      width: 100%;
      justify-content: center;
      align-items: center;
      font-size: 0;
      // @media screen and (max-width: 1024px) {
      //   display: none;
      // }
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
        display: grid;
        grid-template-columns: repeat(3, 1fr);
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
      @media screen and (max-width: 639px) {
        display: none;
      }
    }
    &-3 {
      display: none;
      @media screen and (max-width: 639px) {
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
  }
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
.header__catalog-dropdown {
  position: fixed;
  top: 176px;
  left: 90px;
  right: 0;
  width: auto;
  z-index: 1000;
  @media screen and (max-width: 1280px) {
    left: 65px;
    top: 155px;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
}
.header__about-dropdown {
  position: absolute;
  top: 33px;
  left: 0;
  @media screen and (max-width: 1280px) {
    top: 33px;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
}
.header__catalog-wrapper,
.header__about-wrapper {
  position: relative;
  display: inline-block;
}
</style>
