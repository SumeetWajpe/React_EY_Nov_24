import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { handleSubmit, register } = useForm({ mode: "onChange" });
  const navigate = useNavigate();

  return (
    <div
      className="col-md-6 m-2 p-2 form-group"
      style={{ border: "1px solid gray" }}
    >
      <form
        onSubmit={handleSubmit(inputData => {
          if (inputData.username === "sumeet" && inputData.password === "123") {
            navigate("/dashboard");
          }
        })}
      >
        <div>
          <label htmlFor="exampleInputEmail1">Username : </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter username"
            {...register("username")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            {...register("password")}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
}
