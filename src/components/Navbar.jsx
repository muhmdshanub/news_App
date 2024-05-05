import React from "react";

const Navbar = ({ setCategory }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> <span className="badge bg-light text-dark fs-4 p-3">NewsMag</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <button className="nav-link btn btn-link" onClick={() => setCategory(null)}>All News</button>
              </li>
              <li>
                <button className="nav-link btn btn-link" onClick={() => setCategory('technology')}>Technology</button>
              </li>
              <li>
                <button className="nav-link btn btn-link" onClick={() => setCategory('science')}>Science</button>
              </li>
              <li>
                <button className="nav-link btn btn-link" onClick={() => setCategory('health')}>Health</button>
              </li>
              <li>
                <button className="nav-link btn btn-link" onClick={() => setCategory('business')}>Business</button>
              </li>
              <li>
                <button className="nav-link btn btn-link" onClick={() => setCategory('sports')}>Sports</button>
              </li>
              <li>
                <button className="nav-link btn btn-link" onClick={() => setCategory('entertainment')}>Entertainment</button>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
