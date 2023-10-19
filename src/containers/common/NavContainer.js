import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBarElement from "../../components/common/NavBarElement";
import { logout } from "../../modules/user";

const NavContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return <NavBarElement user={user} onLogout={onLogout} />;
};

export default NavContainer;
