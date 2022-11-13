import Input from "./../components/input";

const RegisterTemplate = (props) => {
  const {
    headSection,
    buttonLabel,
    alterNativeOption,
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
  } = props;

  return (
    <div className="register-form">
      <div className="container">
        <img className="logo" src="./assets/devchallenges.svg" alt="" />
        {headSection}
        <div className="input-section">
          <Input
            id={1}
            type="text"
            placeholder="Email"
            icon="mail"
            className="input--primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id={2}
            type="password"
            placeholder="Password"
            icon="lock"
            className="input--primary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn--primary" onClick={handleSubmit}>
            {buttonLabel}
          </button>
        </div>
        <p>or continue with these social profile</p>
        <div className="login-options">
          <img src="./assets/Google.svg" alt="google" />
          <img src="./assets/Facebook.svg" alt="facebook" />
          <img src="./assets/Twitter.svg" alt="twitter" />
          <img src="./assets/Gihub.svg" alt="github" />
        </div>
        {alterNativeOption}
      </div>
    </div>
  );
};

export default RegisterTemplate;
