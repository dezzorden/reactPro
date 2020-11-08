import React from 'react';
import cn from 'classnames';

import s from './Layout.module.scss';

interface ButtonProps {
    className?: string;
}

const Layout: React.FC<ButtonProps> = ({ children, className = null }) => (
    <button className={cn(s.root, className)}>
        {children}
    </button>
);

export default Layout;
