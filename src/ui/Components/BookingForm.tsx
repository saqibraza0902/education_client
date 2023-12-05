import React from "react";
import { Form, FormControl, FormField } from "../form/form";
import { FormItem, FormMessage } from "../form/form";
import { BookingSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Input from "../form/Input";
import TextArea from "../form/TextArea";
const BookingForm = () => {
  const form = useForm<z.infer<typeof BookingSchema>>({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      name: "",
      email: "",
      rollno: "",
      department: "",
      message: "",
    },
  });
  const handleSubmit = async (values: z.infer<typeof BookingSchema>) => {
    console.log(values);
  };
  return (
    <div className="bg-white h-max p-4 lg:p-10">
      <div className="flex flex-col justify-center items-center">
        <h4 className="text-center text-[#002147] font-bold text-3xl">
          Book Your Seat
        </h4>
        <p className="text-center w-full lg:w-2/3 text-[#8a8a8a] text-sm font-normal">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium totam
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex flex-col w-full lg:flex-row gap-3 lg:gap-5">
            <div className="input w-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="input w-full">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex flex-col w-full lg:flex-row gap-3 lg:gap-5">
            <div className="input w-full">
              <FormField
                control={form.control}
                name="rollno"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="input w-full">
              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <TextArea placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            type="submit"
            className="uppercase px-20 font-semibold py-3 bg-[#002147] text-white hover:!text-[#002147] transition-all duration-500 hover:bg-[#fdc800] w-max"
          >
            Book Now
          </button>
        </form>
      </Form>
    </div>
  );
};

export default BookingForm;
