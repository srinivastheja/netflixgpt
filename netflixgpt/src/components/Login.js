import React, { useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { validation } from "../utils/Validate";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [issign, setIssign] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonSubmit = () => {
    const message = validation(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!issign) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          Navigate("/browse"); // Should be navigate instead of Navigate
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://media.licdn.com/dms/image/C4D03AQGcOvgOrjppag/profile-displayphoto-shrink_400_400/0/1653636548058?e=1699488000&v=beta&t=yQ0T-17nKAyslTstp6apny6HfdSFFw3YbqvEIHegNAA",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toLoginOrSignup = () => {
    setIssign(!issign);
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='logo'
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70'
      >
        <h1 className='font-bold text-3xl py-4'>
          {issign ? "Sign In" : "Sign Up"}
        </h1>
        {!issign && (
          <input
            ref={name}
            type='text'
            placeholder='Full Name'
            className='p-2 my-4 w-full bg-gray-800 rounded-lg'
          />
        )}
        <input
          ref={email}
          type='text'
          placeholder='email'
          className='p-2 my-4 w-full bg-gray-800 rounded-lg'
        />
        <input
          ref={password}
          type='password'
          placeholder='password'
          className='p-2 my-4 w-full bg-gray-800 rounded-lg'
        />
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button
          className='p-4 my-6 bg-red-700 w-full rounded-lg'
          onClick={handleButtonSubmit} // Corrected function name
        >
          {issign ? "Sign In" : "Sign Up"}
        </button>
        <p className='py-4 cursor-pointer' onClick={toLoginOrSignup}>
          {issign ? "New user? Sign Up" : "Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
