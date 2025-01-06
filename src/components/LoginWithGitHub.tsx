'use client'

import { logInWithGitHub } from '@/actions/logInAction'

export const LoginWithGitHub = () => {
  return (
    <button
      onClick={() => {
        logInWithGitHub(window.location.hostname)
      }}
    >
      Logga in med GitHub
    </button>
  )
}
