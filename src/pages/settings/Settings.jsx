import { Sidebar } from "../../components/sidebar/Sidebar";
import "./settings.css";

export const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://ca.slack-edge.com/TLB93JX3P-U048Z8N43T4-97c1f1e1a8d1-512"
              alt=""
              className="settingsImg"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label> Username</label>
          <input type="text" placeholder="Achykez" />
          <label> Email</label>
          <input type="email" placeholder="chyke.ghoul@gmail.com" />
          <label> Phone Number</label>
          <input type="tel" placeholder="+234 ..." />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};
