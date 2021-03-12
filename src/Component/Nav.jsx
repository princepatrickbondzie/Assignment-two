import "./Nav.css";
const Nav = () => {
  return (
    //  <!-- navigation -->
    <nav id="navbar">
      <div class="container navbar-inner">
        {/* <!-- logo --> */}
        <div class="logo">
          <a href="#hero">APPROVAL1</a>
        </div>

        {/* <!-- navigation links --> */}
        <ul class="links">
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#inventory">Inventory</a>
          </li>
          <li>
            <a href="#contact">Contact us</a>
          </li>
          <li>
            <a href="./nav.jsx" class="btn-apply-dark">
              Apply now
            </a>
          </li>
        </ul>

        {/* <!-- menu icon --> */}
        <div class="hamburger" onclick="showMenu()">
          <i data-feather="menu"></i>
        </div>
      </div>
    </nav>
  )
};
export default Nav;
