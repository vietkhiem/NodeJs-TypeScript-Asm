import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const NavAdmin = (props: Props) => {
  return (
    <div className="container-fluid p-0">
      {/* Bootstrap row */}
      <div className="row" id="body-row">
        {/* Sidebar */}
        <div
          id="sidebar-container"
          className="sidebar-expanded d-none d-md-block"
        >
          {/* d-* hiddens the Sidebar in smaller devices. Its itens can be kept on the Navbar 'Menu' */}
          {/* Bootstrap List Group */}
          <ul className="list-group">
            {/* Separator with title */}
            <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
              <small>MAIN MENU</small>
            </li>
            {/* /END Separator */}
            {/* Menu with submenu */}
            <a
              href="#submenu1"
              data-toggle="collapse"
              aria-expanded="false"
              className="bg-dark list-group-item list-group-item-action flex-column align-items-start"
            >
              <div className="d-flex w-100 justify-content-start align-items-center">
                <span className="fa fa-dashboard fa-fw mr-3" />
                <span className="menu-collapsed">Dashboard</span>
                <span className="submenu-icon ml-auto" />
              </div>
            </a>
            {/* Submenu content */}
            <div id="submenu1" className="collapse sidebar-submenu" />
            <a
              href="#submenu2"
              data-toggle="collapse"
              aria-expanded="false"
              className="bg-dark list-group-item list-group-item-action flex-column align-items-start"
            >
              <div className="d-flex w-100 justify-content-start align-items-center">
                <span className="fa fa-user fa-fw mr-3" />
                <span className="menu-collapsed">User</span>
                <span className="submenu-icon ml-auto" />
              </div>
            </a>
            {/* Submenu content */}
            <a
              href="#"
              className="bg-dark list-group-item list-group-item-action"
            >
              <div className="d-flex w-100 justify-content-start align-items-center">
                <span className="fa fa-tasks fa-fw mr-3" />
                <span className="menu-collapsed">Category</span>
              </div>
            </a>
            {/* Separator with title */}
            {/* /END Separator */}
            <a
              href="#"
              className="bg-dark list-group-item list-group-item-action"
            >
              <div className="d-flex w-100 justify-content-start align-items-center">
                <span className="fa fa-calendar fa-fw mr-3" />
                <span className="menu-collapsed">Products</span>
              </div>
            </a>
            <a
              href="#"
              className="bg-dark list-group-item list-group-item-action"
            >
              <div className="d-flex w-100 justify-content-start align-items-center">
                <span className="fa fa-envelope-o fa-fw mr-3" />
                <span className="menu-collapsed">Posts</span>
              </div>
            </a>
            {/* Separator without title */}
            <li className="list-group-item sidebar-separator menu-collapsed" />
            {/* /END Separator */}
            <a
              href="#"
              data-toggle="sidebar-colapse"
              className="bg-dark list-group-item list-group-item-action d-flex align-items-center"
            ></a>
            {/* Logo */}
          </ul>
          {/* List Group END*/}
        </div>
        {/* sidebar-container END */}
        {/* MAIN */}
        <div className="col">
          <h1>
            Collapsing Menu
            <small className="text-muted">Version 2.1</small>
          </h1>
          <div className="card">
            <h4 className="card-header">Requirements</h4>
            <div className="card-body">
              <ul>
                <li>JQuery</li>
                <li>Bootstrap 4 beta-3</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Main Col END */}
      </div>
      {/* body-row END */}
    </div>
  );
};

export default NavAdmin;
