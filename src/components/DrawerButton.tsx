
import React from 'react';

interface DrawerButtonProps  {
  className?: string;  
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

const DrawerButton = ({ children, onClick,className }:DrawerButtonProps) => {
  return <button
    className={className}
   onClick={onClick}>{children}
   </button>;
}

export default DrawerButton;
