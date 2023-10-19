import { handleActions, createAction } from "redux-actions";
import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as authAPI from "../lib/api/auth";
const CHANGE_FIELD = "auth/CHANGE_FIELD"; //변경 필드
const INITIALIZE_FORM = "auth/INITIALIZE_FORM"; //초기화

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createRequestActionTypes("auth/REGISTER");

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes("auth/LOGIN");

export const changeField = createAction(
  CHANGE_FIELD, //type
  ({ form, key, value }) => ({
    form, // register , login
    key, // 입력필드 이름 id, password, passwordConfirm ,name, email
    value, // 실제 바꾸려는 값
  })
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form); // register / login

export const register = createAction(
  REGISTER,
  ({ id, password, name, email }) => ({
    id,
    password,
    name,
    email,
  })
);
export const login = createAction(LOGIN, ({ id, password }) => ({
  id,
  password,
}));

// saga 생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  register: {
    id: "",
    password: "",
    passwordConfirm: "",
    name: "",
    email: "",
  },
  login: {
    id: "",
    password: "",
  },
  auth: null,
  authError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value; // 예: state.register.id 바꾼다
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null, // 폼 전환 시 회원 인증 에러 초기화
    }),
    // 회원가입 성공
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 회원가입 실패
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    // 로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 로그인 실패
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState
);
export default auth;
