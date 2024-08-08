import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";


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
    <>
      <div className="App">
        <div className="container">
          <RouterProvider router={router}/>
        </div>
      </div>
    </>
  );
}

export default App;
