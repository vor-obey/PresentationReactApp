import {GET_EMAIL} from "./typesActions";

export function subscribeForNews(email) {
  return {
    type: GET_EMAIL,
    email
  }
}