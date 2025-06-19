import React from 'react';

const HeaderComponent = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#0d3b66' }}>
        <div className="container justify-content-center">

          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/conference.png"
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-text-top me-3"
            />
            <span className="fs-4 text-white fw-semibold" style={{ letterSpacing: '1px' }}>
              Employee Management System
            </span>
          </a>

        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
