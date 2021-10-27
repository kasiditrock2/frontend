import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import AdminHOC from '../../components/layouts/admin.hoc';

import axios from 'axios';


const Users = ({ users, error, where }) => {
  if (error) {
    return <div>An error occured:{error.message}</div>
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
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">DataTables</li>
                  </ol>
                </div>
              </div>
            </div>{/* /.container-fluid */}
          </section>
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">รายชื่อสมาชิก</h3>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <table id="example2" className="table table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Edit</th>
                            <th>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map(data => (
                            <tr>
                              <td>{data.id}</td>
                              <td>{data.firstname}</td>
                              <td>{data.lastname}</td>
                              <td>{data.username}</td>
                              <td>ไม่บอก</td>
                              <td className="text-center"><Link href={`/Users/edit/${data.id}`}><a className="btn btn-warning">แก้ไข</a></Link></td>
                              <td className="text-center"><Link href={`/Users/delete/${data.id}`}><a className="btn btn-danger btn-sm">ลบ</a></Link></td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr>
                            <th>ID</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Edit</th>
                            <th>Delete</th>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    {/* /.card-body */}
                  </div>

                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
          </section>
        </div>

      </AdminHOC>
    </div>
  )
}

Users.getInitialProps = async ctx => {
  try {
    const res = await axios.get('https://api-itcmtc.herokuapp.com/members');
    const users = res.data;
    return { users };
  } catch (error) {
    return { error };
  }
};

export default Users