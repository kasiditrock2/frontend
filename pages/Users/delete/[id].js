import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import AdminHOC from '../../../components/layouts/admin.hoc';
import { useState } from 'react';
import axios from 'axios';

const Home = ({ allCategories, errorCategories }) => {
  const [modifiedData, setModifiedData] = useState({
    firstname: '',
    description: '',
    categories: [],
  });
  const [errorRestaurants, setErrorRestaurants] = useState(null);

  const handleChange = ({ target: { name, value } }) => {
    setModifiedData(prev => ({
      ...prev,
      [firstname]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:1337/members', modifiedData);
      console.log(response);
    } catch (error) {
      setErrorRestaurants(error);
    }
  };

  const renderCheckbox = category => {
    const { categories } = modifiedData;
    const isChecked = categories.includes(category.id);
    const handleCheckboxChange = () => {
      if (!categories.includes(category.id)) {
        handleChange({ target: { name: 'categories', value: categories.concat(category.id) } });
      } else {
        handleChange({
          target: { name: 'categories', value: categories.filter(v => v !== category.id) },
        });
      }
    };
    
  };
  if (errorCategories) {
    return <div>An error occured (categories): {errorCategories.message}</div>;
  }
  if (errorRestaurants) {
    return <div>An error occured (restaurants): {errorRestaurants.message}</div>;
  }
  return (
    <div>
      <AdminHOC>
        {allCategories.map(data => (
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
                      <button type="button" class="btn btn-success" onClick={handleChange} >บันทึกการแก้ไข</button>
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
};

Home.getInitialProps = async ctx => {
  try {
    const res = await axios.get('http://localhost:1337/categories');
    const allCategories = res.data;
    return { allCategories };
  } catch (errorCategories) {
    return { errorCategories };
  }
};

export default Home;
