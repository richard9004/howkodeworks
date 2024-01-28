import React from "react";
import "./styles/dashboard.css";

function Dashboard() {
  const cards = [
    {
      icon: "demo-psi-data-settings",
      title: "Storage",
      value: "32TB Total storage",
    },
    {
      icon: "demo-psi-data-settings",
      title: "CPU",
      value: "8 Cores",
    },
    {
      icon: "demo-psi-data-settings",
      title: "RAM",
      value: "32GB",
    },
  ];
//   LETS SEE HOW TO ADD BACKGROUND COLOR
// TO THE CARDS2

  const cards2 = [
    {
      id: 1,
      top_title: "241",
      desc: "32TB Total storage",
      style: { backgroundColor: '#0d6efd' }
    },
    {
      id: 2,
      top_title: "241",
      desc: "32TB Total storage",
      style: { backgroundColor: '#ffc107' }
    },
    {
      id: 3,
      top_title: "241",
      desc: "32TB Total storage",
      style: { backgroundColor: '#198754' }
    },
    {
      id: 4,
      top_title: "241",
      desc: "32TB Total storage",
      style: { backgroundColor: '#6610f2' }
    },
  ];

  return (
    <>
      <div className="row justify-content-center mt-5 mb-5">
        {cards.map((card) => (
          <div className="col-md-4 col-lg-3" key={card.title}>
            <div className="card text-center mb-3 mb-md-0">
              <div className="card-body">
                <div className="h1 my-4">
                  <i
                    className={card.icon}
                    display-3
                    text-head
                    text-opacity-20
                  ></i>
                </div>
                <p className="h4">{card.title}</p>
                <p className="text-head fw-semibold">{card.value}</p>
                <small className="d-block my-3 fs-6">
                  The Big Oxmox advised her not to do so, because there were
                  thousands of bad.
                </small>
                <button className="btn btn-success mar-ver">Get it now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        {cards2.map((card) => (
          <div className="col-sm-6 col-lg-3" key={card.id}>
            <div className="card text-white mb-3 mb-xl-3" style={card.style}>
              <div className="card-body py-3 d-flex align-items-stretch">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 rounded-start">
                  <i className="demo-psi-file-word fs-1"></i>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5 className="h2 mb-0">{card.top_title}</h5>
                  <p className="mb-0">{card.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Dashboard;
