import type { ButtonProps } from './_types';

export const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
  return <button {...props}>Click me</button>;
};
