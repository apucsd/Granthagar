"use client";
import Container from "@/components/ui/Container";
import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import { Button } from "@/components/ui/button";
import { loginUser } from "@/services/authActions/loginUser";
import { registerUser } from "@/services/authActions/registerUser";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { loginSchema, registerSchema } from "@/schema/validation.schema";
import { decodedToken } from "@/services/jwt.decode";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/authSlice";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [registerPage, setRegisterPage] = useState(false);
  // REGISTER USER FUNCTION
  const handleRegister = async (data: FieldValues) => {
    try {
      const res = await registerUser(data);
      if (res.success) {
        toast.success("Your account has created successfully", {
          duration: 2000,
        });
        const result = await loginUser({
          email: data?.email,
          password: data?.password,
        });
        if (result.success) {
          const user = decodedToken(res?.data?.accessToken);
          dispatch(
            setUser({
              user: user,
              token: res?.data?.accessToken,
            })
          );
          router.push("/dashboard");
        }
      } else {
        toast.error("This user already exits", {
          duration: 2000,
        });
      }
    } catch (error) {
      toast.error("Something went wrong while register", {
        duration: 2000,
      });
    }
  };

  //LOGIN USER FUNCTION
  const handleLogin = async (data: FieldValues) => {
    try {
      const res = await loginUser(data);
      if (res.success) {
        const user = decodedToken(res?.data?.accessToken);
        dispatch(
          setUser({
            user: user,
            token: res?.data?.accessToken,
          })
        );

        toast.success("Your account login successfully", {
          duration: 2000,
        });
        router.push("/dashboard");
      }
      if (res.error) {
        toast.error(res.error, {
          duration: 2000,
        });
      }
    } catch (error) {
      toast.error("Something went wrong while login", {
        duration: 2000,
      });
    }
  };
  return (
    <Container>
      <div className="w-full md:w-96 h-full my-10 lg:w-[800px] m-auto bg-white flex items-center relative overflow-hidden shadow-xl">
        {/* register form  */}

        <div
          className={`p-8 w-full ${
            registerPage
              ? "lg:translate-x-0"
              : "lg:-translate-x-full hidden lg:block"
          } duration-500`}
        >
          <h1 className="backdrop-blur-sm text-2xl text-primary lg:text-4xl pb-4">
            Register
          </h1>
          <CustomForm
            onSubmit={handleRegister}
            resolver={zodResolver(registerSchema)}
            defaultValues={{
              name: "",
              email: "",
              password: "",
            }}
          >
            <div className="space-y-5">
              <CustomInput
                name="name"
                required
                label="Your Full Name"
                type="text"
              />
              <CustomInput
                name="email"
                label="Your Email Address"
                type="email"
                required
              />
              <CustomInput
                name="password"
                label="Your password"
                type="password"
                required
              />
            </div>
            <Button type="submit" className="my-4 w-full">
              Register Now
            </Button>
          </CustomForm>
          <div className="mb-3 flex items-center justify-center gap-2 text-center">
            Already have an account?
            <Button
              type="button" // Add this line to explicitly set the button type
              variant="link"
              onClick={() => {
                setRegisterPage(!registerPage);
              }}
              className="underline font-semibold"
            >
              Login
            </Button>
          </div>
          <hr />
          {/* <Button
            variant="secondary"
            className="w-full items-center hover:text-primary"
          >
            <GoogleSvg /> Continue with Google
          </Button> */}
        </div>

        <div
          className={`hidden lg:block absolute w-1/2 h-full top-0 z-50 duration-500 overflow-hidden bg-black/20 ${
            registerPage ? "translate-x-full duration-500" : ""
          }`}
        >
          <Image src="/login.svg" className="object-cover h-full" alt="" fill />
        </div>
        {/* login form */}
        <div
          className={`p-8 w-full mr-0 ml-auto duration-500 ${
            registerPage ? "lg:translate-x-full hidden lg:block" : ""
          }`}
        >
          <h1 className="backdrop-blur-sm text-2xl text-primary lg:text-4xl pb-4">
            Login
          </h1>
          <CustomForm
            onSubmit={handleLogin}
            resolver={zodResolver(loginSchema)}
            defaultValues={{
              email: "granthagar@gmail.com",
              password: "111111",
            }}
          >
            <div className="space-y-5">
              <CustomInput
                name="email"
                label="Your Email Address"
                type="email"
              />
              <CustomInput
                name="password"
                label="Your password"
                type="password"
              />
            </div>
            <Button type="submit" className="my-4 w-full">
              Login Now
            </Button>
          </CustomForm>
          <div className="mb-3 flex justify-center items-center gap-2 text-center">
            Don&apos;t have an account?
            <Button
              type="button"
              variant="link"
              onClick={() => {
                setRegisterPage(!registerPage);
              }}
              className="underline font-semibold"
            >
              Register
            </Button>
          </div>
          {/* <Button
            variant="secondary"
            className="w-full items-center hover:text-primary"
          >
            <GoogleSvg /> Continue with Google
          </Button> */}
        </div>
      </div>
    </Container>
  );
};
export default LoginPage;
