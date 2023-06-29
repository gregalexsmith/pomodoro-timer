import { cn } from '../../utils';

type HeaderProps = {
  className?: string;
  children: React.ReactNode;
};

export const H2 = ({ className, ...rest }: HeaderProps) => {
  return <h2 className={cn('font-black text-3xl', className)} {...rest} />;
};

export const H3 = (props: HeaderProps) => {
  return <h3 className="font-bold text-2xl" {...props} />;
};
