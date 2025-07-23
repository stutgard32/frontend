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
              <div
                v-if="item.title === 'Каталог'"
                class="header__catalog-wrapper"
                @mouseenter="onDropdownEnter('catalog')"
                @mouseleave="onDropdownLeave('catalog')"
              >
                <NuxtLink
                  :class="['header__link', colorHeader]"
                  :to="item.link"
                >
                  {{ item.title }}
                </NuxtLink>
              </div>
              <div
                v-else-if="item.title === 'О компании'"
                class="header__about-wrapper"
                @mouseenter="onDropdownEnter('about')"
                @mouseleave="onDropdownLeave('about')"
              >
                <NuxtLink
                  :class="['header__link', colorHeader]"
                  :to="item.link"
                >
                  {{ item.title }}
                </NuxtLink>
                <AboutDropdown
                  v-if="dropdown === 'about'"
                  class="header__about-dropdown"
                  @close="dropdown = null"
                />
              </div>
              <template v-else>
                <NuxtLink
                  :class="['header__link', colorHeader]"
                  :to="item.link"
                >
                  {{ item.title }}
                </NuxtLink>
              </template>
            </li>
          </ul>
        </nav>
        <NuxtLink href="/"
          ><img class="header__logo" src="/img/logo.png" alt="logo"
        /></NuxtLink>
      </div>
      <nav class="header__nav-2">
        <ul class="list-reset header__list">
          <li
            v-for="(item, index) in navList"
            :key="index"
            class="header__item"
          >
            <div
              v-if="item.title === 'Каталог'"
              class="header__catalog-wrapper"
              @mouseenter="onDropdownEnter('catalog')"
              @mouseleave="onDropdownLeave('catalog')"
            >
              <NuxtLink :class="['header__link', colorHeader]" :to="item.link">
                {{ item.title }}
              </NuxtLink>
            </div>
            <div
              v-else-if="item.title === 'О компании'"
              class="header__about-wrapper"
              @mouseenter="onDropdownEnter('about')"
              @mouseleave="onDropdownLeave('about')"
            >
              <NuxtLink :class="['header__link', colorHeader]" :to="item.link">
                {{ item.title }}
              </NuxtLink>
              <AboutDropdown
                v-if="dropdown === 'about'"
                class="header__about-dropdown"
                @close="dropdown = null"
              />
            </div>
            <template v-else>
              <NuxtLink :class="['header__link', colorHeader]" :to="item.link">
                {{ item.title }}
              </NuxtLink>
            </template>
          </li>
        </ul>
      </nav>
    </div>
    <HeaderCatalogDropdown
      v-if="dropdown === 'catalog'"
      class="header__catalog-dropdown"
      @close="dropdown = null"
      @mouseenter="onDropdownEnter('catalog')"
      @mouseleave="onDropdownLeave('catalog')"
    />
  </header>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'
import AboutDropdown from './AboutDropdown.vue'

defineProps<{
  colorHeader?: string
  colorbackground?: string
}>()

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

function handleScroll() {
  if (dropdown.value === 'catalog') {
    dropdown.value = null
  }
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
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
      align-items: center;
      padding-bottom: 10px;
    }
    @media screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
    @media screen and (max-width: 639px) {
      border-top: 1px solid #fff;
      padding-top: 10px;
    }
  }
  &__nav {
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
  &__nav-2 {
    display: none;
    @media screen and (max-width: 1024px) {
      display: block;
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
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 31.2px */
    text-decoration: none;
    transition: all 0.5s ease-in-out;
    position: relative;
    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -5px;
      left: 0;
      height: 2px;
      width: 100%;
      background: #000000;
      transition: all 0.3s ease-in-out;
      transform: scaleX(0);
    }
    &:hover::after {
      transform: scaleX(1);
    }
    @media screen and (max-width: 1280px) {
      font-size: 18px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 14px;
      color: #fff;
      font-weight: 400;
      &::after {
        display: none;
      }
    }
    @media screen and (max-width: 876px) {
      font-size: 12px;
    }
    @media screen and (max-width: 768px) {
      text-align: center;
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
    position: relative;
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
  &__catalog-dropdown {
    position: absolute;
    top: 75px;
    left: 0;
    transform: translateY(10px);
    z-index: 1000;
  }
  &__about-dropdown {
    position: absolute;
    top: 48px;
    left: 0;
    z-index: 1000;
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
  &__catalog-wrapper {
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
  &__about-wrapper {
    position: relative;
    display: inline-block;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
}
.header__catalog-dropdown {
  position: fixed;
  top: 75px;
  left: 90px;
  right: 0;
  width: auto;
  z-index: 1000;
  @media screen and (max-width: 1280px) {
    left: 65px;
    top: 73px;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
}
</style>
