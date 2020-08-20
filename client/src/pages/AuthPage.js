import React from "react";
export const AuthPage = () => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <h1>Short Link</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>
            <div></div>
          </div>
          <div className="card-action">
            <button className="btn yellow darken-4" style={{marginRight:10}}>Login</button>
            <button className="btn grey lighten-1 black-text">Register</button>

          </div>
        </div>
      </div>
    </div>
  );
};
