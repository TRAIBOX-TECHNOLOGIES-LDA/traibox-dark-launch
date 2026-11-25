import { Button, type ButtonProps } from '@/components/ui/button';

export function V6Button({ type = 'button', ...props }: ButtonProps) {
  return <Button variant="reference" size="reference" type={type} {...props} />;
}