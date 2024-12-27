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
    <div className={`form-group mb-2 flex flex-col ${className ? className : ''}`}>
      <label htmlFor={name} className="mb-1">
        {label}
      </label>
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
