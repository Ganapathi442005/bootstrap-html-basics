import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';




function DarkElegantNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          <span className="text-warning">My</span>Brand
        </Link>
        
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => `nav-link px-4 ${isActive ? 'text-warning' : 'text-light'}`}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => `nav-link px-4 ${isActive ? 'text-warning' : 'text-light'}`}
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => `nav-link px-4 ${isActive ? 'text-warning' : 'text-light'}`}
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => `nav-link px-4 ${isActive ? 'text-warning' : 'text-light'}`}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>

             <li className="nav-item">
              <NavLink 
                className={({isActive}) => `nav-link px-4 ${isActive ? 'text-warning' : 'text-light'}`}
                to="/vote"
              >
                Voting
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink
              className={({isActive})  => `nav-link px-4 ${isActive ? 'text-warning' : 'text-light'}`}
              to="/expense"
              >
                Expense
              </NavLink>
            </li>
          </ul>
          
          <div className="d-flex">
            <Link className="btn btn-outline-warning me-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-warning" to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DarkElegantNavbar;
