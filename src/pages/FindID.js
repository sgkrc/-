import React from "react";
import AuthTemplate from "../components/auth/AuthTemplate";
import FindIDForm from "../containers/auth/FindIDForm";

const FindID = () => {
  return (
    <AuthTemplate>
      <FindIDForm />
    </AuthTemplate>
  );
};

export default FindID;
