import React from "react";
import Link from "next/dist/client/link";
import AdminHOC from "../components/layouts/admin.hoc";
export default function login() {
  return (
    <center>
      <div>
        {/* Google Font: Source Sans Pro */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
        />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="../../plugins/fontawesome-free/css/all.min.css"
        />
        {/* icheck bootstrap */}
        <link
          rel="stylesheet"
          href="../../plugins/icheck-bootstrap/icheck-bootstrap.min.css"
        />
        {/* Theme style */}
        <link rel="stylesheet" href="../../dist/css/adminlte.min.css" />
        <body class="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <a href="../../index2.html">
              <b>Admin</b>NextJS
            </a>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Login page</p>
              <form action="http://localhost:3000/" method="post">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <button type="submit" className="btn btn-warning btn-block">
                      Sign In
                    </button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              <Link href="/register">
                  <a className="nav-link">
                  <p>
                 Register a new user account
                  </p>
                  </a>
                </Link>
             
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
        </body>
        {/* /.login-box */}
        {/* jQuery */}
        {/* Bootstrap 4 */}
        {/* AdminLTE App */}
      </div>
    </center>
  );
}
