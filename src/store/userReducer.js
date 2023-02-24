const defaultState = {
  user: {},
  user_auth: false,
  basket: {},
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "AUTH":
      return { ...state, user_auth: true };
    case "SET_BASKET":
      return { ...state, basket: action.payload };
    default:
      return state;
  }
};

export const setUserInfo = (payload) => ({ type: "SET_USER", payload });
export const setActive = (payload) => ({ type: "SET_ACTIVE", payload });
export const userAuth = () => ({ type: "AUTH" });
export const setBasket = (payload) => ({ type: "SET_BASKET", payload });
