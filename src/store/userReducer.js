const defaultState = {
  user: {},
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...defaultState.user, ...action.payload };
    case "SET_ACTIVE":
      return { ...defaultState.user, activated: action.payload };
    default:
      return state;
  }
};

export const setUserInfo = (payload) => ({ type: "SET_USER", payload });
export const setActive = (payload) => ({ type: "SET_ACTIVE", payload });
