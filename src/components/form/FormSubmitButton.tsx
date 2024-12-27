import { useFormStatus } from 'react-dom'
import { Button } from '../Button'

type FormSubmitButtonProps = {
  label: string
  loadingMessage: React.ReactNode
}

export const FormSubmitButton = ({ label, loadingMessage }: FormSubmitButtonProps) => {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending} className="">
      {pending ? loadingMessage : label}
    </Button>
  )
}
