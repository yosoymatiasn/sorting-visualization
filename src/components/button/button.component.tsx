import { ButtonHTMLAttributes, FC } from "react";

import { BaseButton } from "./button.styles";

export enum BUTTON_TYPE_CLASSES {
	base = "base",
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton =>
	({
		[BUTTON_TYPE_CLASSES.base]: BaseButton,
	}[buttonType]);

export type ButtonProps = {
	buttonType?: BUTTON_TYPE_CLASSES;
	isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
	children,
	buttonType,
	isLoading,
	...otherProps
}) => {
	const CustomButton = getButton(buttonType);
	return (
		<CustomButton disabled={isLoading} {...otherProps}>
			{/* {isLoading ? <ButtonSpinner /> : children} */}
			{children}
		</CustomButton>
	);
};

export default Button;
