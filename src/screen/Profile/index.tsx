import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import preview from "assets/wave.jpg";
import { Button } from "components";

import "./styles.scss";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__navigation">
        <ArrowBackIcon className="profile__arrow" />
        <div className="profile__user-info">
          <h1 className="profile__username">User Name</h1>
          <p className="profile__post-count">post count</p>
        </div>
      </div>
      <div className="profile__user">
        <img src={preview} alt="preview" className="profile__preview" />
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="user"
          className="profile__user-photo"
        />
        <Button
          text="Change user info"
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
          style="user"
        />
      </div>
    </div>
  );
};
