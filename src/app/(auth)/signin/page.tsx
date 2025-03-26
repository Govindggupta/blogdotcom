"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function handleButtonClick(string1: String , string2: String) {
  console.log(string1, string2);
  alert("SignIn button clicked");
  // Add your logic here
}

export default function SignIn() {
  const router = useRouter();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <>
       <div className="h-screen w-screen flex justify-center items-center">
        <div className="h-fit w-fit p-4 border-black border-2 flex flex-col items-center">
          <h1>SignUp Page</h1>
          <input
            type="text"
            placeholder="Enter your email"
            className="border-2 border-black rounded-lg p-2 m-2"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="border-2 border-black rounded-lg p-2 m-2"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <button
            className="border-2 bg-blue-400 border-black rounded-lg p-2 m-2 cursor-pointer"
            onClick={() => handleButtonClick(email, password)}
          >
            Sign Up
          </button>
            <button
            className="text-gray-400 cursor-pointer"
            onClick={() => {
              
              router.push("/signup");
            }}
            >
            SignUp Instead
            </button>
        </div>
      </div>
    </>
  );
}
