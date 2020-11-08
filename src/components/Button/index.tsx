import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = null }) => (
    <button className={cn(s.root, className)}>
        {children}
    </button>
);

export default Button;
