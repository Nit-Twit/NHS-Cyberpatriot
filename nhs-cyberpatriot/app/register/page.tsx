"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { useFormState } from "react-dom";
import { registerUser } from "@/app/lib/actions";
import Link from "next/link";

const playfair = Playfair_Display({ weight: ["500"], subsets: ["latin"] });

const initalState = {
  message: null,
};

export default function Page() {
  const [state, formAction] = useFormState(registerUser, null);

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <title>Create an account</title>
      <Image
        alt="bg"
        fill
        src="/login-bg.jpg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="z-0 blur-lg"
      />
      <div className="bg-zinc-700 opacity-75 w-full h-full absolute left-0 top-0"></div>
      <div className="flex flex-row">
        <div className="w-[25vw] h-[90vh] opacity-100 rounded-l-lg z-10 bg-gradient-to-b from-blue-700 to-blue-500 border-zinc-800 border-1 shadow-inner flex flex-col justify-center items-center">
          <h1
            className={`${playfair.className} my-10 text-4xl border-b-2 pb-2 px-4`}
          >
            Welcome
          </h1>
          <p className="text-lg mb-2 text-center mx-6">
            To sign up, your team captain needs to whitelist your email first.
            If that hasn't happened yet, please talk to them before proceeding.
          </p>
        </div>
        <div className="w-[30vw] max-h-[90vh] text-black first-letter:h-[90vh] opacity-100 rounded-r-lg z-10 bg-blue-50 border-zinc-800 border-1 shadow-inner flex flex-col justify-center items-center">
          <h1
            className={`${playfair.className} text-3xl my-8 pb-2 px-4 border-b-2 border-black`}
          >
            Register
          </h1>
          <p className="h-[1.5rem] text-red-600">‎{state?.message}‎</p>
          <form action={formAction} className="flex flex-col gap-2">
            <input
              required
              type="email"
              name="email"
              placeholder="email"
              className={`px-5 py-2 bg-white rounded-md border-[1.5px] border-black placeholder:text-black`}
            />
            <input
              required
              type="text"
              name="name"
              placeholder="legal name"
              className={`px-5 py-2 autofill:bg-yellow-200 bg-white rounded-md border-[1.5px] border-black placeholder:text-black`}
            />
            <input
              required
              type="text"
              name="username"
              placeholder="username"
              className={`px-5 py-2 bg-white rounded-md border-[1.5px] border-black placeholder:text-black`}
            />
            <input
              required
              type="password"
              name="password"
              placeholder="password"
              className={`px-5 py-2 bg-white rounded-md border-[1.5px] border-black placeholder:text-black`}
            />
            <input
              required
              type="password"
              name="passwordReEnter"
              placeholder="re-enter password"
              className={`px-5 py-2 bg-white rounded-md border-[1.5px] border-black placeholder:text-black`}
            />
            <button
              type="submit"
              className="my-8 px-5 py-2 border-[1.5px] border-transparent rounded-md hover:border-[1.5px] hover:border-black active:border-transparent bg-blue-500 text-white"
            >
              Sign Up
            </button>
            <div className="flex flex-row gap-1">
              <h1>Already have an account?</h1>
              <Link className="font-semibold" href={"/login"}> Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
