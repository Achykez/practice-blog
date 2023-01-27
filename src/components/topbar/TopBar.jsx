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
          src="https://res.cloudinary.com/dq49b0ddj/image/upload/v1674524192/WhatsApp_Image_2023-01-23_at_11.41.50_oxgmam.jpg"
          alt=""
        />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};
