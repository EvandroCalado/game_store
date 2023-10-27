import classNames from 'classnames';
import styles from './Discount.module.scss';

export type DiscountProps = {
  children: React.ReactNode;
  className?: string;
};

export function Discount({ children, className }: DiscountProps) {
  return (
    <div
      className={classNames(styles.labelDiscount, { [className!]: className })}
    >
      {children}
    </div>
  );
}
