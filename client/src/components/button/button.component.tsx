import {FC, ButtonHTMLAttributes} from 'react'
import {
    BaseButton,
    InvertedButton,
  } from './button.styles';

export enum BUTTON_TYPE_CLASSES {
    base= 'base',
    inverted='inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

export type ButtonProps = {
    buttonType?: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button:FC<ButtonProps> = ({children, buttonType, ...otherProps}) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton {...otherProps}>
         {children}
      </CustomButton>
    )
}

export default Button