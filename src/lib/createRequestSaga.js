import { call, put } from "redux-saga/effects";
import { startLoading, finishLoading } from "../modules/loading";
// 비동기 요청에 대한 액션을 처리하는 데 사용됩니다.
//이 함수는 요청을 시작하고, 성공 또는 실패에 따라 액션을 디스패치하며, 로딩 상태를 관리하는 데 도움이 됩니다.

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type)); // 로딩 시작
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type)); // 로딩 끝
  };
}
