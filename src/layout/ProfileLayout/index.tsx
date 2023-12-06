import React from "react";
import ProfileSidebar from "../CommonLayout/ProfileSidebar";
import Input from "@/ui/form/Input";
import { useAppSelector } from "@/hooks/hooks";
import { Form, FormControl, FormField } from "@/ui/form/form";
import { FormItem, FormMessage } from "@/ui/form/form";
import { useForm } from "react-hook-form";
import { ProfileSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ProfileCommon from "../CommonLayout/ProfileCommon";
const ProfileLayout = () => {
  const { user } = useAppSelector((state) => state.auth);
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
  return (
    <ProfileCommon>
      <div className="w-full flex justify-center items-center">
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
            <button
              type="submit"
              className=" mt-5 font-semibold bg-brand_blue-400 text-brand_yellow-500 w-72 py-2 px-4 rounded cursor-pointer hover:bg-brand_yellow-500 hover:text-brand_blue-400 transition-all duration-500"
            >
              Submit
            </button>
          </form>
        </Form>
      </div>
    </ProfileCommon>
  );
};

export default ProfileLayout;
