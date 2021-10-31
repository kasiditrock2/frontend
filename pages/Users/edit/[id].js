import React from 'react'
import Link from 'next/link'
import AdminHOC from '../../../components/layouts/admin.hoc'
import { useState } from 'react'; //เก็บข้อมูลไว้ในตัวแปร state
import Swal from 'sweetalert2'
import axios from 'axios'

import { useRouter } from 'next/router'

export const getStaticPaths = async () => {
  const res = await axios('https://api-itcmtc.herokuapp.com/members');
  const data = res.data;
  const paths = data.map(users => {
    return {
      params: {id: users.id.toString() }
  }
  })

  return {
    paths,
    fallback: false
  }
  
  }

export const getStaticProps = async (context) => {
  // get posts from our api
  const id = context.params.id;
  const res = await axios.get('https://api-itcmtc.herokuapp.com/members/' + id);
  const data = res.data;

  return {
    props: { users : data }
  };    
}

const Users = ({ users }) => {
const router = useRouter()

const [firstname, setfirstName] = useState("");
const [lastname, setlastName] = useState("");
const [username, setuserName] = useState("");
const [password, setPassword] = useState("");

const updateUser = (id) => {
  axios
  .put('https://api-itcmtc.herokuapp.com/members/' + id, {
    firstname: firstname,
    lastname: lastname,
    username: username,
    password: password
  })
  .then(function (response) {
    console.log(response);
    Swal.fire({
        icon: 'success',
        title: '<h3>บันทึกข้อมูลเรียบร้อยแล้ว</h3>',
        showConfirmButton: false,
        timer: 2000
    }).then(function () {
        //window.location = "/users";
        router.push('/users');
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
  <body className="hold-transition register-page">
<div className="register-box">
  <div className="card">
    <div className="card-body register-card-body">
      <p className="login-box-msg">แก้ไขข้อมูลสมัครสมาชิก</p>
      <form action="/" method="post">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="ชื่อ" onChange={(event) => { setfirstName(event.target.value) }} defaultValue={users.firstname} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="นามสกุล" onChange={(event) => { setlastName(event.target.value) }} defaultValue={users.lastname} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Username" onChange={(event) => { setuserName(event.target.value) }} defaultValue={users.username}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" onChange={(event) => { setPassword(event.target.value) }} defaultValue={users.password}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
      </form>
      <div className="social-auth-links text-center">
      <button type="button" className="btn btn-success" onClick={() => { updateUser(users.id)}}>ปรับปรุง</button>
      </div>
    </div>
    {/* /.form-box */}
  </div>{/* /.card */}
</div>
{/* /.register-box */}

</body>
  {/* /.content */}
</div>
{/* /.content-wrapper */}


      </AdminHOC>

    </div>
)
  }


  export default Users;