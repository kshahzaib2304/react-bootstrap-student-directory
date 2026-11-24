
function Footer() {
  return (
    <footer className="footer bg-dark text-white mt-3">
      <div className="container py-4">
        <div className="row">

          <div className="col-md-6 mb-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">Computer Science</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Reports</a></li>
            </ul>
          </div>

          <div className="col-md-6 mb-3">
            <h5>Contact Info</h5>
            <p className="mb-1">Contact Us</p>
            <p className="mb-1">+1: 123 456 7890</p>
            <p className="mb-1">trm@studentportal.com</p>
          </div>

        </div>

        <hr />

        <p className="text-center mb-0 small">
          © 2024 StudentPortal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
