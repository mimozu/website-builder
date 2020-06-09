<template>
  <header class="app__header">
    <h1 class="app-header__title">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.app__header {
  position: absolute;
  z-index: 1;
  padding: 20px;
}

.app-header__title {
  font-size: 1rem;
}

@media (min-width: 600px) {
  .app__header {
    padding-left: 48px;
  }
}
</style>
