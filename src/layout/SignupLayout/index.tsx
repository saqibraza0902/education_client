import api from "@/instance/api";
import Input from "@/ui/form/Input";
import { Form, FormField, FormItem } from "@/ui/form/form";
import { FormControl, FormMessage } from "@/ui/form/form";
import { URLS } from "@/utils/URLS";
import { handleApiError } from "@/utils/handleApiErrors";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";
const profileSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().min(1, "Email is required.").email("Invalid email."),
  password: z.string().min(1, "Password is required"),
  confirmpassword: z.string().min(1, "Password is required"),
  phone: z.string().min(1, "Phone number is required"),
  dob: z.string().min(1, "DOB is required."),
});

const SignupLayout = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
      phone: "",
      dob: "",
    },
  });

  const handleSignup = async (values: z.infer<typeof profileSchema>) => {
    try {
      const { data } = await api.post("/user/signup", values);
      console.log(data);
      toast.success(data.mesage);
      form.reset();
    } catch (error) {
      const err = handleApiError(error);
      toast.error(err);
    }
  };

  return (
    <div className="bg-[#002147] h-max py-10 flex items-center justify-center">
      <div className="bg-[#fdc800] p-8 rounded shadow-md lg:w-2/3">
        <h1 className="text-center text-2xl font-bold mb-6">
          Sign Up for Sikkha Education
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSignup)}>
            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-full lg:w-1/2 px-2 mb-4">
                <label className="block mb-2" htmlFor="name">
                  Name:
                </label>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full lg:w-1/2 px-2 mb-4">
                <label className="block mb-2" htmlFor="email">
                  Email:
                </label>
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
              </div>
            </div>

            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-full lg:w-1/2 px-2 mb-4">
                <label className="block mb-2" htmlFor="name">
                  Password:
                </label>
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
              </div>
              <div className="w-full lg:w-1/2 px-2 mb-4">
                <label className="block mb-2" htmlFor="email">
                  Confirm Password:
                </label>
                <FormField
                  control={form.control}
                  name="confirmpassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-full lg:w-1/2 px-2 mb-4">
                <label className="block mb-2" htmlFor="name">
                  Phone no:
                </label>
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full lg:w-1/2 px-2 mb-4">
                <label className="block mb-2" htmlFor="email">
                  Date or Birth:
                </label>
                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
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
        </Form>
      </div>
    </div>
  );
};

export default SignupLayout;
