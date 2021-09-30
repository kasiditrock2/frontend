import React from "react";
import Head from "next/head";
import Link from "next/link";
import AdminHOC from "../../../components/layouts/admin.hoc";
import axios from "axios";
import { useState } from 'react'; //เก็บข้อมูลไว้ในตัวแปร state


const EditUsers = ({ users , error , key }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

const EditUser = () => {
  Axios.get('http://localhost:1337/members', {
      firstname: firstname,
      lastname: lastname,
      username: username,
      password: password,
      id: id
})
}
  return (
    <div>
      <AdminHOC>
      {users.map(data => (
        <center>
      <body class="hold-transition register-page">
<div className="register-box">
  <div className="card">
    <div className="card-body register-card-body">
      <p className="login-box-msg">แก้ไขสมาชิก</p>
      <form action="/" method="post">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder={data.firstname} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder={data.lastname}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder={data.username} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
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
      <button type="button" class="btn btn-success" onClick={EditUsers}>แก้ไขข้อมูลสมาชิก</button>
      </div>
    </div>
    {/* /.form-box */}
  </div>{/* /.card */}
</div>
{/* /.register-box */}
    
</body>

</center>
    ))}

        <script src="/plugins/jquery/jquery.min.js"></script>
        {/* Bootstrap 4 */}
        <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
        {/* DataTables  & Plugins */}
        <script src="plugins/datatables/jquery.dataTables.min.js"></script>
        <script src="plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
        <script src="plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
        <script src="plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
        <script src="plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
        <script src="plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
        <script src="plugins/jszip/jszip.min.js"></script>
        <script src="plugins/pdfmake/pdfmake.min.js"></script>
        <script src="plugins/pdfmake/vfs_fonts.js"></script>
        <script src="plugins/datatables-buttons/js/buttons.html5.min.js"></script>
        <script src="plugins/datatables-buttons/js/buttons.print.min.js"></script>
        <script src="plugins/datatables-buttons/js/buttons.colVis.min.js"></script>
        {/* AdminLTE App */}

        <script src="dist/js/adminlte.min.js"></script>
        {/* AdminLTE for demo purposes */}

        <script src="dist/js/demo.js"></script>
        {/* Page specific script */}
        <script src="/plugins/jquery/jquery.min.js"></script>
        {/* Bootstrap 4 */}
        <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
        {/* DataTables  & Plugins */}
        <script src="plugins/datatables/jquery.dataTables.min.js"></script>
        <script src="plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
        <script src="plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
        <script src="plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
        <script src="plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
        <script src="plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
        <script src="plugins/jszip/jszip.min.js"></script>
        <script src="plugins/pdfmake/pdfmake.min.js"></script>
        <script src="plugins/pdfmake/vfs_fonts.js"></script>
        <script src="plugins/datatables-buttons/js/bFuttons.html5.min.js"></script>
        <script src="plugins/datatables-buttons/js/buttons.print.min.js"></script>
        <script src="plugins/datatables-buttons/js/buttons.colVis.min.js"></script>
        {/* AdminLTE App */}

        <script src="dist/js/adminlte.min.js"></script>
        {/* AdminLTE for demo purposes */}

        <script src="dist/js/demo.js"></script>
        {/* Page specific script */}
        <script></script>


      </AdminHOC>
    </div>
  );
};

EditUsers.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/member/:id');
    const users= res.data;
    return { users };
  } catch (error) {
    return { error };
  }
};
export default EditUsers;
