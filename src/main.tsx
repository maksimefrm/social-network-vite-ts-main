import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./styles/base.scss"
import { ClerkProvider } from '@clerk/clerk-react'
import { shadesOfPurple } from "@clerk/themes"

//* google

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

//* yandex


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider appearance={{baseTheme: shadesOfPurple }} publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/main">
      <App />
    </ClerkProvider>
  </React.StrictMode>
)
