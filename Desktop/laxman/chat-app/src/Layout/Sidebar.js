import React from "react";
import "../Assets/CSS/DashbordStyle.css";

const Sidebar = () => {
  return (
    <div className="sidebar ">
      <div className="sidebar-logo pb-4">
        <ul className="list-unstyled">
          <li className="heading-primary py-5 ">chat</li>
        </ul>
      </div>
      <div
        className="side-menu w-100 d-flex flex-column justify-content-between "
        style={{ height: "80vh" }}
      >
        <div className="one-list">
          <ul className="navbar-nav list-unstyled">
            <li className="nav-item">
              <a
                className="nav-link icon-section "
                aria-current="page"
                href="#"
              >
                <div className="d-flex flex-column align-items-center ">
                  <i class="fa-solid fa-gauge  sidebar-icon"></i>
                  <p className="paragraph">Dashbord</p>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link  icon-section active "
                aria-current="page"
                href="#"
              >
                <div className="d-flex flex-column align-items-center">
                  <i class="fa-regular fa-comment-dots sidebar-icon"></i>
                  <p className="paragraph">Chats</p>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link icon-section "
                aria-current="page"
                href="#"
              >
                <div className="d-flex flex-column align-items-center">
                  <i class="fa-solid fa-clipboard-list  sidebar-icon"></i>
                  <p className="paragraph">Activity</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="second-list ">
          <ul className="navbar-nav list-unstyled">
            <li className="nav-item">
              <a
                className="nav-link icon-section  "
                aria-current="page"
                href="#"
              >
                <div className="d-flex flex-column align-items-center">
                  <i class="fa-solid fa-gear  sidebar-icon"></i>
                  <p className="paragraph">Settings</p>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link icon-section    "
                aria-current="page"
                href="#"
              >
                <div className="d-flex flex-column align-items-center">
                  <i class="fa-regular fa-circle-user sidebar-icon"></i>
                  <p className="paragraph">Profile</p>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link icon-section "
                aria-current="page"
                href="#"
              >
                <div className="d-flex flex-column align-items-center">
                  <i class="fa-solid fa-arrow-right-from-bracket  sidebar-icon"></i>
                  <p className="paragraph">Log Out</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
