const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={require("../assets/logo.png")} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
