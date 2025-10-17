
import React from 'react';

interface DrawerButtonProps extends React.PropsWithChildren<{}> {
    className?: string;  
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const DrawerButton: React.FC<DrawerButtonProps> = ({ children, onClick,className }) => {
  return <button
    className={className}
   onClick={onClick}>{children}</button>;
}

export default DrawerButton;
