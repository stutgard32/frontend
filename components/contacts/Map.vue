<template>
  <div class="map">
    <div class="container">
      <div class="map__wrapper">
        <p class="map__adress">
          г. Казань, ул. Побежимова, д. 55А, офис 401, 402, 403
        </p>
        <div class="map__component">
          <ClientOnly>
            <ContactsMapComponent />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.map {
  padding: 0 0 0;
  &__wrapper {
    padding: 0 0 150px 0;
    @media screen and (max-width: 1024px) {
      padding: 0 0 110px 0;
    }
    @media screen and (max-width: 875px) {
      padding: 0 0 70px 0;
    }
    @media screen and (max-width: 639px) {
      padding: 0 0 60px 0;
    }
  }
  &__adress {
    margin-bottom: 20px;
    color: #7f7f7f;
    font-family: 'Stetica';
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    @media screen and (max-width: 1280px) {
      font-size: 18px;
    }
    @media screen and (max-width: 875px) {
      font-size: 16px;
    }
    @media screen and (max-width: 639px) {
      max-width: 500px;
    }
  }
  &__component {
    width: 100%;
    // min-height: 550px;
    border-radius: 25px;
    border: 1px solid #8f8f8f;
    overflow: hidden;
  }
}
</style>
