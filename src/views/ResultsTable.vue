<template>
  <div class="results mt-5">
    <h3 class="results__title"> {{results.length ? 'Таблица результатов' : 'Результаты отсутствуют'}} </h3>
    <ul class="results__list" v-if="results.length">
      <li 
        class="results__list-item"
        v-for="(date, index) in results"
        :key="index"
        >
        [Игра #{{index+1}}]. Затрачено времени: {{date}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'ResultsTable',
  computed: {
    ...mapGetters({
      results: 'getResults'
    })
  }
}
</script>

<style lang="scss">
  .results {
    text-align: center;

    &__title {
      margin-bottom: 3rem;
      font-size: 1.2rem;
    }

    &__list {
      list-style: none;

      &-item {
        font-size: 0.9rem;
        margin-bottom: 1rem;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>