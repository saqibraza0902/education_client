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
    <div className="bg-[#f9f9f9] flex h-screen px-12">
      <ProfileSidebar />
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
              className="w-full mt-5 font-semibold bg-[#002147] text-[#fdc800] py-2 px-4 rounded cursor-pointer hover:bg-[#fdc800] hover:text-[#002147] transition-all duration-500"
            >
              Submit
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProfileLayout;
