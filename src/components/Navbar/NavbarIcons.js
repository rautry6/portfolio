import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/github_icon1.png";
import navIcon3 from "../../assets/img/itch-io-icon.png";

import { handleEmailClicked } from "../../functions/email";
import { HashLink } from "react-router-hash-link";

export const NavbarIcons = () => {
  return (
    <span className="navbar-text">
      <div className="social-icon">
        <a
          href="https://www.linkedin.com/in/reid-autry/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={navIcon1} alt="" />
        </a>
        <a href="https://github.com/rautry6" target="_blank" rel="noreferrer">
          <img src={navIcon2} alt="" />
        </a>
        <a href="https://saneflipper.itch.io/" target="_blank" rel="noreferrer">
          <img src={navIcon3} alt="" />
        </a>
      </div>
      <HashLink to="#connect">
        <button className="vvd" onClick={handleEmailClicked}>
          <span>Let’s Connect</span>
        </button>
      </HashLink>
    </span>
  );
};
