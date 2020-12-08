<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link class="" :to="{ name: 'Main' }">
          Главная страница
        </router-link>
      </li>
      <li class="nav__item">
        <router-link class="" :to="{ name: 'ResultsTable' }">
          Таблица результатов
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style lang="scss">
.nav {
  &__list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    padding: 1.2rem;
  }
}
</style>
