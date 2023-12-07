import React, { useState } from "react";
import ProfileSidebar from "../CommonLayout/ProfileSidebar";
import Input from "@/ui/form/Input";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { Form, FormControl, FormField } from "@/ui/form/form";
import { FormItem, FormMessage } from "@/ui/form/form";
import { useForm } from "react-hook-form";
import { ProfileSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ProfileCommon from "../CommonLayout/ProfileCommon";
import ModalCom from "@/ui/Components/Modal";
import { logoutAction } from "@/store/slices/auth/auth";
import { useRouter } from "next/navigation";
import { URLS } from "@/utils/URLS";
const ProfileLayout = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  console.log(user);
  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      // @ts-ignore
      dob: user?.dob,
    },
  });
  const handleSubmit = (values: z.infer<typeof ProfileSchema>) => {
    console.log(values);
  };
  const handleLogout = () => {
    dispatch(logoutAction());
    router.push(URLS.HOME);
  };
  return (
    <ProfileCommon>
      <div className="w-full flex h-screen justify-center ">
        <Form {...form}>
          <form
            className="w-2/3 space-y-5 p-10"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <div className="flex gap-2 w-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input {...field} placeholder="Name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input {...field} placeholder="Email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-2 w-full">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input {...field} placeholder="Phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        placeholder="Date or birth"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-center items-center flex-col gap-3 mt-5 ">
              <button
                type="submit"
                className="font-semibold bg-brand_blue-400 text-brand_yellow-500 w-72 py-2 px-4 rounded cursor-pointer hover:bg-brand_yellow-500 hover:text-brand_blue-400 transition-all duration-500"
              >
                Submit
              </button>
              <p className="text-sm text-brand_pink-500">
                Click{" "}
                <span
                  onClick={handleOpen}
                  className="underline text-blue-600 cursor-pointer"
                >
                  here
                </span>{" "}
                to Logout
              </p>
            </div>
          </form>
        </Form>
        <ModalCom
          handleClose={handleOpen}
          open={isOpen}
          text="Are you sure you want to logout"
          handleDel={() => handleLogout()}
        />
      </div>
    </ProfileCommon>
  );
};

export default ProfileLayout;
