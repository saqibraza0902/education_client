import Input from "@/ui/form/Input";
import { URLS } from "@/utils/URLS";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/ui/form/form";
import api from "@/instance/api";
import { loginUser } from "@/store/slices/auth";
import { useAppDispatch } from "@/hooks/hooks";

const LoginSchema = z.object({
  email: z.string().min(1, "Email is required.").email("Invalid email."),
  password: z.string().min(1, "Password is required"),
});
const LoginLayout = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleLogin = async (values: z.infer<typeof LoginSchema>) => {
    try {
      const { data } = await api.post("/user/login", values);
      dispatch(loginUser({ token: data.token, user: data.user }));
      form.reset();
      router.push(URLS.HOME);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-[#002147] h-screen flex items-center justify-center">
      <div className=" bg-[#fdc800] p-8 rounded shadow-md lg:w-1/3">
        <h1 className="text-center text-2xl font-bold mb-6">
          Login to Sikkha Education
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLogin)}>
            <label>Username:</label>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <label>Password:</label>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button
              type="submit"
              className="w-full mt-5 bg-[#002147] text-[#fdc800] py-2 px-4 rounded cursor-pointer hover:bg-[#255caf]
           hover:text-[#fff] transition-all duration-500"
            >
              Login
            </button>
            <p className="pt-2 text-sm text-black">
              Dont have an account? Create new account{" "}
              <span className="underline cursor-pointer ">
                <span
                  className="text-black text-sm no-underline"
                  onClick={() => router.push(URLS.SIGNUP)}
                >
                  {" "}
                  here
                </span>
              </span>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginLayout;
