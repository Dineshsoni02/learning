import React from "react";
import { useForm } from "react-hook-form";

const ReactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

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
    </div>
  );
};

export default ReactForm;
