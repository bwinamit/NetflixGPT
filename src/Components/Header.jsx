import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();
  const handleSignOut = () => {
    // Logic to sign out the user
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");

      })
      .catch((error) => {
        // An error happened.
        console.error("Sign-out error:", error);
      });
  };
  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4">
      {/* Netflix Logo */}
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
        className="w-40"
      />

      {/* User Icon + Sign Out */}
    {user &&  <div className="flex items-center space-x-4">
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
      </div>}
    </div>
  );
};

export default Header;
