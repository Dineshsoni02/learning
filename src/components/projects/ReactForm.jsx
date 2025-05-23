import React from "react";
import { useForm } from "react-hook-form";
//* yup resolver 23-05
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ReactForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   reset,
  //   formState: { errors },
  // } = useForm();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  const watchedFirstName = watch("name"); // Watch firstName field

  return (
    <div>
      <p>ReactForm</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Name" {...register("name", { required: true })} />
        {errors.name && <p>Name is required </p>}
        <p>👀 You typed: {watchedFirstName}</p>

        <input
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>E-mail is required </p>}
        <input
          placeholder="Password"
          {...register("password", { require: true, minLength: 6 })}
          type="password"
        />
        {errors.password && <p>Min 6 chars required </p>}
        <button type="submit">Register</button>
      </form>

      <h2>Pup Resolver Form </h2>
      <form onSubmit={handleSubmit(onSubmit)} >
        <input placeholder="Name" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}

        <p>👀 You typed: {watchedFirstName}</p>

        <input placeholder="Email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          placeholder="Password"
          type="password"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default ReactForm;
