import { FormState } from '@/models/Forms'

export const formErrorToState = (error: unknown): FormState => {
  if (error instanceof Error) {
    return {
      message: error.message
    }
  } else {
    return {
      message: 'An unknown error occurred'
    }
  }
}
