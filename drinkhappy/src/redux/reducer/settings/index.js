const initialState = {
  isLoading: false,
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case 'settings/handle-loading-state':
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default settings;
