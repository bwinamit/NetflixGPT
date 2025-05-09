import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../Utils/userSlice';
import { useDispatch } from 'react-redux';
import { NetFLixLogo, SUPPORTED_LANGUAGES } from "../Utils/constants";
import { toggleGptSearch } from "../Utils/gptSlice";
import { setLanguage } from "../Utils/configSlice";


const Header = () => {
  const user = useSelector((store) => store.user);
  const ShowGptSearch = useSelector((store) => store.gpt.showGptSearch);


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };

  const handleToggleSearch = () => {
    dispatch(toggleGptSearch());
  };
  const handleLanguageChange = (event) => {

    // Dispatch an action to update the language in the Redux store or context
    dispatch(setLanguage(event.target.value));
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unSubscribe();
    };
  }, [dispatch, navigate]);

  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 z-20">
      {/* Netflix Logo */}
      <img src={NetFLixLogo} alt="Netflix Logo" className="w-40" />

      {/* User Icon + Sign Out */}
      {user && (
        <div className="flex items-center space-x-4">
         { ShowGptSearch && <select
           onChange={handleLanguageChange}
            className="bg-gray-800 text-white px-2 py-1 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>}
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded cursor-pointer"
            onClick={handleToggleSearch}
          >
            {ShowGptSearch ? "Home Page" : "Gpt Search"}
          </button>
          <img
            src={user.photoURL}
            alt="User Icon"
            className="w-10 h-10 rounded-full"
          />
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
