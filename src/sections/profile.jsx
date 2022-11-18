import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./../context/userAuthContext";

const Profile = () => {
  const { user } = useContext(User);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/profile/edit");
  };

  return (
    <div className="profile-section">
      <div className="header">
        <div className="title">Personal info</div>

        <p className="sub-title">Basic info, like your name and photo</p>
      </div>

      <div className="container">
        <div>
          <div className="container__header">
            <div>
              <div className="title">profile</div>
              <p className="sub-title">
                Some info may be visible to other people
              </p>
            </div>
            <button className="btn--secondary" onClick={handleEdit}>
              edit
            </button>
          </div>

          <div className="details">
            <div className="detail">
              <span className="detail__name">photo</span>

              {user && user.photoURL ? (
                <img src={user.photoURL} alt="" />
              ) : (
                <span className="material-symbols-rounded">account_box</span>
              )}
            </div>

            <div className="detail">
              <span className="detail__name">name</span>

              <span className="result">
                {user && user.displayName ? user.displayName : "No Name"}
              </span>
            </div>

            <div className="detail">
              <span className="detail__name">bio</span>

              <span className="result">
                {user && user.bio ? user.bio : "No Bio"}
              </span>
            </div>

            <div className="detail">
              <span className="detail__name">email</span>

              <span className="result">
                {user && user.email ? user.email : "No email"}
              </span>
            </div>

            <div className="detail">
              <span className="detail__name">password</span>

              <span className="result">*******</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
