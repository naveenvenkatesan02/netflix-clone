import { Link } from "react-router-dom";
import logo from "./Assests/netflix-logo.png";
import "./Header.css";
import "./Home.css";
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" height={50} />
      </div>
      <div className="sign-in ">
        <Link to={"/sign-in"}>
          <button type="submit">Sign in</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
