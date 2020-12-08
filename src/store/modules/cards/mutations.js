export const SET_GAME_CARDS = (state, payload) => (state.cardsForGame = [...payload]);
export const TOGGLE_TIMER = state => (state.isTimerStarted = !state.isTimerStarted);
export const SET_TIMER = (state, payload) => (state.isTimerStarted = payload);
export const SET_TIMER_ID = (state, payload) => (state.timerID = payload);
export const SET_FIRST_CLICKED_CARD = (state, payload) => (state.firstClickedCard = payload);

export function CLOSE_CLICKED_CARDS(state) {
  state.cardsForGame.forEach(el => {
    if (!el.isClicked) return;
    el.isClicked = false;
  });
}

export function DELETE_CLICKED_CARDS(state) {
  state.cardsForGame = state.cardsForGame.filter(el => el.className !== state.firstClickedCard);
};

export const SET_CARDS_CLICKABILITY = (state, payload) => state.isCardsClickable = payload;
