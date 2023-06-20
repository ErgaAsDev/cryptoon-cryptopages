import React from "react";

const InfoContainer = () => {
  return (
    <>
      <div className="col-lg-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="input-group search-input">
                  <input
                    type="search"
                    className="form-control form-control-lg"
                    placeholder="Search BTS/ETH"
                  />
                </div>
              </div>
              <div className="card-body d-flex align-items-center justify-content-center">
                <img
                  src="/images/coins/14.png"
                  className="img-fluid p-0 w-75"
                  alt="img60"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <div className="header-title">
                  <h4 className="card-title">History</h4>
                </div>
              </div>
              <div className="card-body">
                <ul className="list-inline m-0 p-0">
                  <li className="d-flex align-items-center pt-3">
                    <div className="d-flex justify-content-between rounded-pill">
                      <img
                        src="/images/coins/01.png"
                        className="img-fluid avatar avatar-40 avatar-rounded"
                        alt="img6"
                      />
                      <div className="ms-3 flex-grow-1">
                        <h5 className="mb-2">Bitcoin</h5>
                        <p className="text-success mb-2">+$10,00</p>
                        <p className="fs-6">
                          Bitcoins Evolution™. 234000 Satisfied Customers From
                          107 Countries.
                        </p>
                      </div>
                      <div className="">
                        <p>11/02/21</p>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex align-items-center pt-3">
                    <div className="d-flex justify-content-between rounded-pill">
                      <img
                        src="/images/coins/09.png"
                        className="img-fluid avatar avatar-40 avatar-rounded"
                        alt="img7"
                      />
                      <div className="ms-3 flex-grow-1">
                        <h5 className="mb-2">Ethereum</h5>
                        <p className="text-danger mb-2">-$50,00</p>
                        <p className="fs-6">
                          Ethereum is a decentralized, blockchain with smart
                          contract functionality
                        </p>
                      </div>
                      <div className="">
                        <p>11/02/21</p>
                      </div>
                    </div>
                  </li>
                  <li className="d-flex align-items-center pt-3">
                    <div className="d-flex justify-content-between rounded-pill">
                      <img
                        src="/images/coins/06.png"
                        className="img-fluid avatar avatar-40 avatar-rounded"
                        alt="img8"
                      />
                      <div className="ms-3 flex-grow-1">
                        <h5 className="mb-2">Litecoin</h5>
                        <p className="text-danger mb-2">-$50,00</p>
                        <p className="fs-6">
                          Litecoin is a peer-to-peer cryptocurrency and
                          open-source software
                        </p>
                      </div>
                      <div className="">
                        <p>11/02/21</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between flex-wrap">
                <div className="header-title">
                  <h4 className="card-title">Quick Transfer</h4>
                </div>
              </div>
              <div className="card-body">
                <div className="d-grid grid-cols-5 gap-card mb-4">
                  <div className="">
                    <img
                      src="/images/avatars/02.png"
                      className="img-fluid avatar avatar-30px avatar-rounded"
                      alt="img36"
                    />
                  </div>
                  <div className="">
                    <img
                      src="/images/avatars/03.png"
                      className="img-fluid avatar avatar-30px avatar-rounded"
                      alt="img37"
                    />
                  </div>
                  <div className="">
                    <img
                      src="/images/avatars/04.png"
                      className="img-fluid avatar avatar-30px avatar-rounded"
                      alt="img38"
                    />
                  </div>
                  <div className="">
                    <img
                      src="/images/avatars/05.png"
                      className="img-fluid avatar avatar-30px avatar-rounded"
                      alt="img39"
                    />
                  </div>
                  <div className="">
                    <img
                      src="/images/avatars/06.png"
                      className="img-fluid avatar avatar-30px avatar-rounded"
                      alt="img40"
                    />
                  </div>
                </div>
                <div className="input-group mb-4">
                  <span className="input-group-text" id="basic-addon3">
                    Amount
                  </span>
                  <input
                    type="text"
                    className="form-control col-lg-8"
                    placeholder="126.5"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"
                  />
                </div>
                <div className="d-grid grid-cols-1 gap-card justify-content-between">
                  <div>
                    <button type="button" className="btn btn-primary w-100">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.74074 8.25926L2 6.7037L16 1M8.74074 8.25926L10.8148 15L16 1M8.74074 8.25926L16 1"
                          stroke="white"
                        />
                      </svg>
                      <span className="ms-2">Transfer Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between flex-wrap">
                <div className="header-title">
                  <h4 className="card-title">Earnings</h4>
                </div>
                <div className="dropdown">
                  <a
                    href="#"
                    className="btn btn-soft-secondary btn-sm dropdown-toggle"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    This Week
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        This Week
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div
                    id="multiple-radialbar-chart"
                    className="col-md-8 col-lg-8 multiple-radialbar-chart"
                  ></div>
                  <div className="d-grid gap col-md-4 col-lg-4">
                    <div className="d-flex align-items-start">
                      <svg
                        className="mt-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        viewBox="0 0 24 24"
                        fill="#00EC42"
                      >
                        <g>
                          <circle cx="12" cy="12" r="8" fill="#00EC42"></circle>
                        </g>
                      </svg>
                      <div className="ms-3">
                        <span className="text-light">Bitcoin</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-start">
                      <svg
                        className="mt-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        viewBox="0 0 24 24"
                        fill="#FF2E2E"
                      >
                        <g>
                          <circle cx="12" cy="12" r="8" fill="#FF2E2E"></circle>
                        </g>
                      </svg>
                      <div className="ms-3">
                        <span className="text-light">Litecoin</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoContainer;
