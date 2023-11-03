//사용자 상태를 담을 user 리덕스 모듈
<<<<<<< HEAD

=======
// register 라는 이름이 붙은 부분은 거의 다 형이 만든 CHECK 함수를 보고 참고해서 따라 만든 부분임
>>>>>>> ca4d79aed6f987ec1ea09a9f07e554afe7275bed
import { createAction, handleActions } from "redux-actions";
import { takeLatest, call } from "redux-saga/effects";
import * as authAPI from "../lib/api/auth";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";

const TEMP_SET_USER = "user/TEMP_SET_USER"; // 새로고침 이후 임시 로그인 처리
// 회원 정보 확인
const [REGISTER_CHECK, REGISTER_CHECK_SUCCESS, REGISTER_CHECK_FAILURE] =
  createRequestActionTypes("user/REGISTER_CHECK");
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] =
  createRequestActionTypes("user/CHECK");
// 회원가입 한 후에 정보 확인
const [REGISTER_CHECK, REGISTER_CHECK_SUCCESS, REGISTER_CHECK_FAILURE] =
  createRequestActionTypes("user/REGISTER_CHECK");
const LOGOUT = "user/LOGOUT";
export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const check = createAction(CHECK);
<<<<<<< HEAD
//export const check = createAction(CHECK, (username) => ({ username }));
export const register_check = createAction(REGISTER_CHECK);
=======
export const register_check = createAction(REGISTER_CHECK)
>>>>>>> ca4d79aed6f987ec1ea09a9f07e554afe7275bed
export const logout = createAction(LOGOUT);

const checkSaga = createRequestSaga(CHECK, authAPI.check);
<<<<<<< HEAD
// const regsitercheckSaga = createRequestSaga(
//   REGISTER_CHECK,
//   authAPI.register_check
// );
=======
const regsitercheckSaga = createRequestSaga(REGISTER_CHECK, authAPI.register_check);
>>>>>>> ca4d79aed6f987ec1ea09a9f07e554afe7275bed

function checkFailureSaga() {
  try {
    localStorage.removeItem("user"); // localStorage 에서 user 제거하고
  } catch (e) {
    console.log("localStorage is not working");
  }
}
// function registercheckFailureSaga() {
//   try {
//     localStorage.removeItem("user"); // localStorage 에서 user 제거하고
//   } catch (e) {
//     console.log("localStorage is not working");
//   }
// }

function registercheckFailureSaga() {
  try {
    localStorage.removeItem("user"); // localStorage 에서 user 제거하고
  } catch (e) {
    console.log("localStorage is not working");
  }
}

function* logoutSaga() {
  try {
    yield call(authAPI.logout); // logout API 호출
    localStorage.removeItem("user"); // localStorage 에서 user 제거
  } catch (e) {
    console.log(e);
  }
}
export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
<<<<<<< HEAD
  //yield takeLatest(REGISTER_CHECK_FAILURE, registercheckFailureSaga);
=======
  yield takeLatest(REGISTER_CHECK, regsitercheckSaga);
  yield takeLatest(REGISTER_CHECK_FAILURE, registercheckFailureSaga);
>>>>>>> ca4d79aed6f987ec1ea09a9f07e554afe7275bed
}

const initialState = {
  user: null,
  checkError: null,
};

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
<<<<<<< HEAD
    // [REGISTER_CHECK_SUCCESS]: (state, { payload: user }) => ({
    //   ...state,
    //   user,
    //   checkError: null,
    // }),
    // [REGISTER_CHECK_FAILURE]: (state, { payload: error }) => ({
    //   ...state,
    //   user: null,
    //   checkError: error,
    // }),
=======
    [REGISTER_CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [REGISTER_CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
>>>>>>> ca4d79aed6f987ec1ea09a9f07e554afe7275bed
    [LOGOUT]: (state) => ({
      ...state,
      user: null,
    }),
  },
  initialState
);
