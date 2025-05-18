<template>
  <div class="container">
    <div class="menu">
      <div class="menu__wrapper-2">
        <div class="menu__wrapper-3">
          <div class="menu__wrapper-4">
            <span class="menu__caption">Навигация по сайту</span>
            <img src="/img/close.png" class="menu__close" @click="closeMenu" />
          </div>
          <NuxtLink to="/" class="menu__title">Главная</NuxtLink>
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
            <li class="menu__item" v-for="(item, index) in link2" :key="index">
              <NuxtLink
                @click="closeMenu"
                :class="'menu__link'"
                :to="item.link"
                >{{ item.title }}</NuxtLink
              >
            </li>
          </ul>
          <NuxtLink to="/contacts" class="menu__title" @click="closeMenu"
            >Контакты</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['closeMenu'])

const closeMenu = () => {
  emit('closeMenu')
}

const link1 = [
  {
    title: 'Общая информация',
    link: '/about',
  },
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
const link2 = [
  {
    title: 'Датчики давления и температуры',
    link: '/products/h9mxl0zrto1c6lb1sm0b8y3d',
  },
  {
    title: 'Оборудование Endress+Hauser',
    link: '/products/b4tn04pi59ld7085mge8v94c',
  },
  {
    title: 'Преобразователи уровня ТЕКФЛЕКС',
    link: '/products/ais7a6jwh93ozoegcpqeuuy4',
  },
  {
    title: 'Кориолисовые расходомеры',
    link: '/products/fbzmuhuyj4it1sf9sfc81d5x',
  },
  {
    title: 'Газоаналитические решения',
    link: '/products/iexnbfk104x982nn20mffgmz',
  },
  {
    title:
      'Решения для поточного химического анализа жидкостей и газов совместно с компанией «Метран Проект»',
    link: '/products/y0em2ke5m3g798wja8ck646d',
  },
  {
    title: 'Насосное оборудование ',
    link: '/products/aqdg1yu7gjn759eq3vfj64wk',
  },
  {
    title: 'Запорно-регулирующая арматура ',
    link: '/products/rbqycnw32mlrrn2ubo6o6yvz',
  },
  {
    title: 'Комплексные решения для АСУ ТП на базе оборудования ЭЛАРА (Россия)',
    link: '/products/tste439sem19t006trgofv35',
  },
]
</script>

<style scoped lang="scss">
.menu {
  z-index: 999 !important;
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__logo {
    width: 40px;
    height: 40px;
    cursor: pointer;
    @media screen and (max-width: 1280px) {
      width: 35px;
      height: 35px;
    }
  }
  &__close {
    width: 45px;
    height: 45px;
    cursor: pointer;
    @media screen and (max-width: 1280px) {
      width: 40px;
      height: 40px;
    }
  }
  &__wrapper-2 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10111111100;
  }

  &__wrapper-3 {
    width: 300px;
    height: 100%;
    background: rgba(66, 66, 66, 0.8);
    padding: 30px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    @media screen and (max-width: 1024px) {
      width: 250px;
    }
    @media screen and (max-width: 639px) {
      width: 100%;
      background: #000c;
    }
  }
  &__wrapper-4 {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
  }
  &__caption {
    width: 100%;
    display: inline-block;
    text-align: center;
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
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 39px */
    text-decoration: none;
    @media screen and (max-width: 1280px) {
      font-size: 24px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 20px;
    }
  }
  &__link {
    color: #fff;
    font-family: 'Roboto';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 26px */
    text-decoration: none;
    @media screen and (max-width: 1280px) {
      font-size: 16px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 14px;
    }
  }
  &__list {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}
</style>
