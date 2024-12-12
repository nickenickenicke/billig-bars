interface FormInputProps {
  label: string
  name: string
  className?: string
  placeholder?: string
  defaultValue?: string
  text?: boolean
  numericInput?: boolean
  required?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormInput = ({
  className,
  label,
  name,
  placeholder,
  defaultValue,
  text,
  numericInput,
  required,
  value,
  onChange
}: FormInputProps) => {
  return (
    <div className={`form-group flex flex-col ${className ? className : ''}`}>
      <label htmlFor={name}>{label}</label>
      <input
        inputMode={numericInput ? 'decimal' : undefined}
        type={text ? 'text' : 'number'}
        id={name}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
