import {GET_EMAIL} from "./user/typesActions";
import {takeLatest} from "redux-saga/effects";
import subscribeForNewsletters from "./user/userSaga";

export function* rootSaga() {
  yield takeLatest(GET_EMAIL, subscribeForNewsletters);
}