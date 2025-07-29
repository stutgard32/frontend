<template>
  <div class="hero">
    <div class="container">
      <CommonBreadCrumbs :breadcrumbs="breadcrumbs" />

      <!-- Вариант 1: Минималистичный с большими карточками -->
      <!-- <div class="hero__header">
        <h1 class="hero__title">Контакты</h1>
        <p class="hero__subtitle">Мы всегда на связи</p>
      </div> -->

      <!-- Дополнительная информация -->
      <div class="hero__additional">
        <div class="hero__info-section">
          <h2 class="hero__info-title">АО «Штутгарт Амтомейшн»</h2>
          <!-- <p class="hero__info-text">Инжиниринговая компании полного цикла</p>

          <p class="hero__info-text">
            Собственное производство контрольно-измерительных приборов
          </p>

          <p class="hero__info-text">
            Комплексная реализация проектов автоматизации
          </p> -->
        </div>
        <div class="hero__image-section">
          <img class="hero__img" src="/img/contacts-hero.webp" alt="Контакты" />
        </div>
      </div>
      <div class="hero__cards-container">
        <div class="hero__card hero__card--primary">
          <div class="hero__card-header">
            <div class="hero__icon-wrapper">
              <img class="hero__icon" src="/svg/phone.svg" alt="Телефон" />
            </div>
            <h3 class="hero__card-title">Позвоните нам</h3>
          </div>
          <div class="hero__card-body">
            <a
              href="tel:88432121700"
              class="hero__contact-link hero__contact-link--phone"
            >
              <span class="hero__link-label">Телефон</span>
              <span class="hero__link-value">8(843) 212-17-00</span>
            </a>
            <a
              href="tel:88432409584"
              class="hero__contact-link hero__contact-link--phone"
            >
              <span class="hero__link-label">Телефон</span>
              <span class="hero__link-value">8(843) 240-95-84</span>
            </a>
          </div>
        </div>

        <div class="hero__card hero__card--secondary">
          <div class="hero__card-header">
            <div class="hero__icon-wrapper">
              <img class="hero__icon" src="/svg/mail.svg" alt="Email" />
            </div>
            <h3 class="hero__card-title">Напишите нам</h3>
          </div>
          <div class="hero__card-body">
            <a
              href="mailto:info@st-av.ru"
              class="hero__contact-link hero__contact-link--email"
            >
              <span class="hero__link-label">Email</span>
              <span class="hero__link-value">info@st-av.ru</span>
            </a>
            <div class="hero__company-info">
              <span class="hero__inn">ИНН 1661070513</span>
            </div>
          </div>
        </div>

        <div class="hero__card hero__card--accent">
          <div class="hero__card-header">
            <div class="hero__icon-wrapper">
              <div class="hero__time-icon">⏰</div>
            </div>
            <h3 class="hero__card-title">Режим работы</h3>
          </div>
          <div class="hero__card-body">
            <div class="hero__schedule">
              <div class="hero__schedule-item">
                <span class="hero__schedule-days">Пн-Пт</span>
                <span class="hero__schedule-time">9:00 - 18:00</span>
              </div>
              <div class="hero__schedule-item">
                <span class="hero__schedule-days">Сб-Вс</span>
                <span class="hero__schedule-time">Выходной</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const breadcrumbs = computed(() => {
  return [
    { title: 'Главная', path: '/', isActive: false },
    { title: 'Контакты', path: '/contacts', isActive: true },
  ]
})
</script>

<style scoped lang="scss">
.hero {
  padding: 53px 0 150px 0;
  // background: linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%);
  // position: relative;

  // &::before {
  //   content: '';
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   height: 400px;
  //   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  //   opacity: 0.05;
  //   z-index: 0;
  // }
  @media screen and (max-width: 1299px) {
    padding: 53px 0 100px 0;
  }

  // @media screen and (max-width: 1024px) {
  //   padding: 53px 0 110px 0;
  // }
  @media screen and (max-width: 874px) {
    padding: 53px 0 60px 0;
  }
  @media screen and (max-width: 639px) {
    padding: 53px 0 40px 0;
  }

  .container {
    position: relative;
    z-index: 1;
  }

  // &__header {
  //   text-align: center;
  //   margin-bottom: 80px;

  //   @media screen and (max-width: 768px) {
  //     margin-bottom: 60px;
  //   }
  // }

  // &__title {
  //   font-family: 'Stetica';
  //   font-size: 56px;
  //   font-weight: 700;
  //   line-height: 1.1;
  //   color: #1e293b;
  //   margin-bottom: 16px;
  //   letter-spacing: -2px;

  //   @media screen and (max-width: 1280px) {
  //     font-size: 48px;
  //   }
  //   @media screen and (max-width: 875px) {
  //     font-size: 36px;
  //   }
  // }

  // &__subtitle {
  //   font-family: 'Roboto';
  //   font-size: 22px;
  //   font-weight: 400;
  //   color: #64748b;
  //   line-height: 1.5;

  //   @media screen and (max-width: 875px) {
  //     font-size: 18px;
  //   }
  // }

  &__cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    padding-top: 150px;
    @media screen and (max-width: 1299px) {
      padding-top: 100px;
    }
    @media screen and (max-width: 874px) {
      padding-top: 50px;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 20px;
      // margin-bottom: 60px;
    }
  }

  &__card {
    background: #ffffff;
    border-radius: 24px;
    padding: 40px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid rgba(226, 232, 240, 0.8);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 6px;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
      transform: scaleX(0);
      transition: transform 0.4s ease;
    }

    &:hover {
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);

      &::before {
        transform: scaleX(1);
      }
    }

    &--primary::before {
      background: linear-gradient(90deg, #10b981, #059669);
    }

    &--secondary::before {
      background: linear-gradient(90deg, #3b82f6, #1d4ed8);
    }

    &--accent::before {
      background: linear-gradient(90deg, #f59e0b, #d97706);
    }
    @media screen and (max-width: 1280px) {
      padding: 18px;
    }
    @media screen and (max-width: 874px) {
      padding: 16px;
      margin-bottom: 20px;
    }
  }

  &__card-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
  }

  &__icon-wrapper {
    width: 54px;
    height: 54px;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    @media screen and (max-width: 1280px) {
      width: 44px;
      height: 44px;
    }
    @media screen and (max-width: 874px) {
      width: 40px;
      height: 40px;
    }
  }

  &__icon {
    width: 25px;
    height: 25px;
    transition: all 0.3s ease;
    @media screen and (max-width: 1280px) {
      width: 20px;
      height: 20px;
    }
    @media screen and (max-width: 874px) {
      width: 18px;
      height: 18px;
    }
  }

  &__time-icon {
    font-size: 32px;
    transition: all 0.3s ease;
    @media screen and (max-width: 1280px) {
      font-size: 28px;
    }
    @media screen and (max-width: 874px) {
      font-size: 24px;
    }
  }

  &__card-title {
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 600;
    color: #1e293b;
    margin: 0;
    @media screen and (max-width: 1280px) {
      font-size: 18px;
    }
  }

  &__card-body {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__contact-link {
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-decoration: none;
    padding: 16px;
    border-radius: 12px;
    transition: all 0.3s ease;
    border: 1px solid transparent;

    &:hover {
      background: rgba(59, 130, 246, 0.05);
      border-color: rgba(59, 130, 246, 0.2);
    }
    @media screen and (max-width: 874px) {
      padding: 0;
    }
  }

  &__link-label {
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 500;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  &__link-value {
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 600;
    color: #1e293b;
    @media screen and (max-width: 1280px) {
      font-size: 16px;
    }
  }

  &__company-info {
    padding: 16px;
    background: rgba(148, 163, 184, 0.1);
    border-radius: 12px;
  }

  &__inn {
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 500;
    color: #64748b;
  }

  &__schedule {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__schedule-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background: rgba(148, 163, 184, 0.1);
    border-radius: 8px;
  }

  &__schedule-days {
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 600;
    color: #1e293b;
    @media screen and (max-width: 1280px) {
      font-size: 14px;
    }
  }

  &__schedule-time {
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 500;
    color: #64748b;
    @media screen and (max-width: 1280px) {
      font-size: 14px;
    }
  }

  &__additional {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;

    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  &__image-section {
    @media screen and (max-width: 1024px) {
      order: 2;
    }
  }

  &__img {
    width: 100%;
    height: auto;
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    }
  }

  &__info-section {
    @media screen and (max-width: 1024px) {
      order: 1;
    }
  }

  &__info-title {
    color: #000;
    font-family: 'Stetica';
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 60px */
    letter-spacing: -1.2px;
    @media screen and (max-width: 1280px) {
      font-size: 28px;
    }
    @media screen and (max-width: 875px) {
      font-size: 22px;
    }
  }

  &__info-text {
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 400;
    color: #64748b;
    line-height: 1.6;
    margin-bottom: 10px;

    @media screen and (max-width: 1280px) {
      font-size: 16px;
    }
    @media screen and (max-width: 875px) {
      font-size: 14px;
    }
    &:last-child {
      margin-bottom: 0px;
    }
  }

  &__stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }

  &__stat {
    text-align: center;
    padding: 20px;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-4px);
    }
  }

  &__stat-number {
    display: block;
    font-family: 'Stetica';
    font-size: 32px;
    font-weight: 700;
    color: #3b82f6;
    margin-bottom: 8px;
  }

  &__stat-label {
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 500;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
}
</style>
