import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav--link">
              Home
            </Link>
          </li>
           <li>
            <Link to="/repos" className="nav--link">
              Error 404
            </Link>
          </li>
          <li>
            <Link to="/test" className="nav--link cta">
              Error boundary
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />

      <footer>&copy; 2023 Altschool second semester Examination</footer>
    </div>
  );
};

export default Layout;