'use client'

import { logInWithGitHub } from '@/actions/logInAction'

export const LoginWithGitHub = () => {
  return (
    <button
      onClick={() => {
        logInWithGitHub()
      }}
    >
      Logga in med GitHub
    </button>
  )
}
