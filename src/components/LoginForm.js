import React from "react";
import { useState } from "react";
function LoginForm(props) {
  const { infoLogin, setInfoLogin } = props;

  const [loginSuccess, setLoginSuccess] = useState(false);

  return (
    <div className="mt-4">
      <div className="card w-50">
        <div className="card-body">
          <h5 className="card-title">Login</h5>
          {loginSuccess ? (
            <>
            <div className="alert alert-success" role="alert">
              Login success
            </div>
            <div>
                <p>Email: {infoLogin.email}</p>
                <p>Password: {infoLogin.password}</p>
            </div>
            </>
            
          ) : (
            <>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setInfoLogin({
                      ...infoLogin,
                      email: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => {
                    setInfoLogin({
                      ...infoLogin,
                      password: e.target.value,
                    });
                  }}
                />
              </div>
            </>
          )}

          <button className={`btn ${loginSuccess?"btn-danger":"btn-success"} mt-3`}
          onClick={()=>{setLoginSuccess(!loginSuccess)}}
          >{loginSuccess?"logout":"login"}</button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
