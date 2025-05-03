import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from 'react'
import {onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../Utils/userSlice'
import { useDispatch } from 'react-redux'
import { NetFLixLogo } from "../Utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
      return () => {
        unSubscribe();
      }
    });
  }, [dispatch, navigate]);

  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 z-20">
      {/* Netflix Logo */}
      <img src={NetFLixLogo} alt="Netflix Logo" className="w-40" />
      
      {/* User Icon + Sign Out */}
      {user && (
        <div className="flex items-center space-x-4">
          <img src={user.photoURL} alt="User Icon" className="w-10 h-10 rounded-full" />
          <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
