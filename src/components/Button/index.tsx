import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';
interface ButtonProps {
    className?: string;
    onClick?:()=>void;
}

const Button: React.FC<ButtonProps> = ({ children, className = null ,onClick}) => (
    <Button onClick={onClick} className={cn(s.root, className)}>
        {children}
    </Button>
);

export default Button;
