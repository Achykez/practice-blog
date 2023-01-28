import "./topbar.css";

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
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
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
