export const actionTypes = {
  SET_LENGTH: "SET_LENGTH",
  SET_LOWERCASE: "SET_LOWERCASE",
  SET_UPPERCASE: "SET_UPPERCASE",
  SET_NUMBERS: "SET_NUMBERS",
  SET_SYMBOLS: "SET_SYMBOLS",
};

export const initialState = {
  length: 10,
  lowercase: true,
  uppercase: false,
  numbers: false,
  symbols: false,
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  const { lowercase, uppercase, numbers, symbols } = state;

  switch (type) {
    case actionTypes.SET_LENGTH: {
      return {
        ...state,
        length: payload,
      };
    }
    case actionTypes.SET_LOWERCASE: {
      if (!uppercase && !numbers && !symbols) return state;
      return {
        ...state,
        lowercase: !lowercase,
      };
    }
    case actionTypes.SET_UPPERCASE: {
      if (!lowercase && !numbers && !symbols) return state;
      return {
        ...state,
        uppercase: !uppercase,
      };
    }
    case actionTypes.SET_NUMBERS: {
      if (!lowercase && !uppercase && !symbols) return state;
      return {
        ...state,
        numbers: !numbers,
      };
    }
    case actionTypes.SET_SYMBOLS: {
      if (!lowercase && !uppercase && !numbers) return state;
      return {
        ...state,
        symbols: !symbols,
      };
    }
    default: {
      return state;
    }
  }
};
