import { Link } from "react-router-dom";
import { Paragraph, Span } from "../UI";
import { SignInButton } from "@clerk/clerk-react";
import { YANDEX_CLIENT_ID } from "../../utils/constants";
import { REDIRECT_URI } from "../../utils/constants";

const YANDEX_AUTH_URL = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${YANDEX_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

const handleLogin = () => {
  window.location.href = YANDEX_AUTH_URL;
};

interface IRegistrationInfo {
  linkText: string;
  hasAccountText: string;
  authWithText: string;
  navigatePath: string;
}

const RegistrationInfo = ({
  linkText,
  hasAccountText,
  authWithText,
  navigatePath,
}: IRegistrationInfo) => {
  return (
    <div className="registration">
      <Span>
        {hasAccountText} <Link to={navigatePath}>{linkText}</Link>
      </Span>
      <Paragraph>{authWithText}</Paragraph>
      <div className="icons-wrapper">
        <SignInButton
          children={
            <Link className="reg__link google-link" to="#">
              <img src="./img/icons/google.svg" alt="Google" />
            </Link>
          }
        />
        <Link className="reg__link yandex-link" to="#" onClick={handleLogin}>
          <img src="./img/icons/yandex.svg" alt=".ru" />
        </Link>
        <Link className="reg__link mail-ru-link" to="#">
          <img src="./img/icons/mail-ru.svg" alt="Mail.ru" />
        </Link>
      </div>
    </div>
  );
};

export default RegistrationInfo;
