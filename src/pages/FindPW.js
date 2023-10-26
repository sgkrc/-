import React from "react";
import AuthTemplate from "../components/auth/AuthTemplate";
import FindPWForm from "../containers/auth/FindPWForm";
const FindPW = () => {
  return (
    <div>
      <div>
        <h1>비밀번호 찾기</h1>
        <AuthTemplate>
          <FindPWForm />
        </AuthTemplate>
      </div>
    </div>
  );
};

export default FindPW;
