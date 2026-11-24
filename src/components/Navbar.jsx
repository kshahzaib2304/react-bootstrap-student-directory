
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-semibold" href="#">
          StudentPortal
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto ms-lg-4">
            <li className="nav-item">
              <a className="nav-link" href="#">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Students</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Reports</a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2">
            <a className="nav-link" href="#">Settings</a>
            <span className="text-muted">▼</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
