<script lang="ts" setup>
import type { YMap } from '@yandex/ymaps3-types'
import { shallowRef } from 'vue'
import {
  YandexMap,
  YandexMapControls,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker,
} from 'vue-yandex-maps'

const map = shallowRef<null | YMap>(null)
</script>

<template>
  <yandex-map
    v-model="map"
    :settings="{
      location: {
        center: [49.074497, 55.859756],
        zoom: 11,
      },
    }"
    class="map"
    width="100%"
    height="500px"
  >
    <yandex-map-default-scheme-layer />
    <yandex-map-default-features-layer />
    <yandex-map-marker
      position="top-center left-center"
      :settings="{ coordinates: [49.074497, 55.859756] }"
    >
      <img class="pin" src="/img/marker.png" alt="" />
    </yandex-map-marker>
    <yandex-map-controls
      :settings="{
        position: 'bottom left',
        orientation: 'vertical',
      }"
    >
      <button class="btn-reset btn-map">111</button>
    </yandex-map-controls>
  </yandex-map>
</template>

<style lang="scss" scoped>
.pin {
  cursor: pointer;
  max-width: unset;
  object-fit: cover;
  width: 70px;
  height: 70px;
  @media screen and (max-width: 463px) {
    width: 50px;
    height: 50px;
  }
}
.btn-map {
  position: relative;
  z-index: 200000000000000;
  cursor: pointer;
  padding: 5px 20px;
  color: #fff;
  border-radius: 11px;
  background: #0e7477;
}
@media screen and (max-width: 564px) {
  .btn-map {
    font-size: 12px;
    padding: 0 0;
  }
}
</style>
