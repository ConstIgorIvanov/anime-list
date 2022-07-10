import React from 'react';
import { clsx } from 'clsx';

import { signInWithGoogle } from '../../service/firebase';

interface SignInProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignInForm: React.FC<SignInProps> = ({ visible, setVisible }) => {
  return (
    <div className={clsx('form', !visible && 'hidden')}>
      <div className={clsx('form__container', visible && 'form__container--visible')}>
        <div className="form__container__title">
          <div>Sign IN</div>
          <div onClick={() => setVisible(false)} style={{ cursor: 'pointer' }}>
            x
          </div>
        </div>

        <div className="form__container__item" onClick={signInWithGoogle}>
          <div className="form__container__image">
            <img
              alt="google"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
            />
          </div>
          <span>Sign in with Google</span>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
