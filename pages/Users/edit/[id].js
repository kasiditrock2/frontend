import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import AdminHOC from '../../../components/layouts/admin.hoc';
import { useState } from 'react';
import axios from 'axios';


const EditUsers = ({ users, error, key }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  const [firstname, setfirstName] = useState("");

  //const [id, ${data.id}] = useState("");
  const EditUser = () => {
    Axios.get('https://api-itcmtc.herokuapp.com/members', {
      firstname: firstname,
      Lastname: lastname,
      Username: uername,
      password: password
    })
  }



  return (
    <div>
      <AdminHOC>
        {users.map(data => (
          <div className="content-wrapper">
            <body class="hold-transition register-page">
              <div className="register-box">
                <div className="card">
                  <div className="card-body register-card-body">
                    <p className="login-box-msg">แก้ไขสมาชิก</p>
                    <form action="/" method="post">
                      <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder={data.firstname} onChange={(event) => { setfirstName(event.target.value) }} />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-user-edit" />{ }
                          </div>
                        </div>
                      </div>
                      <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder={data.lastname} onChange={(event) => { setlastName(event.target.value) }} />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-file-signature" />
                          </div>
                        </div>
                      </div>
                      <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder={data.username} onChange={(event) => { setuserName(event.target.value) }} />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-users" />
                          </div>
                        </div>
                      </div>
                      <div className="input-group mb-3">
                        <input type="password" className="form-control" placeholder="New Password" onChange={(event) => { setPassword(event.target.value) }} />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-lock" />
                          </div>
                        </div>
                      </div>

                    </form>
                    <div className="social-auth-links text-center">
                      <button type="button" class="btn btn-success" onClick={EditUsers} >บันทึกการแก้ไข</button>
                    </div>


                  </div>
                  {/* /.form-box */}
                </div>{/* /.card */}
              </div>
              {/* /.register-box */}

            </body>

          </div>
        ))}
      </AdminHOC>
    </div>
  );
}

EditUsers.getInitialProps = async ctx => {
  try {
    const res = await axios.get('https://api-itcmtc.herokuapp.com/members');
    const users = res.data;
    return { users };
  } catch (error) {
    return { error };
  }
};
export default EditUsers;