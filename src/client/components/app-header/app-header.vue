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
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

@media (min-width: 600px) {
  .app__header {
    padding-left: 48px;
  }
}

@media (min-width: 1200px) {
  .app__header {
    margin-left: 120px;
  }
}
</style>
