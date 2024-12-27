import { FormState } from '@/models/Forms'
import { PostgrestError } from '@supabase/supabase-js'

const isPostgresError = (error: unknown): error is PostgrestError => {
  return (error as PostgrestError).message !== undefined
}

export const formErrorToState = (error: unknown): FormState => {
  if (isPostgresError(error)) {
    return {
      message: error.message
    }
  } else {
    return {
      message: 'An unknown error occurred'
    }
  }
}
