const initialState = {
  drinkCategory: "",
  selectedDrinkId: [],
  searchDrinkText: "",
};

const drinks = (state = initialState, action) => {
  switch (action.type) {
    case 'drinks/set-drink-category':
      return {
        ...state,
        drinkCategory: action.payload.drinkCategory,
      };
    case 'drinks/set-selected-drink-id':
      return {
        ...state,
        selectedDrinkId: action.payload.selectedDrinkId,
      }
    case 'drinks/set-search-text':
      return {
        ...state,
        searchDrinkText: action.payload.searchDrinkText,
      } 
    default: {
      return {
        ...state,
      };
    }
  }
};

export default drinks;
