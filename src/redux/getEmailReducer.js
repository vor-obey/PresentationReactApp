import {ADD_EMAIL} from "./types";

const initialState = {
  email: [],
}

export const getEmailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMAIL:
      return {...state, email: state.email.concat([action.payload])}
    default: return state;
  }

}