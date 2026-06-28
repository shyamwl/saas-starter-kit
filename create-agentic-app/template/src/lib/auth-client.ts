import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
  // In the browser, default to the current origin so it works on any
  // deployment (Vercel preview/prod) even when NEXT_PUBLIC_APP_URL is unset.
  // Falling back to localhost in production caused requests to fail.
  baseURL:
    typeof window !== "undefined"
      ? process.env.NEXT_PUBLIC_APP_URL || window.location.origin
      : process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
})

export const {
  signIn,
  signOut,
  signUp,
  useSession,
  getSession,
  requestPasswordReset,
  resetPassword,
  sendVerificationEmail,
} = authClient