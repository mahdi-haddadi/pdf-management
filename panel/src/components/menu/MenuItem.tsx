import classNames from "classnames";
import { FC, ReactNode } from "react";
interface Props {
  onClose?: () => void;
  className?: string;
  children: ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  onCloseMenu?: () => void;
}
const MenuItem: FC<Props> = ({
  onClose,
  className,
  children,
  active,
  disabled,
  onClick,
  onCloseMenu,
}) => {
  return (
    <li
      onClick={() => {
        onClose && onClose();
        onClick && onClick();
        onCloseMenu && onCloseMenu();
      }}
      className={classNames(
        className,
        "px-4 py-2 border-b border-gray-200 w-full select-none cursor-pointer",
        {
          "bg-blue-600 text-white": active,
          "text-gray-400 cursor-default": disabled,
          "hover:bg-bg-default transition duration-100 cursor-pointer":
            !disabled && !active,
        }
      )}
    >
      {children}
    </li>
  );
};

export default MenuItem;
