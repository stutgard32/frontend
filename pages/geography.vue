<template>
  <section class="geography">
    <div class="container">
      <h1 class="geography__title">География работ</h1>
      <p class="geography__description">
        Работаем с крупнейшими промышленными организациями на территерии РФ
      </p>
    </div>
    <img class="geography__img" src="/img/geography-img.png" alt="img" />
  </section>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'geography',
})
</script>

<style scoped lang="scss">
.geography {
  padding: 53px 0 150px 0;
  background: rgba(81, 125, 162, 0.6) 84.28%;
  &__title {
    margin-bottom: 22px;
    color: #000;
    font-family: 'Stetica';
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 60px */
    letter-spacing: -1.2px;
  }
  &__description {
    max-width: 764px;
    margin-bottom: 20px;
    color: #000;
    font-family: 'Roboto';
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 39px */
    letter-spacing: -0.78px;
  }
  &__img {
    padding-left: 90px;
    width: 100%;
    max-height: 900px;
    object-fit: cover;
  }
}
</style>
