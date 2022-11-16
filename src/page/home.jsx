import { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { User } from "../context/userAuthContext";
import Profile from "../sections/profile";
import EditProfile from "./../sections/profileEdit";

const Home = () => {
  const { user, logout } = useContext(User);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/profile");
  }, []);

  const handleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div>
      <header>
        <img src="/assets/devchallenges.svg" alt="" />

        <div className="profile" onClick={handleMenu}>
          {user && user.photoURL ? (
            <img src={user.photoURL} alt="" />
          ) : (
            <span className="material-symbols-rounded profile">
              account_box
            </span>
          )}

          <div className="profile-name">
            {user && user.name ? user.name : "user name"}
          </div>

          <span className="material-symbols-rounded icon">
            {"arrow_drop_" + (showMenu ? "up" : "down")}
          </span>
        </div>

        {showMenu && (
          <div className="popup-menu">
            <div className="active">
              <span className="material-symbols-rounded">account_circle</span>
              <span>my profile</span>
            </div>

            <div>
              <span className="material-symbols-rounded">group</span>
              <span>group Chat</span>
            </div>

            <div className="logout" onClick={logout}>
              <span className="material-symbols-rounded">logout</span>
              <span>logout</span>
            </div>
          </div>
        )}
      </header>

      <Routes>
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Home;
