import { useContext } from "react";
import { ThemeContext } from "../App";

const Header = () => {
  // Get darkTheme (boolean) value & toggleTheme method from ThemeContext via the useContext hook.
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkTheme ? "navbar-dark bg-dark" : "navbar-light bg-light"
      } 
      shadow-lg w-100`}>
      <div className='container-fluid'>
        <div style={{ cursor: "pointer" }} className='navbar-brand'>
          Navbar
        </div>
        <div
          style={{ cursor: "pointer" }}
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarScroll'
          aria-controls='navbarScroll'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </div>
        <div className='collapse navbar-collapse' id='navbarScroll'>
          <ul
            className='navbar-nav my-2 my-lg-0 navbar-nav-scroll'
            style={{ "--bs-scroll-height": "100px", marginLeft: "auto" }}>
            <li className='nav-item dropdown'>
              <div
                style={{ cursor: "pointer" }}
                className='nav-link dropdown-toggle'
                id='navbarScrollingDropdown'
                data-bs-toggle='dropdown'
                aria-expanded='false'>
                options
              </div>
              <ul
                className='dropdown-menu'
                aria-labelledby='navbarScrollingDropdown'>
                <li></li>
                <li>
                  <div
                    style={{ cursor: "pointer" }}
                    className='dropdown-item'
                    onClick={toggleTheme}>
                    {darkTheme ? "Light Theme" : "Dark Theme"}
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
