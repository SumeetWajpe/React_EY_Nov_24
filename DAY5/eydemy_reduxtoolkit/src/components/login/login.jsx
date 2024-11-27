import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { setUserAuthenticated } from "../../redux/reducers/auth.reducer";
import { useDispatch } from "react-redux";

export default function Login() {
  const { handleSubmit, register } = useForm({ mode: "onChange" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      className="col-md-6 m-2 p-2 form-group"
      style={{ border: "1px solid gray" }}
    >
      <form
        onSubmit={handleSubmit(inputData => {
          if (inputData.username === "sumeet" && inputData.password === "123") {
            // should be done after server call
            dispatch(
              setUserAuthenticated({
                isUserAuthenticated: true,
                username: inputData.username,
              }),
            );
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
