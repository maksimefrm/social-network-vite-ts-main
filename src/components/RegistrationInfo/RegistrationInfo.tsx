import { Link } from "react-router-dom";
import { Paragraph, Span } from "../UI";
import { SignInButton } from "@clerk/clerk-react";
import { YANDEX_CLIENT_ID } from "../../utils/constants";
import { REDIRECT_URI } from "../../utils/constants";
import { useGetTokenMutation } from "../../Store/api/yandexApi";
import { useEffect } from "react";

interface IRegistrationInfo {
  linkText: string;
  hasAccountText: string;
  authWithText: string;
  navigatePath: string;
}

//* yandex 1 способ

const YANDEX_AUTH_URL = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${YANDEX_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

const handleLogin = () => {
  window.location.href = YANDEX_AUTH_URL;
};

//* yandex 2 способ

const YandexAuth = () => {
  const [getToken, { data: tokenData, isLoading }] = useGetTokenMutation();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      getToken({ code });
    }
  }, [getToken]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {!tokenData ? (
        <a href={YANDEX_AUTH_URL}>
        <Link className="reg__link yandex-link" to="#" onClick={handleLogin}>
          <img src="./img/icons/yandex.svg" alt=".ru" />
        </Link></a>
      ) : (
        <div>Токен: {tokenData.access_token}</div>
      )}
    </div>
  );
};


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
        <YandexAuth />
        <Link className="reg__link mail-ru-link" to="#">
          <img src="./img/icons/mail-ru.svg" alt="Mail.ru" />
        </Link>
      </div>
    </div>
  );
};

export default RegistrationInfo;
