import { useFormStatus } from 'react-dom'

type FormSubmitButtonProps = {
  label: string
  loadingMessage: React.ReactNode
}

export const FormSubmitButton = ({ label, loadingMessage }: FormSubmitButtonProps) => {
  const { pending } = useFormStatus()

  return (
    <button disabled={pending} type="submit" className="">
      {pending ? loadingMessage : label}
    </button>
  )
}
