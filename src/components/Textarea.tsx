import { twMerge } from 'tailwind-merge';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  containerClassName?: string;
  labelClassName?: string;
  label: string;
  variant?: 'fill' | 'outline';
};

const variantClassName: Record<NonNullable<TextareaProps['variant']>, string> = {
  fill: 'bg-light border-light-700/40 outline-light-700/40',
  outline: 'bg-transparent border-light-700/40 outline-light-700/40',
};

export default function Textarea({
  containerClassName,
  labelClassName,
  label,
  variant = 'outline',
  ...props
}: TextareaProps) {
  return (
    <div className={twMerge('w-full space-y-2', containerClassName)}>
      <label htmlFor={props.id} className={twMerge('block w-fit', labelClassName)}>
        {label}
      </label>
      <textarea
        {...props}
        className={twMerge(
          'w-full min-h-24 px-4 py-2 bg-light-500 border border-light-700/40 rounded-md outline-light-700 outline-offset-4',
          variantClassName[variant],
          props.className,
        )}
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
}
