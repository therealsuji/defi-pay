import { cva, VariantProps } from "cva";
import { FCC } from "types";

const buttonStyles = cva("bg-btn-fill text-btn-text p-4 rounded-md font-medium", {
  variants: {
    size: {
      small: "",
      medium: "",
      large: "min-w-[300px]",
    },
  },
});

export type ButtonProps = VariantProps<typeof buttonStyles>;

export const Button: FCC<ButtonProps> = ({ children, size }) => {
  return <button className={buttonStyles({ size })}> {children}</button>;
};
