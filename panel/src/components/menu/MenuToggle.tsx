import { cloneElement, FC, PropsWithChildren, ReactNode } from "react";

interface Props {
  children: any;
  handleClick?: () => void;
  className?: string;
}
const MenuToggle: FC<Props> = ({ children, handleClick, className }) => {
  return (
    <span className={className}>
      {cloneElement(children, {
        onClick: handleClick,
        ...children.props,
      })}
    </span>
  );
};

export default MenuToggle;
