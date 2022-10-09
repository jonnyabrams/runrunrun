import { RaceType } from "../typings";

export const runnersReducer = (state: any, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const filterReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_BY_CONFIRMED":
      return { ...state, byConfirmed: !state.byConfirmed };
    case "FILTER_BY_PENDING":
      return { ...state, byPending: !state.byPending };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTERS":
      return {
        byConfirmed: false,
        byPending: false,
        searchQuery: "",
        sort: "",
      };
    default:
      return state;
  }
};

export const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty:1 }] }
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((race: RaceType) => race.id !== action.payload.id) }
    case "CHANGE_CART_QTY":
      return { ...state, cart: state.cart.filter((race: RaceType) => race.id === action.payload.id ? race.qty = action.payload.qty : race.qty) }
    default:
      return state
  }
}