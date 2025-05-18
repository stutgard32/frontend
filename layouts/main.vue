<template>
  <div>
    <CommonMenu class="default__menu" />
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.default__menu {
  @media screen and (max-width: 639px) {
    display: none;
  }
}
</style>
