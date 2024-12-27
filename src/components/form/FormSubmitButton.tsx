import { useFormStatus } from 'react-dom'
import { Button } from '../Button'

type FormSubmitButtonProps = {
  label: string
  loadingMessage: React.ReactNode
  className?: string
}

export const FormSubmitButton = ({ label, loadingMessage, className }: FormSubmitButtonProps) => {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending} className={`${className ? className : ''}`}>
      {pending ? loadingMessage : label}
    </Button>
  )
}
