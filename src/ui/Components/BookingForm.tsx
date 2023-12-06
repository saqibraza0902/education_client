import React from "react";
import { Form, FormControl, FormField } from "../form/form";
import { FormItem, FormMessage } from "../form/form";
import { BookingSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Input from "../form/Input";
import TextArea from "../form/TextArea";
import { handleApiError } from "@/utils/handleApiErrors";
import { toast } from "react-toastify";
import api from "@/instance/api";
import { useAppSelector } from "@/hooks/hooks";
import { useParams } from "next/navigation";

const BookingForm = () => {
  const { user } = useAppSelector((s) => s.auth);
  const { slug } = useParams();
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
    const value = {
      ...values,
      user: user?.id,
      event: slug,
    };
    try {
      const { data } = await api.post("/booking/post", value);
      toast.success(data.message);
      form.reset();
    } catch (error) {
      const err = handleApiError(error);
      toast.error(err);
    }
  };
  return (
    <div className="bg-white h-max p-4 lg:p-10">
      <div className="flex flex-col justify-center mb-4 items-center">
        <h4 className="text-center text-brand_blue-400 font-bold text-3xl">
          Book Your Seat
        </h4>
        <p className="text-center w-full lg:w-2/3 text-brand_pink-500 text-sm font-normal">
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
                      <Input placeholder="Your email" {...field} />
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
                      <Input placeholder="Your roll no" {...field} />
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
                      <Input placeholder="Your department" {...field} />
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
                  <TextArea placeholder="Your message" {...field} />
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
