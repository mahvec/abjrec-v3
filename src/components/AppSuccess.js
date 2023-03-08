import React, { useState, useEffect } from "react";
import Lottie from "react-lottie-player";
import Success from "../assets/successful.json";
import { useNavigate } from "react-router-dom";

const AppSuccess = () => {
  const [count, setCount] = useState(2);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount - 1);
    }, 3000);
    // when count is 0, navigate
    count === 0 && navigate("/job");
    // clean up the interval
    return () => clearInterval(interval);
  }, [count, navigate]);

  return (
    <div className=" w-screen h-screen flex justify items-center">
      <div className="bg-white text-center">
        <Lottie
          loop
          animationData={Success}
          play
          className="w-1/2 h-auto mx-auto"
        />
        <h2 className="text-[#03256C] text-2xl uppercase p-3 font-poppins font-bold">
          Application Successful
        </h2>
        <p className="p-4 text-[#03256C] cursor-pointer font-semibold">
          Redirecting you to HOMEPAGE in {count}
        </p>
      </div>
    </div>
  );
};

export default AppSuccess;
