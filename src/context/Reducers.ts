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
