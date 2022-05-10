import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="w-screen py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <NavLink to="/">
            <h1 className="text-2xl lg:text-3xl">Coinhub</h1>
          </NavLink>
          <nav className="w-5/12">
            <ul className="flex items-center justify-between">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'text-blue-500' : ''
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="login"
                  className={({ isActive }) =>
                    isActive ? 'text-blue-500' : ''
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="register"
                  className={({ isActive }) =>
                    isActive ? 'text-blue-500' : ''
                  }
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
