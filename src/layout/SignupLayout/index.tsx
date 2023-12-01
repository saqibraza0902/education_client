import { URLS } from "@/utils/URLS";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignupLayout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const router = useRouter();

  const handleSignup = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your signup logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Phone Number:", phoneNumber);
    console.log("Date of Birth:", dob);
  };

  return (
    <div className="bg-[#002147] h-max py-10 flex items-center justify-center">
      <div className="bg-[#fdc800] p-8 rounded shadow-md lg:w-2/3">
        <h1 className="text-center text-2xl font-bold mb-6">
          Sign Up for Sikkha Education
        </h1>
        <form onSubmit={handleSignup}>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full lg:w-1/2 px-2 mb-4">
              <label className="block mb-2" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="w-full lg:w-1/2 px-2 mb-4">
              <label className="block mb-2" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full lg:w-1/2 px-2 mb-4">
              <label className="block mb-2" htmlFor="name">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="w-full lg:w-1/2 px-2 mb-4">
              <label className="block mb-2" htmlFor="email">
                Confirm Password:
              </label>
              <input
                type="password"
                id="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full lg:w-1/2 px-2 mb-4">
              <label className="block mb-2" htmlFor="name">
                Phone no:
              </label>
              <input
                type="number"
                id="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="w-full lg:w-1/2 px-2 mb-4">
              <label className="block mb-2" htmlFor="email">
                Date or Birth:
              </label>
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#002147] w-56 flex justify-center border-[#002147] border-[1px] text-[#fdc800] py-2 px-4 rounded cursor-pointer hover:bg-[#255caf]
           hover:text-[#fff] transition-all duration-500 "
            >
              Sign Up
            </button>
          </div>
          <p className="pt-2 text-sm">
            {`Already have an account? Log in `}
            <span
              onClick={() => router.push(URLS.LOGIN)}
              className="underline cursor-pointer"
            >
              here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupLayout;
