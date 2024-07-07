"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import NavBar from "@/components/Navbar";
import { PiPencilSimpleLine } from "react-icons/pi";
import ReviewrrsLoginForm from "@/components/ReviewrrsLoginForm";
import MerchantLoginForm from "@/components/MerchantLoginForm";
import Image from "next/image";
export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [button1Active, setButton1Active] = React.useState(false);
  const [button2Active, setButton2Active] = React.useState(true);

  const handleButton1Click = () => {
    setButton1Active(true);
    setButton2Active(false); // Set button 2 inactive
  };

  const handleButton2Click = () => {
    setButton2Active(true);
    setButton1Active(false); // Set button 1 inactive
  };
  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      const res = await axios.get("/api/users/me");
      if (res.data.data.isAdmin === true) {
        router.push(`/profile/${res.data.data._id}`);
      }
      if (res.data.data.isMerchant === true) {
        router.push(`/profile/${res.data.data._id}`);
      } else {
        router.push("/");
      }
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className=" min-h-screen py-2">
      <NavBar />

      <div className="py-16 max-w-screen-sm mx-auto  flex flex-col">
        <div className=" rounded-xl w-full mx-auto border my-2">
          <div className=" h-16 grid grid-cols-2">
            <button
              onClick={handleButton1Click}
              className={
                button1Active
                  ? `flex text-lg items-center justify-center gap-1 bg-[#D9D9D9] rounded-ss-xl`
                  : "flex text-lg items-center justify-center gap-1"
              }
            >
              <PiPencilSimpleLine className=" text-2xl" /> Reviewers
            </button>
            <button
              onClick={handleButton2Click}
              className={
                button2Active 
                  ? `flex text-lg items-center justify-center gap-1 bg-[#D9D9D9]  rounded-tr-xl`
                  : "flex text-lg items-center justify-center gap-1"
              }
            >
              <svg
                width="24"
                height="26"
                viewBox="0 0 34 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.96876 31.761H12.6888V35.001H26.2988C26.2988 35.001 25.7788 30.301 29.0188 26.251C31.5488 23.091 33.2288 19.281 32.9588 13.231C32.6888 7.19098 27.8588 1.64098 20.0988 1.05098C16.0488 0.74098 11.0388 1.95098 8.06876 5.01098C5.26876 7.89098 5.64876 11.441 5.22876 15.031C5.08876 16.241 -0.811236 23.011 1.54876 23.421C2.17876 23.531 3.86876 23.831 3.86876 23.831L4.37876 28.881C4.37876 28.881 4.65876 31.771 6.96876 31.771V31.761Z"
                  stroke="#9E9E9E"
                  stroke-width="2"
                  stroke-linejoin="round"
                />
              </svg>
              Merchant
            </button>
          </div>
          <div className=" pt-2 px-2 flex flex-col">
            <input
              className="p-2 border border-gray-300  mb-4 focus:outline-none focus:border-gray-600 text-black"
              id="email"
              type="text"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="email"
            />
            <input
              className="p-2 border border-gray-300  mb-4 focus:outline-none focus:border-gray-600 text-black"
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="password"
            />
          </div>
        </div>
        <button
          onClick={onLogin}
          className="py-2 px-24 mt-2 border w-full border-gray-300 bg-[#2C9512] font-bold hover:bg-green-800 text-white rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        >
          Login
        </button>
        <div className=" flex flex-row justify-between">
          <div>
            {" "}
            <input type="checkbox" name="AutoLogin" id="AutoLogin" /> Auto Login
          </div>
          <div>
            {" "}
            <Link href={"#"}>Find Id</Link> |{" "}
            <Link href={"#"}>Password Find </Link>{" "}
          </div>
        </div>
        <div className=" gap-4 flex flex-col my-4">
          <div className=" w-full border-2 py-1 text-xl rounded-lg flex flex-row items-center gap-48 px-3">
            <Image
              src={"/assets/Naver.webp"}
              alt="Naver Login"
              width={40}
              height={40}
            />{" "}
            <Link href={"#"}>Naver Login</Link>
          </div>
          <div className=" w-full border-2 py-1 text-xl rounded-lg flex flex-row items-center gap-44 px-3">
            <Image
              src={"/assets/Facebook.png"}
              alt="Facebook Login"
              width={40}
              height={40}
            />{" "}
            <Link href={"#"}>Facebook Login</Link>
          </div>
          <div className=" w-full border-2 py-1 text-xl rounded-lg flex flex-row items-center gap-48 px-3">
            <Image
              src={"/assets/Kakao.png"}
              alt="Kakao Login"
              width={40}
              height={40}
            />{" "}
            <Link href={"#"}>Kakao Login</Link>
          </div>
        </div>
        <div className=" flex flex-row justify-between gap-2 px-4">
          <Link
            href="/signup"
            className=" border-2 rounded-xl w-full flex items-center justify-center text-2xl gap-3"
          >
            <PiPencilSimpleLine className="text-4xl" />
            Reviewers <br /> Register
          </Link>
          <Link
            href="/signup"
            className=" border-2 rounded-xl w-full flex items-center justify-center text-2xl gap-3"
          >
            <svg
              width="34"
              height="36"
              viewBox="0 0 34 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.96876 31.761H12.6888V35.001H26.2988C26.2988 35.001 25.7788 30.301 29.0188 26.251C31.5488 23.091 33.2288 19.281 32.9588 13.231C32.6888 7.19098 27.8588 1.64098 20.0988 1.05098C16.0488 0.74098 11.0388 1.95098 8.06876 5.01098C5.26876 7.89098 5.64876 11.441 5.22876 15.031C5.08876 16.241 -0.811236 23.011 1.54876 23.421C2.17876 23.531 3.86876 23.831 3.86876 23.831L4.37876 28.881C4.37876 28.881 4.65876 31.771 6.96876 31.771V31.761Z"
                stroke="#9E9E9E"
                stroke-width="2"
                stroke-linejoin="round"
              />
            </svg>
            Merchant <br /> Register
          </Link>
        </div>
      </div>

      {/* <Link href="/signup">Visit Signup page</Link> */}
    </div>
  );
}
