<template>
  <div>
    <CommonMenu />
    <Header :colorbackground="color2" />
    <slot />
    <Footer :colorBackgroundFooter="color1" />
  </div>
</template>

<script lang="ts" setup>
const color1 = 'colorFooter'
const color2 = 'colorHeader'
</script>

<style scoped lang="scss">
.colorFooter {
  background: rgba(81, 125, 162, 0.6) 84.28%;
}
.colorHeader {
  background: rgba(81, 125, 162, 0.6) 84.28%;
}
</style>
