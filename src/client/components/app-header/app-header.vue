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
  display: flex;
  justify-content: center;
  padding: 12px 20px;
  color: #cdbbb4;
  background-color: rgb(28, 28, 28);
}

.app-header__title {
  font-size: 1rem;
  font-weight: 600;
}
</style>
