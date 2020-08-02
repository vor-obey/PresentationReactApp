import {ADD_EMAIL} from "./types";

export function fetchEmail(email) {
  return {
    type: ADD_EMAIL,
    payload: email
  }
}