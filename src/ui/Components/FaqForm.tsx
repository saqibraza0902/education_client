import React from "react";
import { Form, FormItem, FormMessage } from "@/ui/form/form";
import { FormControl, FormField } from "@/ui/form/form";
import Input from "../form/Input";
import TextArea from "../form/TextArea";
import { ContactSchema } from "@/schema";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "@/instance/api";
import { handleApiError } from "@/utils/handleApiErrors";
import { toast } from "react-toastify";

const FaqForm = () => {
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof ContactSchema>) => {
    try {
      const { data } = await api.post(`/faqs/post-faqs`, values);
      toast.success(data.message);
      form.reset();
    } catch (error) {
      const err = handleApiError(error);
      toast.error(err);
    }
  };
  return (
    <div className="lg:w-7/12">
      <div className="my-5">
        <h2 className="text-[#002147] text-4xl font-bold">
          Do You Have Any Questions
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-5 mt-5 items-center lg:items-start"
          >
            <div className="flex flex-col w-full justify-between lg:flex-row gap-5">
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
              className="uppercase px-20 font-semibold py-3 bg-[#fdc800] w-max"
            >
              Submit Now
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default FaqForm;
