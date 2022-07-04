import React from 'react';

import SignInForm from './SignInForm';

const LoginPage = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className="login">
      <div className="login__left">
        <div className="login__left__title">A new level of anime listing</div>
        <div className="login__left__description">
          Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adip
          Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip
        </div>
        <button onClick={() => setVisible(true)} className="button">
          Create a list
        </button>
      </div>
      <div className="login__right">
        <div className="login__right__image"></div>
      </div>
      <SignInForm visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default LoginPage;
