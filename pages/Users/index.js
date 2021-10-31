import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import AdminHOC from '../../components/layouts/admin.hoc'
import axios from 'axios';
import Swal from 'sweetalert2'


import { useRouter } from 'next/router'

export const getServerSideProps = async () => {
  const res = await axios.get("https://api-itcmtc.herokuapp.com/members");
  const data= res.data;
  return {
    props: { users: data}
  }
}



const Users = ({ users }) => {
  const router = useRouter()

  const deleteUser = (id) => {
    axios
    .delete('https://api-itcmtc.herokuapp.com/members/' + id)
    .then(function (response) {
      console.log(response);
      Swal.fire({
          icon: 'success',
          title: '<h3>ลบข้อมูลเรียบร้อยแล้ว</h3>',
          showConfirmButton: false,
          timer: 2000
      }).then(function () {
          //window.location = "/users";
          router.push('/Users');
      });
    })
    .catch(function (error) {
      console.log(error);
      Swal.fire({
          title: 'Error!',
          text: 'เกิดข้อผิดพลาด!',
          icon: 'error',
          confirmButtonText: 'ตกลง'
      })
    });
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
          <h1>ตารางรายการสมาชิก</h1>
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
              <h3 className="card-title">รายการสมาชิก</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <table id="example2" className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th className="text-center">Id</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>userName</th>
                    <th className="text-center">Edit</th>
                    <th className="text-center">Delete</th>
                  </tr>
                </thead>
                <tbody>
                {users.map((data, id) => (
                  <tr key={data.id}>
                    <td className="text-center">{data.id}</td>
                    <td>{data.firstname}</td>
                    <td>{data.lastname}</td>
                    <td>{data.username}</td>
                    <td className="text-center"><Link href={`/users/edit/${data.id}`}><a className="btn btn-warning btn-sm">แก้ไข</a></Link></td>
                    {/* <td className="text-center"><Link href={`/users/delete/${data.id}`}><a className="btn btn-danger btn-sm">ลบ</a></Link></td> */}
                    <td className="text-center"><button type="button" className="btn btn-danger btn-sm" onClick={() => { deleteUser(data.id)}}>ลบ</button></td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
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


      </AdminHOC>

    </div>
  )
}
/*
Users.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/members');
    const users= res.data;
    return { users };
  } catch (error) {
    return { error };
  }
};
*/
export default Users;