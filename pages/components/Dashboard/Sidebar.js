import React from "react";
import Image from "next/image";

const Sidebar = ({
  toggle,
  toggleUser,
  handleSidebarToggle,
  handleUserToggle,
  userProfileIsActive,
  handleUserActive,
}) => {
  return (
    <>
      <aside
        className={`sidebar sidebar-default navs-rounded ${
          toggle && `sidebar-mini`
        }`}
      >
        <div className="sidebar-header d-flex align-items-center justify-content-start">
          <a
            href="#"
            className="navbar-brand dis-none align-items-center justify-content-center"
          >
            <Image
              src="/images/logoSmall.png"
              width={50}
              height={50}
              alt="images"
            />
            <div className="logo-title m-0">
              <span id="text-span-1">Cryp</span>toon
            </div>
          </a>
          <div
            className="sidebar-toggle"
            data-toggle="sidebar"
            data-active="true"
            onClick={handleSidebarToggle}
          >
            <i className="icon">
              <svg
                width="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.25 12.2744L19.25 12.2744"
                  stroke="currentColor"
                  stroke-width="1.5"
                ></path>
                <path
                  d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                  stroke="currentColor"
                  stroke-width="1.5"
                ></path>
              </svg>
            </i>
          </div>
        </div>
        <div className="sidebar-body p-0 data-scrollbar">
          <div className="collapse navbar-collapse pe-3" id="sidebar">
            <ul className="navbar-nav iq-main-menu">
              <li className="nav-item">
                <a
                  className={`nav-link ${!userProfileIsActive && `active`}`}
                  aria-current="page"
                  href=""
                >
                  <i className="icon">
                    <svg
                      width="22"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714V20.7714"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </i>
                  <span className="item-name">Dashboard</span>
                </a>
              </li>
              <li className="nav-item" onClick={handleUserToggle}>
                <a
                  className={`nav-link ${!toggleUser ? `collapsed` : ""}`}
                  data-bs-toggle="collapse"
                //   href="#sidebar-user"
                  role="button"
                //   aria-expanded={`${
                //     toggleUser || userProfileIsActive ? `true` : `false`
                //   }`}
                  aria-controls="sidebar-user"
                >
                  <i className="icon">
                    <svg
                      width="22"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.9849 15.3462C8.11731 15.3462 4.81445 15.931 4.81445 18.2729C4.81445 20.6148 8.09636 21.2205 11.9849 21.2205C15.8525 21.2205 19.1545 20.6348 19.1545 18.2938C19.1545 15.9529 15.8735 15.3462 11.9849 15.3462Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.9849 12.0059C14.523 12.0059 16.5801 9.94779 16.5801 7.40969C16.5801 4.8716 14.523 2.81445 11.9849 2.81445C9.44679 2.81445 7.3887 4.8716 7.3887 7.40969C7.38013 9.93922 9.42394 11.9973 11.9525 12.0059H11.9849Z"
                        stroke="currentColor"
                        stroke-width="1.42857"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </i>
                  <span className="item-name">Users</span>
                  <i className="right-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </i>
                </a>
                <ul
                  className={`sub-nav collapse ${toggleUser ? `show` : userProfileIsActive ? `show` : ''}`}
                  id="sidebar-user"
                  data-bs-parent="#sidebar"
                >
                  <li className="nav-item" onClick={handleUserActive}>
                    <a
                      className={`nav-link ${userProfileIsActive && `active`}`}
                      //   href="../dashboard/app/user-profile.html"
                    >
                      <i className="icon">
                        <svg
                          width="10"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="1"
                            width="11"
                            height="11"
                            stroke="currentcolor"
                          />
                        </svg>
                      </i>
                      <i className="sidenav-mini-icon"> U </i>
                      <span className="item-name">User Profile</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
