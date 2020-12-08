<template>
  <div class="main mt-5">
    <div class="start" v-show="!isGameStarted">
      <button class="button start__button" @click="startGame">
        Начать игру
        <i class="fab fa-android"></i>
      </button>
    </div>

    <template v-if="isGameStarted">
      <div class="time-tracker m-3" ref="timeTracker">
        {{hours | timeFilter}} : {{minutes | timeFilter}} : {{seconds | timeFilter}}
      </div>
      <game-field @new-game="startGame" />
    </template>
  </div>
</template>

<script>
import GameField from "@/components/GameField";
import { mapGetters } from "vuex";

export default {
  name: "Main",
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      timeTrackerID: null,
    }
  },
  computed: {
    ...mapGetters({
      isGameStarted: "getGameStatus",
      cardsClassNames: "getCardsClassNames",
      cardsForGame: "getCardsForGame"
    })
  },

  methods: {
    startGame() {
      const arr = JSON.parse(JSON.stringify(this.cardsClassNames));
      this.shuffle(arr);
      this.$store.commit("SET_GAME_CARDS", arr);
      this.$store.commit("SET_GAME_STATUS", true);
      this.startTimeTracker();
    },

    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let t = array[i];
        array[i] = array[j];
        array[j] = t;
      }
    },

    startTimeTracker() {
      this.hours = this.minutes = this.seconds = 0;
      this.timeTrackerID = setInterval(this.getTime, 1000);
    },

    stopTimeTracker() {
      if (this.timeTrackerID) {
        clearInterval(this.timeTrackerID);
      }
    },

    getTime() {
      this.seconds++;
      if (this.seconds > 59) {
        this.minutes++;
        this.seconds = 0;
      }

      if (this.minutes > 59) {
        this.hours++;
        this.minutes = 0;
      }
    },
  },

  filters: {
    timeFilter(value) {
      return value > 9 ? value : `0${value}`;
    },
  },

  watch: {
    cardsForGame(newArray) {
      if (newArray.length) return;
      this.stopTimeTracker();
      this.$store.commit("SET_GAME_STATUS", false);
      this.$toast.success("ВЫ ВЫИГРАЛИ!!! ПОЗДРАВЛЯЕМ!!!", {
        position: "top-center"
      });
      this.$store.commit("PUSH_GAME_RESULT", this.$refs.timeTracker.innerHTML.trim());
    }
  },

  components: {
    "game-field": GameField
  }
};
</script>

<style lang="scss">
.start {
  text-align: center;

  &__button {
    font-size: 1.6rem;
    border: 1px solid green;
    border-radius: 0.8rem;
    color: green;
  }
}

.time-tracker {
  text-align: center;
  font-size: 1.2rem;
  font-weight: 800;
}
</style>
