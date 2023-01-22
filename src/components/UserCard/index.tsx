import { Button } from "components";
import { IUser } from "types/interfaces";

import "./styles.scss";

export const UserCard: React.FC<IUser> = ({
  photo,
  name,
  lastName,
  email,
  description = "description",
}) => {
  return (
    <div className="user">
      <img src={photo} alt="user" className="user__photo" />
      <div className="user__info">
        <h1 className="user__name">
          {name} {lastName}
        </h1>
        <p className="user__email">{email}</p>
        <p className="user__description">{description}</p>
      </div>
      <Button
        text="Follow"
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        style="follow"
      />
    </div>
  );
};
