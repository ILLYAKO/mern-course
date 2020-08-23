import React from "react";
import { useState } from "react";
import { useHttp } from "../hooks/http.hook";
export const AuthPage = () => {
  //const { loading, error, request } = useHttp();
  const { loading, error, request } = useHttp();
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setform({ ...form, [event.target.name]: event.target.value });
  };
  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      console.log("Data", data);
    } catch (e) {}
  };

  return (
    <div className="row">
      <div className="col s12 m6">
        <h1>Short Link</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>
            <div className="input-field">
              <input
                placeholder="Enter your email"
                id="email"
                type="text"
                name="email"
                className="yellow-input"
                onChange={changeHandler}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <input
                placeholder="Enter password"
                id="password"
                type="password"
                name="password"
                className="yellow-input"
                onChange={changeHandler}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="card-action">
            <button
              className="btn yellow darken-4"
              style={{ marginRight: 10 }}
              disabled={loading}
            >
              Login
            </button>
            <button
              className="btn grey lighten-1 black-text"
              onClick={registerHandler}
              disabled={loading}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
