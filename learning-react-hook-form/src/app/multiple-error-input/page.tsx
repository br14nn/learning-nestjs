"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const FormSchema = z.object({
  username: z
    .string()
    .regex(/[^\w\s]/, { message: "At least one symbol." })
    .regex(/\d/, { message: "At least one number." }),
});

type TFormSchema = z.infer<typeof FormSchema>;

export default function MultipleErrorInputPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormSchema>({
    criteriaMode: "all",
    resolver: zodResolver(FormSchema),
  });
  const usernameErrorMessages =
    errors.username?.types?.invalid_string?.toString();

  const onSubmit: SubmitHandler<TFormSchema> = (data: TFormSchema) => {
    console.log(data);
  };

  return (
    <main className="flex h-screen w-full flex-col items-center gap-8 p-20">
      <h1 className="text-5xl font-bold">Multiple Error Input</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="rounded-md border-2 border-white bg-transparent px-2 py-0.5 outline-none"
          type="text"
          placeholder="Enter username"
          autoComplete="off"
          {...register("username")}
        />
        <p
          className={`${usernameErrorMessages?.includes("At least one symbol.") ? "text-red-500" : "text-white"}`}
        >
          At least one symbol.
        </p>
        <p
          className={`${usernameErrorMessages?.includes("At least one number.") ? "text-red-500" : "text-white"}`}
        >
          At least one number.
        </p>
        <button
          className="w-full rounded-md bg-white py-1 text-black"
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
