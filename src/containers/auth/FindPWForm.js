import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeField, initializeForm, findpw } from "../../modules/auth";
import { useNavigate } from "react-router-dom";
import { check } from "../../modules/user";
import FindAuthForm from "../../components/auth/FindAuthForm";

const FindPWForm = ({ history }) => {
  const [error, setError] = useState(null);
  const [foundPW, setFoundPW] = useState(null); // 찾은 비밀번호를 저장할 상태
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    // auth->modules에서 auth.js 파일에 있는
    form: auth.findpw, // auth에서 loning 모듈을 가져옴
    auth: auth.auth, // auth에서 auth 가져옴
    authError: auth.authError,
    user: user.user,
  }));

  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "findpw",
        key: name,
        value,
      })
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, email } = form;
    dispatch(findpw({ username, email }));
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  // 이 부분 수정해서 pw 찾기로
  useEffect(() => {
    dispatch(initializeForm("findpw"));
  }, [dispatch]);
  // useEffect로 로그인할 때 성공 실패 여부 확인
  useEffect(() => {
    if (authError) {
      console.log("오류 발생");
      console.log(authError);
      setError("비밀번호 찾기 실패");
      return;
    }
    if (auth) {
      console.log("비밀번호 찾기 성공");
      setFoundPW(auth.userPW); // 찾은 비밀번호를 상태에 저장
      dispatch(check());
    }
  }, [auth, authError, dispatch]);
  const navigate = useNavigate();
  //id 를 보여주는 화면 만들기
  useEffect(() => {
    if (user) {
      navigate("/Welcome");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("localStorage is not working");
      }
    }
  }, [history, user]);
  return (
    <div>
      {/* 비밀번호를 표시하는 부분 */}
      {foundPW && <div>찾은 비밀번호: {foundPW}</div>}
      <FindAuthForm
        type="password"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
      />
    </div>
  );
};

export default FindPWForm;
