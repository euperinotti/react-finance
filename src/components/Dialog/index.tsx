import { DialogHTMLAttributes, MouseEvent } from "react";

export interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {}

export const Dialog = ({ children, ...rest }: DialogProps) => {

  const handleDialogClick = (e: MouseEvent<HTMLDialogElement>) => {
    e.currentTarget.close()
  }

  return (
    <dialog
      {...rest}
      className="w-full h-full bg-blend-overlay bg-gray-900 bg-opacity-40 flex items-center justify-center"
      onClick={handleDialogClick}
    >
      {children}
    </dialog>
  );
};
