import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Button, Card, Input } from 'tarmor';
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    // Sign out logic here
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid,email, displayName,photoURL} = user;
            dispatch(addUser({uid,email, displayName,photoURL}));
            navigate("/browse");

        } else {
            dispatch(removeUser())
            navigate("/");
        }
      });

      return () => unsubscribe();
}, []);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black to-transparent w-full z-10 flex justify-between items-center">
      <img
        className="w-44"
        src={LOGO_URL}
        alt="logo"
      />
      {user && <div className="flex p-2">
        <img className="w-10" src={user?.photoURL} alt="icon" />
        <Button
          type="button"
          className="font-bold text-white cursor-pointer"
          onClick={handleSignOut}
        >
          (Sign Out)
        </Button>
      </div>}
    </div>
  );
};

export default Header;
