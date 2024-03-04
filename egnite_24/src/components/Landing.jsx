import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
} from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAapoRNH_Kk-m3hNoaCK3JEUofij03Jc1A",
  authDomain: "egnite24-login.firebaseapp.com",
  databaseURL: "https://egnite24-login-default-rtdb.firebaseio.com",
  projectId: "egnite24-login",
  storageBucket: "egnite24-login.appspot.com",
  messagingSenderId: "1046601159584",
  appId: "1:1046601159584:web:9fc363e38c1a1d87878ac5",
  measurementId: "G-8DN04L1KCQ",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get authentication instance
const auth = getAuth(app);

const Landing = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    photoURL: null,
    email: null,
    name: null,
  });
  const [timerValues, setTimerValues] = useState([
    { label: "DAYS", value: 0 },
    { label: "HOURS", value: 0 },
    { label: "MIN", value: 0 },
    { label: "SEC", value: 0 },
  ]);

  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const eventTime = new Date("2024-03-15T13:24:00").getTime();
    const timeRemaining = eventTime - now;
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return [
      { label: "DAYS", value: days },
      { label: "HOURS", value: hours },
      { label: "MIN", value: minutes },
      { label: "SEC", value: seconds },
    ];
  };

  useEffect(() => {
    setTimerValues(calculateTimeRemaining());

    const timerInterval = setInterval(() => {
      setTimerValues(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error("Error during Google sign-in:", error);
    }
  };

  useEffect(() => {
    const handleRedirect = async () => {
      try {
        const result = await getRedirectResult(auth);

        if (result && result.user) {
          console.log("Successfully signed in with Google:", result.user);
          setUserData(result.user);
          localStorage.setItem("userData", JSON.stringify(result.user));
        }

        if (userData) {
          history.replace("/about");
        }
      } catch (error) {
        console.error("Error during Google sign-in redirect:", error);
      }
    };

    handleRedirect();
  }, [auth, history, userData]);
  

  useEffect(() => {
    if (userData.email) {
      console.log("Redirecting to /about");
      window.location.href = "/about";
    }
  }, [userData]);

  return (
    <>
      <div className="min-h-96 mt-10 md:mt-16 lg:mt-20 xl:mt-20 mb-20 flex  ">
        {/* left  */}
        <div className="  z-20 w-full md:w-[60%] lg:w-[60%] xl:w-[60%] ">
          <div className="min-h-64 ">
            <h1 className="font-bold text-6xl md:text-6xl lg:text-7xl xl:text-8xl ">
              <span className="text-[#FB771B]">EGNITE'</span>24
            </h1>
            <p className="mt-4  text-base md:text-base lg:text-xl xl:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              animi magni commodi inventore eligendi, dolor debitis voluptatum.
              Esse iure itaque tempore? Nobis libero quidem ratione, soluta
              doloribus, deleniti totam dolorem aspernatur, id officiis fugiat.
              Lorem ipsum  dolor sit amet consectetur adipisicing elit. Nihil
              cupiditate expedita, a, ipsum magni alias, dolores quaerat qui
              explicabo officiis iste corrupti repellat rem? Eaque, culpa.
              Voluptatem architecto voluptatibus tenetur, fuga eius quas. Nobis,
              natus perspiciatis repellat quam ipsum ut?deleniti totam dolorem
              aspernatur, id officiis fugiat. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. N
            </p>
          </div>
          {/* timer */}
          <div className="mt-16 flex justify-center md:justify-normal lg:justify-normal xl:justify-normal items-center">
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              {timerValues.map((timer, index) => (
                <React.Fragment key={index}>
                  <div
                    className="flex flex-col p-2 font-semibold rounded-box text-[#FB771B]"
                  >
                    <span className="countdown flex justify-center font-semibold font-mono text-2xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl">
                      {timer.value}
                    </span>
                    {timer.label}
                  </div>
                  {index !== timerValues.length - 1 && (
                    <p
                      key={`separator-${index}`}
                      className="flex mb-8 sm:flex md:flex lg:flex xl:flex items-center text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-bold sm:font-extrabold md:font-extrabold lg:font-extrabold xl:font-extrabold"
                    >
                      :
                    </p>
                  )}
                </React.Fragment>
              ))}

            </div>
          </div>
          <div className=" mb-2 mt-6 md:mt-6 lg:mt-10 xl:mt-20  flex justify-center items-center">
            <button
              onClick={handleGoogleSignIn}
              className="rounded-lg px-6 py-3 bg-gradient-to-r from-[#FF8C00] to-[#FF0000] flex items-center justify-center font-medium text-white text-2xl shadow-md hover:shadow-lg transition duration-300"
              style={{ borderRadius: "5px" }}
            >
              Sign In with Google
            </button>


          </div>
        </div>
        {/* right */}
        <div className="z-10 w-[40%] hidden md:flex lg:flex xl:flex justify-center items-center border border-orange-900">
          {/* image */}
          <div>
            <img src="/logo.svg" className="h-32 w-40" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;