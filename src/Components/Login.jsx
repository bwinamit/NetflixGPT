import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidation } from "../Utils/Validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { UserIcon } from "../Utils/constants";


const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch()

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleButtonClick = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidation(
      email.current.value,
      password.current.value,
      fullName.current ? fullName.current.value : ""  
    );
    setErrorMessage(message);
    if (message) return
    if (!signInForm) {
      // Sign up logic here
      createUserWithEmailAndPassword(auth,  email.current.value,
        password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: fullName.current.value, photoURL: UserIcon
    }).then(() => {
      // Profile updated!
      const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
      
      
    }).catch((error) => {
      // An error occurred
      console.log(error)
      // ...
    });
    
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode+"-"+errorMessage)
    // ..
  });
      
    } else {
      // Sign in logic here
      signInWithEmailAndPassword(auth, email.current.value,
        password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
        
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode+"-"+errorMessage)
        });
      
      
    }
  }

  const toggleSignInForm = () => {
    setSignInForm(!signInForm);
  };
  return (
    <div className="relative h-screen bg-cover bg-center">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg"
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black bg-opacity-100 p-8 rounded-lg w-full max-w-md text-white z-10"
        >
          <h2 className="text-3xl font-bold mb-6">
            {signInForm ? "Sign In" : "Sign Up"}
          </h2>

          <div className="mb-4">
            {!signInForm && (
              <div className="mb-4">
                <input
                  ref={fullName}
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            )}

            <input
              ref={email}
              type="email"
              placeholder="Email or phone number"
              className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="mb-4">
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}

          <button
            onClick={handleButtonClick}
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 p-3 rounded font-semibold mb-4"
          >
            {signInForm ? "Sign In" : "Sign Up"}
          </button>

          <div className="flex justify-between items-center text-sm text-gray-400">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>

          <div className="mt-6 text-gray-400 text-sm">
            {signInForm ? "New to Netflix?" : "Already have an account?"}
            <a
              onClick={toggleSignInForm}
              href="#"
              className="text-white hover:underline"
            >
              {signInForm ? " Sign up now." : " Sign in now"}
            </a>
            .
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
