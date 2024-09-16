import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/base.scss";
import { ClerkProvider } from "@clerk/clerk-react";
import { shadesOfPurple } from "@clerk/themes";
import { PUBLISHABLE_KEY } from "./utils/constants.ts";

export const baseUrl = "http://161.35.153.209:5430/api";
export const YANDEX_CLIENT_ID = import.meta.env.VIRE_CLERK_YANDEX_CLIENT_ID;
export const YANDEX_CLIENT_SECRET = import.meta.env.VIRE_CLERK_YANDEX_CLIENT_SECRET;
export const REDIRECT_URI = "http://localhost:5173/main";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import AuthCallback from "./components/AuthCallBack/AuthCallBack";
import PostPage from "./pages/PostPage/PostPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/auth/callback",
    element: <AuthCallback />,
  },
  {
    path: "/post/:id",
    element: <PostPage />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider
      appearance={{ baseTheme: shadesOfPurple }}
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/main"
    >
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <div className="container">
              <RouterProvider router={router} />
            </div>
          </div>
        </ThemeProvider>
      </Provider>
    </ClerkProvider>
  </React.StrictMode>
);
