"use client";
import Container from "@/components/ui/Container";
import CustomInput from "@/components/ui/CustomInput";
import { Button } from "@/components/ui/button";
import GoogleSvg from "@/svgs/GoogleSvg";
import Image from "next/image";
import { useState } from "react";
const LoginPage = () => {
  const [register, setRegister] = useState(false);
  return (
    <Container>
      <div className="w-full md:w-96 h-full my-10 lg:w-[800px] mx-auto bg-white flex items-center relative overflow-hidden shadow-xl">
        {/* register form  */}
        <form
          className={`p-8 w-full ${
            register
              ? "lg:translate-x-0"
              : "lg:-translate-x-full hidden lg:block"
          } duration-500`}
        >
          <h1 className="backdrop-blur-sm text-2xl text-primary lg:text-4xl pb-4">
            Register
          </h1>
          <div className="space-y-5">
            <CustomInput name="name" label="Your Full Name" type="text" />
            <CustomInput name="email" label="Your Email Address" type="email" />
            <CustomInput
              name="password"
              label="Your password"
              type="password"
            />
          </div>
          <Button className="my-4 w-full">Register Now</Button>
          <div className="mb-3 flex items-center justify-center gap-2 text-center">
            Already have an account?
            <Button
              type="button" // Add this line to explicitly set the button type
              variant="link"
              onClick={() => {
                setRegister(!register);
              }}
              className="underline font-semibold"
            >
              Login
            </Button>
          </div>
          <hr />
          <Button
            variant="secondary"
            className="w-full items-center hover:text-primary"
          >
            <GoogleSvg /> Continue with Google
          </Button>
        </form>

        <div
          className={`hidden lg:block absolute w-1/2 h-full top-0 z-50 duration-500 overflow-hidden bg-black/20 ${
            register ? "translate-x-full duration-500" : ""
          }`}
        >
          <Image src="/login.svg" className="object-cover h-full" alt="" fill />
        </div>
        {/* login form */}
        <form
          className={`p-8 w-full mr-0 ml-auto duration-500 ${
            register ? "lg:translate-x-full hidden lg:block" : ""
          }`}
        >
          <h1 className="backdrop-blur-sm text-2xl text-primary lg:text-4xl pb-4">
            Login
          </h1>
          <div className="space-y-5">
            <CustomInput name="email" label="Your Email Address" type="email" />
            <CustomInput
              name="password"
              label="Your password"
              type="password"
            />
          </div>
          <Button type="button" className="my-4 w-full">
            Login Now
          </Button>
          <div className="mb-3 flex justify-center items-center gap-2 text-center">
            Don&apos;t have an account?
            <Button
              type="button"
              variant="link"
              onClick={() => {
                setRegister(!register);
              }}
              className="underline font-semibold"
            >
              Register
            </Button>
          </div>

          <Button
            variant="secondary"
            className="w-full items-center hover:text-primary"
          >
            <GoogleSvg /> Continue with Google
          </Button>
        </form>
      </div>
    </Container>
  );
};
export default LoginPage;
