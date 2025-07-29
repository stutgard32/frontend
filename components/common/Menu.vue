<template>
  <div class="container">
    <div class="menu" v-if="menu">
      <div class="menu__wrapper">
        <img
          class="menu__logo"
          @click="openMenu"
          src="/img/burger.png"
          alt="logo"
        />
      </div>
    </div>
    <Transition name="slide">
      <div
        class="menu__wrapper-2"
        :class="{ 'menu__wrapper-2-active': !menu }"
        v-if="!menu"
        @click.self="menu = true"
      >
        <div class="menu__wrapper-3">
          <span class="menu__caption">Навигация по сайту</span>
          <NuxtLink to="/" class="menu__title" @click="closeMenu"
            >Главная</NuxtLink
          >
          <NuxtLink to="/about" class="menu__title" @click="closeMenu"
            >О Компании</NuxtLink
          >
          <ul class="list-reset menu__list">
            <li class="menu__item" v-for="(item, index) in link1" :key="index">
              <NuxtLink
                @click="closeMenu"
                :class="'menu__link'"
                :to="item.link"
                >{{ item.title }}</NuxtLink
              >
            </li>
          </ul>
          <NuxtLink to="/catalog" class="menu__title" @click="closeMenu"
            >Каталог</NuxtLink
          >
          <ul class="list-reset menu__list">
            <li
              class="menu__item menu__catalog-item"
              v-for="(item, index) in catalogListNav?.data"
              :key="index"
              @mouseenter="showProducts(index)"
              @mouseleave="hideProducts(index)"
            >
              <div class="menu__catalog-wrapper">
                <NuxtLink
                  @click="closeMenu"
                  :class="'menu__link'"
                  :to="`/products/${item.documentId}`"
                  >{{ item.title }}</NuxtLink
                >
                <div
                  v-if="
                    hoveredCatalogIndex === index &&
                    item.products &&
                    item.products.length > 0
                  "
                  class="menu__products-dropdown"
                  @mouseenter="onDropdownEnter"
                  @mouseleave="onDropdownLeave"
                >
                  <div class="menu__products-list">
                    <NuxtLink
                      v-for="product in item.products"
                      :key="product.documentId"
                      :to="`/product/${product.documentId}`"
                      class="menu__product-item"
                      @click="closeMenu"
                    >
                      <span class="menu__product-title">{{
                        product.title
                      }}</span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <NuxtLink to="/contacts" class="menu__title" @click="closeMenu"
            >Контакты</NuxtLink
          >
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
const menu = ref(true)
const hoveredCatalogIndex = ref<number | null>(null)
const hideTimeout = ref<NodeJS.Timeout | null>(null)

const openMenu = () => {
  menu.value = !menu.value
}
const closeMenu = () => {
  menu.value = true
}

const showProducts = (index: number) => {
  if (hideTimeout.value) {
    clearTimeout(hideTimeout.value)
    hideTimeout.value = null
  }
  hoveredCatalogIndex.value = index
}

const hideProducts = (index: number) => {
  if (hoveredCatalogIndex.value === index) {
    hideTimeout.value = setTimeout(() => {
      hoveredCatalogIndex.value = null
    }, 300) // Задержка 300мс
  }
}

const onDropdownEnter = () => {
  if (hideTimeout.value) {
    clearTimeout(hideTimeout.value)
    hideTimeout.value = null
  }
}

const onDropdownLeave = () => {
  if (hoveredCatalogIndex.value !== null) {
    hideTimeout.value = setTimeout(() => {
      hoveredCatalogIndex.value = null
    }, 300)
  }
}

const link1 = [
  {
    title: 'Заказчики и поставщики',
    link: '/partners',
  },
  {
    title: 'Сертификаты и документы',
    link: '/certificates',
  },
  {
    title: 'География работ',
    link: '/geography',
  },
  {
    title: 'Новости и события',
    link: '/news',
  },
  {
    title: 'Услуги',
    link: '/services',
  },
]

import type { Catalog } from '~/types/types'
const catalogListNav = await useLoadData<'', Catalog[]>(apiCatalog, {
  query: {
    populate: ['products', 'products.img'],
    'sort[0]': 'createdAt:asc',
  },
})
console.log(catalogListNav.value?.data)
</script>

<style scoped lang="scss">
.menu {
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 90px;
  height: 100%;
  background-color: #3f5d77;
  z-index: 2000;
  transition: transform 0.3s ease;
  @media screen and (max-width: 1280px) {
    width: 65px;
  }
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__logo {
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: rotate(90deg) scale(1.1);
    }
    @media screen and (max-width: 1280px) {
      width: 35px;
      height: 35px;
    }
  }
  &__wrapper-2 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }

  &__wrapper-3 {
    width: 450px;
    height: 100%;
    background: #000c;
    padding: 30px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    @media screen and (max-width: 1024px) {
      width: 350px;
    }
  }
  &__caption {
    width: 100%;
    display: inline-block;
    text-align: center;
    margin-bottom: 30px;
    color: #b0b0b0;
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 26px */
    @media screen and (max-width: 1024px) {
      font-size: 18px;
    }
  }
  &__title {
    margin-bottom: 20px;
    color: #fff;
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 39px */
    text-decoration: none;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: #6fa7d4;
    }
    // @media screen and (max-width: 1280px) {
    //   font-size: 20px;
    // }
    @media screen and (max-width: 1024px) {
      font-size: 18px;
    }
  }
  &__link {
    color: #fff;
    font-family: 'Roboto';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 26px */
    text-decoration: none;
    transition: all 0.5s ease-in-out;

    // @media screen and (max-width: 1280px) {
    //   font-size: 14px;
    // }
    @media screen and (max-width: 1024px) {
      font-size: 12px;
    }
    &:hover {
      color: #6fa7d4;
    }
  }
  &__list {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__catalog-item {
    position: relative;
  }

  &__catalog-wrapper {
    position: relative;
  }

  &__products-dropdown {
    position: fixed;
    left: 450px;
    top: 0;
    background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
    border-radius: 12px;
    padding: 20px;
    min-width: 280px;
    max-width: 380px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 1001;
    height: 100%;
    overflow-y: auto;
    border: 1px solid rgba(111, 167, 212, 0.1);

    @media screen and (max-width: 1024px) {
      left: 350px;
      min-width: 240px;
      max-width: 280px;
      padding: 15px;
    }
  }

  &__products-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  &__product-item {
    display: block;
    padding: 12px 16px;
    border-radius: 8px;
    text-decoration: none;
    color: #e0e0e0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid transparent;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(111, 167, 212, 0.1),
        transparent
      );
      transition: left 0.5s ease;
    }

    &:hover {
      background: linear-gradient(
        135deg,
        rgba(111, 167, 212, 0.15) 0%,
        rgba(111, 167, 212, 0.05) 100%
      );
      color: #6fa7d4;
      border-color: rgba(111, 167, 212, 0.3);
      transform: translateX(4px);
      box-shadow: 0 4px 12px rgba(111, 167, 212, 0.2);

      &::before {
        left: 100%;
      }
    }

    &:active {
      transform: translateX(2px) scale(0.98);
    }
  }

  &__product-title {
    font-family: 'Roboto';
    font-size: 15px;
    font-weight: 500;
    line-height: 1.4;
    color: inherit;
    position: relative;
    z-index: 1;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(-100%);
}

.slide-enter-to {
  transform: translateX(0);
}

.slide-leave-from {
  transform: translateX(0);
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>
