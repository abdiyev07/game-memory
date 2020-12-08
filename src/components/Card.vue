<template>
  <div class="col-lg-2">
    <div 
      class="card" 
      @click="cardClick"
      :style="{cursor: isCardsClickable ? 'pointer' : 'not-allowed'}"
      >
      <i :class="card.isClicked ? card.className : 'fab fa-android'"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Card",
  props: {
    card: Object
  },

  computed: {
    ...mapGetters({
      firstClickedCard: "getFirstClickedCard",
      isCardsClickable: "isCardsClickable"
    })
  },

  methods: {
    ...mapMutations({
      setFirstClickedCard: "SET_FIRST_CLICKED_CARD",
      closeClickedCards: "CLOSE_CLICKED_CARDS",
      deleteClickedCards: "DELETE_CLICKED_CARDS",
      setTimerID: "SET_TIMER_ID",
      setTimer: "SET_TIMER",
      setCardsClickability: "SET_CARDS_CLICKABILITY"
    }),

    cardClick() {
      if (this.card.isClicked || !this.isCardsClickable) return;
      this.card.isClicked = true;
      this.$store.commit("TOGGLE_TIMER");
      if (this.$store.state.cards.isTimerStarted) {
        this.setFirstClickedCard(this.card.className);
        this.$toast.warning("У вас есть 5 секунд, чтобы найти совподающую карточку");
        this.startTimer();
      } else {
        this.checkClickedCards();
      }
    },

    checkClickedCards() {
      if (this.card.className === this.firstClickedCard) {
        this.$toast.success("ОТЛИЧНО!!! Вы нашли совпадающие карточки", {
          position: "top-center"
        });
        this.setCardsClickability(false);
        setTimeout(() => {
          this.setCardsClickability(true);
          this.deleteClickedCards();
        }, 2000);
      } else {
        this.$toast.error("Неверная карточка, попробуйте еще раз");
        this.closeClickedCards();
      }
      clearTimeout(this.$store.state.cards.timerID);
    },

    startTimer() {
      this.setTimerID(
        setTimeout(() => {
          this.$toast.error("Время вышло... Постарайтесь искать совподающую карточку быстрее");
          this.card.isClicked = false;
          this.setFirstClickedCard(null);
          this.setTimer(false);
        }, 5000)
      );
    }
  }
};
</script>

<style lang="scss">
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7.5rem;
  margin: 0.8rem 0;
  border: 1px solid black;
  border-radius: 0.8rem;

  & i {
    font-size: 4rem;
  }
}

.card .fa-android {
  color: green;
  font-size: 2rem;
}
</style>
