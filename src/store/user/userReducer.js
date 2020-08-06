import {
  SUBSCRIBE_FOR_NEWSLETTERS_REQUESTING,
  SUBSCRIBE_FOR_NEWSLETTERS_SUCCESS,
  SUBSCRIBE_FOR_NEWSLETTERS_ERROR,
  CLOSE_MODAL_WINDOW
} from "./typesActions";

export const initialState = {
  loading: false,
  error: null,
  success: false
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case SUBSCRIBE_FOR_NEWSLETTERS_REQUESTING: {
      return {
        ...state,
        loading: true
      }
    }
    case SUBSCRIBE_FOR_NEWSLETTERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true
      }
    }
    case SUBSCRIBE_FOR_NEWSLETTERS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
        success: false
      }
    }

    case CLOSE_MODAL_WINDOW: {
      return {
        ...state,
        success: false,
      }
    }

    default:
      return state
  }
}