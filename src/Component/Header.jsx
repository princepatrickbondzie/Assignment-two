import "./Header.css";
const Header = () => {
  return (
    <header id="hero">
      <div class="container hero-inner">
        {/* <!-- leading text --> */}
        <div class="heading animated fadeIn">
          <h1>Start driving your credit.</h1>
          <p class="lead py-1">
            No Appointments, no obligation and free to apply. Are you looking
            for a new car?
          </p>
          <a href="./Header.jsx" class="btn-apply-light">
            Get a car now
          </a>
        </div>

        {/* <!-- banner image --> */}
        <div class="car animated fadeIn">
          <img src="./" alt="car" />
        </div>
      </div>
    </header>
  );
};
export default Header;
