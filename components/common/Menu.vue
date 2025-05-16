<template>
  <div class="container">
    <div class="menu">
      <div class="menu__wrapper">
        <img class="menu__logo" src="/img/burger.png" alt="logo" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__logo {
    width: 40px;
    height: 40px;
  }
}
</style>
