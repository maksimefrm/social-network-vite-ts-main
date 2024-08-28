import { Link } from "react-router-dom";
import { Paragraph, Span } from "../UI";
import { SignInButton } from "@clerk/clerk-react";

const YANDEX_CLIENT_ID = "d8d071002ccd49aa9d8973f60e33d200";
const REDIRECT_URI = "http://localhost:5173/main";

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
