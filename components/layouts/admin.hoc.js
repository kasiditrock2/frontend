import React, { Component } from 'react'
import AdminHeader from './admin.header'
import AdminSidebar from './admin.sidebar';
import AdminFooter from './admin.footer';

export default class AdminHOC extends Component {
  render(){
  return (
    <div>
      <div>
        <AdminHeader />
        <AdminSidebar />
        {this.props.children}
        <AdminFooter />
      </div>
    </div>
  )
  }
}