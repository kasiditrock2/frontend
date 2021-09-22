import React from 'react'
import Link from 'next/link'
import Axios from 'axios';
import { useState } from 'react'; //เก็บข้อมูลไว้ในตัวแปร state

<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
import Swal from 'sweetalert2/dist/sweetalert2.js';


const Register = () => {

//if (error) {
//   return <div>An error occured: {error.message}</div>;
//}
const [firstname, setfirstName] = useState("");
const [lastname, setlastName] = useState("");
const [username, setuserName] = useState("");
const [password, setPassword] = useState("");

const addMember = () => {
  Axios.post('http://localhost:1337/members', {
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
      window.location = "./";
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
          <body class="hold-transition register-page">
<div className="register-box">
  <div className="card">
    <div className="card-body register-card-body">
      <p className="login-box-msg">สมัครสมาชิก</p>
      <form action="/" method="post">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="ชื่อ" onChange={(event) => { setfirstName(event.target.value) }} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="นามสกุล" onChange={(event) => { setlastName(event.target.value) }}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Username" onChange={(event) => { setuserName(event.target.value) }} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" onChange={(event) => { setPassword(event.target.value) }} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
              <label htmlFor="agreeTerms">
                &nbsp;ยอมรับ <a href="#">เงื่อนไข</a>
              </label>
            </div>
          </div>
          {/* /.col */}
        </div>
      </form>
      <div className="social-auth-links text-center">
      <button type="button" class="btn btn-success" onClick={addMember}>บันทึก</button>
      <br />
        <Link href="/login">
      <a className="text-center">ฉันมีบัญชีอยู่แล้ว</a>
      </Link>
      </div>
    </div>
    {/* /.form-box */}
  </div>{/* /.card */}
</div>
{/* /.register-box */}

</body>

        </div>
    )
    

}

export default Register;