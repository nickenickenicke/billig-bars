interface FormInputProps {
  label: string
  name: string
  className?: string
  placeholder?: string
  defaultValue?: string
  text?: boolean
  numericInput?: boolean
  required?: boolean
}

export const FormInput = ({
  className,
  label,
  name,
  placeholder,
  defaultValue,
  text,
  numericInput,
  required
}: FormInputProps) => {
  return (
    <div className={`form-group ${className ? className : ''}`}>
      <label htmlFor={name}>{label}</label>
      <input
        inputMode={numericInput ? 'numeric' : undefined}
        type={text ? 'text' : 'number'}
        id={name}
        name={name}
        placeholder={placeholder ? placeholder : ''}
        defaultValue={defaultValue ? defaultValue : ''}
        required={required}
      />
    </div>
  )
}
