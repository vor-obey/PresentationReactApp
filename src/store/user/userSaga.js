import {put} from "redux-saga/effects";
import {
  CLOSE_MODAL_WINDOW,
  SUBSCRIBE_FOR_NEWSLETTERS_ERROR,
  SUBSCRIBE_FOR_NEWSLETTERS_REQUESTING,
  SUBSCRIBE_FOR_NEWSLETTERS_SUCCESS
} from "./typesActions";
import {ModalApi, UserApi} from "../../api/user/userApi";

function* subscribeForNewsletters({email}) {
  try {
    yield put({type: SUBSCRIBE_FOR_NEWSLETTERS_REQUESTING});
    const {success} = yield UserApi.subscribeForNews(email);
    yield put({type: SUBSCRIBE_FOR_NEWSLETTERS_SUCCESS, success});
    const window = yield ModalApi.hideModalWindow();
    yield put({type: CLOSE_MODAL_WINDOW, window});
  } catch (error) {
    yield put({type: SUBSCRIBE_FOR_NEWSLETTERS_ERROR, error: "ERROR"})
  }
}

export default subscribeForNewsletters;

