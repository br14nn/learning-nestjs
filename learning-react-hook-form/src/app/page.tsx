"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "At least 6 characters long" })
    .regex(/[^\w\s]/, { message: "At least one symbol" })
    .regex(/\d/, { message: "At least one number" }),
  confirmPassword: z.string(),
});

type TFormSchema = z.infer<typeof FormSchema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TFormSchema>({
    criteriaMode: "all",
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<TFormSchema> = (data: TFormSchema) => {
    if (data.password !== data.confirmPassword)
      return setError("confirmPassword", {
        message: "Passwords does not match",
      });
    console.log(data);
  };

  return (
    <main className="flex h-screen w-full flex-col items-center gap-8 p-20">
      <h1 className="text-5xl font-bold">React Hook Form</h1>
      <form
        className="flex w-fit flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="w-80 rounded-lg border-2 border-white bg-transparent px-3 py-1 outline-none"
          type="text"
          placeholder="Email"
          autoComplete="off"
          {...register("email")}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          className="w-80 rounded-lg border-2 border-white bg-transparent px-3 py-1 outline-none"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <input
          className="w-80 rounded-lg border-2 border-white bg-transparent px-3 py-1 outline-none"
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword.message}</p>
        )}
        <button
          className="w-full rounded-lg bg-white py-2 text-black"
          type="submit"
        >
          Submit
        </button>
        {errors.root && <p className="text-red-500">{errors.root.message}</p>}
      </form>
    </main>
  );
}
