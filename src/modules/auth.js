import { handleActions, createAction } from "redux-actions";
import produce from "immer";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as authAPI from "../lib/api/auth";
//데이터 변경 상태 관리, 그에 따른 성공 실패 관리
const CHANGE_FIELD = "auth/CHANGE_FIELD"; //변경 필드
const INITIALIZE_FORM = "auth/INITIALIZE_FORM"; //초기화

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createRequestActionTypes("auth/REGISTER");

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes("auth/LOGIN");

const [FINDID, FINDID_SUCCESS, FINDID_FAILURE] =
  createRequestActionTypes("auth/FINDID");
// FINDID 가 기본 타입,
//나머지는 성공 실패 이를 auth에 케이스 별로 저장
const [FINDPW, FINDPW_SUCCESS, FINDPW_FAILURE] =
  createRequestActionTypes("auth/FINDPW");

export const changeField = createAction(
  CHANGE_FIELD, //type
  ({ form, key, value }) => ({
    form, // register , login , findid,findpw 도 추가
    key, // 입력필드 이름 id, password, passwordConfirm ,name, email
    value, // 실제 바꾸려는 값
  })
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form); // register / login

//회원가입 액션 만들기
export const register = createAction(
  REGISTER,
  ({ username, password, name, email }) => ({
    username,
    password,
    name,
    email,
  })
);
export const login = createAction(LOGIN, ({ username, password }) => ({
  username,
  password,
}));

// 아이디 찾기 액션 만들기
export const findid = createAction(FINDID, ({ name, email }) => ({
  name,
  email,
}));
// 비번 찾기
export const findpw = createAction(FINDPW, ({ username, email }) => ({
  username,
  email,
}));

// saga 생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
//findIDSaga를 생성
//authAPI는 api/auth.js에 있는 것을 의미
const findIDSaga = createRequestSaga(FINDID, authAPI.findID);
const findPWSaga = createRequestSaga(FINDPW, authAPI.findPW);
export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
  //코드 조각은 "FINDID" 액션이 디스패치될 때 findIDSaga 함수가 실행되고,
  //이를 통해 아이디찾기과 관련된 비동기 작업을 처리할 것임을 나타냅니다.
  //요청을 처리하는 동안 중복 요청을 방지하기 위해 takeLatest를 사용하고 있습니다.
  yield takeLatest(FINDID, findIDSaga);
  yield takeLatest(FINDPW, findPWSaga);
}

const initialState = {
  register: {
    username: "",
    password: "",
    passwordConfirm: "",
    name: "",
    email: "",
  },
  login: {
    username: "",
    password: "",
  },
  findid: {
    name: "",
    email: "",
  },
  findpw: {
    username: "",
    email: "",
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
    // 아이디 찾기 성공
    [FINDID_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 아이디 찾기 실패
    [FINDID_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    // 비번 찾기 성공
    [FINDPW_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 비번 찾기 실패
    [FINDPW_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState
);
export default auth;
