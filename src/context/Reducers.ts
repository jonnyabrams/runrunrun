export const runnersReducer = (state: any, action: any) => {
  switch (action.type) {

    default:
      return state;
  }
}

export const filterReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SORT_BY_PRICE':
      return { ...state, sort: action.payload }
    case 'FILTER_BY_STATUS':
      return { ...state, byStatus: !state.byStatus }
    case 'FILTER_BY_SEARCH':
      return { ...state, searchQuery: action.payload }
    case 'CLEAR_FILTERS':
      return { 
        byStatus: false,  
        searchQuery: ""
      }
    default:
      return state
  }
}