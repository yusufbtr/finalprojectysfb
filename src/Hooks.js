import React from "react";
import { useForm } from "react-hook-form";

let renderCount = 0;

const Hooks = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => console.log(values);
    renderCount++;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email:</label><br/>
      <input
        name="email"
        ref={register({
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
        })}
        className="form-input"
      />
      {errors.email && errors.email.message}

        <br/>
        <label>Username:</label><br/>
      <input
        name="username"
        ref={register({
          validate: value => value !== "admin" || "Nice try!"
        })}
        className="form-input"
      />
      {errors.username && errors.username.message}

        <p>Render Counter: {renderCount}</p>
        <div className="btn-wrapper">
         <button type="submit" className="btn-submit"> Submit</button>
         </div>
      
    </form>
  );
};

export default Hooks;




  