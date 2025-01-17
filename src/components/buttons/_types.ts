export type ButtonProps = React.PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    (
      | {
          unstyled?: false;
          loading?: boolean;
          variant?: 'fill' | 'outline';
          size?: 'sm' | 'md' | 'lg';
        }
      | {
          unstyled: true;
          loading?: boolean;
          variant?: never;
          size?: never;
        }
    )
>;
