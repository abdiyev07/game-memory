<template>
  <div class="container">
    <div class="field">
      <div class="row">
        <Card 
          v-for="(card, index) in cards" 
          :key="index" 
          :card="card" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "GameField",
  computed: {
    cards() {
      return this.$store.getters.getCardsForGame;
    }
  },
  components: { Card }
};
</script>

<style lang="scss">
.field {
  min-height: 80vh;
  border: 1px solid rgb(120, 136, 120);
  border-radius: 0.8rem;
  padding: 0.6rem 2rem;
}
</style>
