import React from "react";
import Head from "next/head";
import Link from "next/link";
import AdminHOC from "../components/layouts/admin.hoc";

import axios from "axios";


const Users = ({ users , error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div>
      <AdminHOC>
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>DataTables</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">DataTables</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">
                        DataTable with minimal features &amp; hover style
                      </h3>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <table
                        id="example2"
                        className="table table-bordered table-hover"
                      >
                        <thead>
                          <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Orther</th>
                          </tr>
                        </thead>
                        <tbody>
                        {users.map(data => (
                          <tr>
                            <td>{data.firstname}</td>
                            <td>{data.lastname}</td>
                            <td>{data.username}</td>
                            <td>ไม่บอก</td>
                            <td>แก้ไข</td>
                          </tr>
                        ))}

                          </tbody>
                      </table>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                  <div className="card">
                    {/* /.card-header */}
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}

        /.content-wrapper
        jQuery
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
        <script src="plugins/datatables-buttons/js/buttons.html5.min.js"></script>
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

Users.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/members');
    const users= res.data;
    return { users };
  } catch (error) {
    return { error };
  }
};
export default Users;
