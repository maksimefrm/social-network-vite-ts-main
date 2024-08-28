import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./styles/base.scss"
import { ClerkProvider } from '@clerk/clerk-react'
import { shadesOfPurple } from "@clerk/themes"
import { PUBLISHABLE_KEY } from './utils/constants.ts'

//* google

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

//* yandex

export const baseUrl = "http://161.35.153.209:5430/api"
export const YANDEX_CLIENT_ID = import.meta.env.VIRE_CLERK_YANDEX_CLIENT_ID
export const YANDEX_CLIENT_SECRET = import.meta.env.VIRE_CLERK_YANDEX_CLIENT_SECRET
export const REDIRECT_URI = "http://localhost:5173/main";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider appearance={{baseTheme: shadesOfPurple }} publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/main">
      <App />
    </ClerkProvider>
  </React.StrictMode>
)
