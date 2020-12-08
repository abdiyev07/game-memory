<template>
  <div id="app">
    <app-header v-show="!gameStatus" />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  computed: {
    gameStatus() {
      return this.$store.getters.getGameStatus;
    }
  },
  components: {
    "app-header": AppHeader
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 10px;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.button {
  background-color: #fff;
  padding: 0.6rem 1rem;
  cursor: pointer;
  outline: none;
}

a {
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;

  &.router-link-exact-active {
    color: green;
  }
}
</style>
