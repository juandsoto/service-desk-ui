import { twMerge } from 'tailwind-merge';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  containerClassName?: string;
  labelClassName?: string;
  label: string;
  variant?: 'fill' | 'outline';
};

const variantClassName: Record<NonNullable<InputProps['variant']>, string> = {
  fill: 'bg-light border-light-700/40 outline-light-700/40',
  outline: 'bg-transparent border-light-700/40 outline-light-700/40',
};

export default function Input({
  containerClassName,
  labelClassName,
  label,
  variant = 'outline',
  ...props
}: InputProps) {
  return (
    <div className={twMerge('w-full space-y-2', containerClassName)}>
      <label htmlFor={props.id} className={twMerge('block w-fit', labelClassName)}>
        {label}
      </label>
      <input
        {...props}
        className={twMerge(
          'w-full px-4 py-2 border rounded-md outline-offset-4',
          variantClassName[variant],
          props.className,
        )}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
}
