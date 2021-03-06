const initialState = {
  drinkCategory: '',
  selectedDrinkId: '',
  searchDrinkText: '',
  senderName: '',
};

const drinks = (state = initialState, action) => {
  switch (action.type) {
    case 'drinks/set-drink-category':
      return {
        ...state,
        drinkCategory: action.payload.drinkCategory,
        senderName: action.payload.senderName,
      };
    case 'drinks/set-selected-drink-id':
      return {
        ...state,
        selectedDrinkId: action.payload.selectedDrinkId,
      };
    case 'drinks/set-search-text':
      return {
        ...state,
        searchDrinkText: action.payload.searchDrinkText,
        senderName: action.payload.senderName,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default drinks;
