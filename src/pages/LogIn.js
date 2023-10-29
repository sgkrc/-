import React from "react";
import AuthTemplate from "../components/auth/AuthTemplate";
import LoginForm from "../containers/auth/LoginForm";

const LogIn = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};

export default LogIn;

// import React, { useEffect, useState } from "react";
// import AuthForm from "../components/auth/AuthForm";
// import AuthTemplate from "../components/auth/AuthTemplate";
// import LoginForm from "../containers/auth/LoginForm";
// import { useDispatch, useSelector } from "react-redux";
// import { changeField, initializeForm, login } from "../modules/auth";

// const LogIn = ({ history, setIsLoggedIn }) => {
//   const [error, setError] = useState(null);
//   const dispatch = useDispatch();
//   const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
//     form: auth.login,
//     auth: auth.auth,
//     authError: auth.authError,
//     user: user.user,
//   }));

//   // 인풋 변경 이벤트 핸들러
//   const onChange = (e) => {
//     const { value, name } = e.target;
//     dispatch(
//       changeField({
//         form: "login",
//         key: name,
//         value,
//       })
//     );
//   };

//   // 폼 등록 이벤트 핸들러
//   const onSubmit = (e) => {
//     e.preventDefault();
//     const { username, password } = form;
//     dispatch(login({ username, password }));
//   };

//   // 컴포넌트가 처음 렌더링 될 때 form을 초기화함
//   useEffect(() => {
//     dispatch(initializeForm("login"));
//   }, [dispatch]);

//   // useEffect로 로그인할 때 성공 실패 여부 확인
//   useEffect(() => {
//     if (authError) {
//       console.log("오류 발생");
//       console.log(authError);
//       setError("로그인 실패");
//       return;
//     }

//     if (auth) {
//       console.log("로그인 성공");
//       // 로그인 성공 시 부모 컴포넌트로 로그인 상태를 전달
//       setIsLoggedIn(true);
//     }
//   }, [auth, authError, dispatch, setIsLoggedIn]);

//   return (
//     <AuthTemplate>
//       <LoginForm />
//     </AuthTemplate>
//     // <AuthForm
//     //   type="login"
//     //   form={form}
//     //   onChange={onChange}
//     //   onSubmit={onSubmit}
//     //   error={error}
//     // />
//   );
// };

// export default LogIn;


// ---------이건 최후의 수단-----------------
// import React from "react";
// import AuthTemplate from "../components/auth/AuthTemplate";
// import LoginForm from "../containers/auth/LoginForm";
// import { useNavigate } from "react-router-dom"; // useNavigate 임포트

// const LogIn = () => {
//   const navigate = useNavigate(); // useNavigate 훅 사용

//   // LoginForm에서 로그인 성공 시 호출할 함수
//   const handleLoginSuccess = () => {
//     navigate("/Welcome"); // Welcome 페이지로 이동
//   };

//   return (
//     <AuthTemplate>
//       <LoginForm onLoginSuccess={handleLoginSuccess} /> {/* onLoginSuccess 콜백 전달 */}
//     </AuthTemplate>
//   );
// };

// export default LogIn;
