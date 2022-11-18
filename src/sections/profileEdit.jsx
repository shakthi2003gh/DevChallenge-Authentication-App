import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./../components/input";
import { User } from "./../context/userAuthContext";

const EditProfile = () => {
  const navigate = useNavigate();
  const { user, updateUserDetail } = useContext(User);
  const [image, setImage] = useState((user && user.photoURL) || "");
  const [imageBlob, setImageBlob] = useState();
  const [inputs, setInputs] = useState([
    { type: "text", label: "name", value: "" },
    { type: "text", label: "bio", value: "" },
    { type: "email", label: "email", value: "" },
    { type: "password", label: "password", value: "" },
  ]);

  const handleType = (e) => {
    const index = e.target.id;
    const value = e.target.value;

    setInputs((prev) =>
      prev.map((input, i) => {
        if (i == index) input.value = value;
        return input;
      })
    );
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImageBlob(file);
      setImage(reader.result);
    };
  };

  const handleSubmit = async () => {
    const obj = {};

    const imageObj =
      imageBlob &&
      imageBlob.name &&
      !String(user.photoURL).includes(imageBlob.name)
        ? { photoURL: imageBlob }
        : {};

    inputs
      .filter((input) => input.value !== "")
      .forEach((input) => {
        switch (input.label) {
          case "name":
            obj.displayName = input.value;
            break;
          case "bio":
            obj.bio = input.value;
            break;
          case "phone":
            obj.phoneNumber = input.value;
            break;
          case "email":
            obj.email = input.value;
            break;
          case "password":
            obj.password = input.value;
            break;
        }
      });

    await updateUserDetail({ ...obj, ...imageObj });
    navigate("/profile");
  };

  return (
    <div className="profile-edit">
      <Link to="/profile">
        <span className="material-symbols-rounded">arrow_back_ios</span> back
      </Link>

      <div className="container">
        <div className="title">Change Info</div>
        <p className="sub-title">Changes will be reflected to every services</p>

        <div className="photo">
          <label htmlFor="input">
            {image ? (
              <img src={image} alt="" />
            ) : (
              <span className="material-symbols-rounded">account_box</span>
            )}
            CHANGE PHOTO
          </label>
          <input
            type="file"
            id="input"
            accept="image/*"
            onChange={handleImage}
          />
        </div>

        <div className="inputs">
          {inputs.map(({ type, label, value }, i) => (
            <Input
              key={i}
              id={i}
              type={type}
              label={label}
              value={value}
              onChange={handleType}
              className="input--secondary"
            />
          ))}

          <button className="btn--primary" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
