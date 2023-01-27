import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Genesys Interns</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://res.cloudinary.com/dq49b0ddj/image/upload/v1674737991/pexels-rostislav-uzunov-5011647_bpdyvr.jpg"
        alt="blog page"
      />
    </div>
  );
};
