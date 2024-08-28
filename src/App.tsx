// import {
//   createBrowserRouter,
//   BrowserRouter as
//   Routes,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import { LoginPage } from "./pages/LoginPage/LoginPage";
// import { MainPage } from "./pages/MainPage/MainPage";
// import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
// import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
// import { ThemeProvider } from "styled-components";
// import { theme } from "./theme/theme";
// import { Provider } from "react-redux";
// import { store } from "./Store/Store";
// import { RegistrationInfo } from "./components/UI";
// import AuthCallback from "./components/AuthCallBack/AuthCallBack";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LoginPage />,
//   },
//   {
//     path: "/registration",
//     element: <RegistrationPage />,
//   },
//   {
//     path: "/main",
//     element: <MainPage />,
//   },
//   {
//     path: "/profile",
//     element: <ProfilePage />,
//   },
//   {
//     path: "/auth/callback",
//     element: <AuthCallback />,
//   },
// ]);

// function App() {
//   return (
//     <Provider store={store}>
//       <ThemeProvider theme={theme}>
//         <div className="App">
//           <div className="container">
//             <RouterProvider router={router} />
//             <Routes>
//               <Route
//                 path="/registration"
//                 element={
//                   <RegistrationInfo
//                     linkText="Войти"
//                     hasAccountText="Уже есть аккаунт?"
//                     authWithText="Авторизоваться через:"
//                     navigatePath="/login"
//                   />
//                 }
//               />
//               <Route path="/auth/callback" element={<AuthCallback />} />
//               <Route path="/main" element={<MainPage />} />
//             </Routes>
//           </div>
//         </div>
//       </ThemeProvider>
//     </Provider>
//   );
// }

// export default App;

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import AuthCallback from "./components/AuthCallBack/AuthCallBack";

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
]);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="container">
            <RouterProvider router={router} />
          </div>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

