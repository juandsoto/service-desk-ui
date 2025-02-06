export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  containerClassName?: string;
  labelClassName?: string;
  label?: string;
  variant?: 'fill' | 'outline';
  actions?: React.ReactNode;
  rightAction?: React.ReactNode;
  error?: string;
};

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  containerClassName?: string;
  labelClassName?: string;
  label?: string;
  variant?: 'fill' | 'outline';
  error?: string;
  actions?: React.ReactNode;
};
