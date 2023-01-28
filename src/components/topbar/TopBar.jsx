import "./topbar.css";
import {Link} from "react-router-dom"

export const TopBar = () => {
  return (
    <div className="top">
      <div className="top-left">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
      </div>
      <div className="top-center">
        <ul className="topList">
          <Link className="link topListItem" to="/">HOME</Link>
          <Link className="link topListItem" to="/">ABOUT</Link>
          <Link className="link topListItem" to="/">CONTACT</Link>
          <Link className="link topListItem" to="/write">WRITE</Link>
          <Link className="link topListItem" to="/">{"LOGOUT"}</Link>
          
        </ul>
      </div>
      <div className="top-right">
        <img
          className="topImg"
          src="https://ca.slack-edge.com/TLB93JX3P-U048Z8N43T4-97c1f1e1a8d1-512"
          alt=""
        />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};
