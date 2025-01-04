import { GeolocationPositionErrorMessage } from '@/lib/errorMessages'
import { FormState } from '@/models/Forms'
import { PostgrestError } from '@supabase/supabase-js'

const isPostgresError = (error: unknown): error is PostgrestError => {
  return (error as PostgrestError).message !== undefined
}

export const formErrorToFormState = (error: unknown): FormState => {
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

export const handleGeolocationPositionError = (error: GeolocationPositionError) => {
  if (error.PERMISSION_DENIED) {
    return GeolocationPositionErrorMessage[1]
  }
  if (error.POSITION_UNAVAILABLE) {
    return GeolocationPositionErrorMessage[2]
  }
  if (error.TIMEOUT) {
    return GeolocationPositionErrorMessage[3]
  }
  return GeolocationPositionErrorMessage[0]
}
