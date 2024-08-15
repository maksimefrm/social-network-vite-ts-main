import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";


const router = createBrowserRouter([
  {
    path:"/",
    element:<LoginPage/>
  },
  {
    path:"/registration",
    element:<RegistrationPage/>
  },
  {
    path:"/main",
    element:<MainPage/>
  },
  {
    path:"/profile",
    element:<ProfilePage/>
  }
]) 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="container">
          <RouterProvider router={router}/>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
