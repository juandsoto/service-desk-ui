export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  containerClassName?: string;
  labelClassName?: string;
  label: string;
  variant?: 'fill' | 'outline';
};

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  containerClassName?: string;
  labelClassName?: string;
  label: string;
  variant?: 'fill' | 'outline';
};
