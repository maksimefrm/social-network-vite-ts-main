

export const router = createBrowserRouter([
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
    }
  ]);