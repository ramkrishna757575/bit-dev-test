import React, { ReactNode } from 'react';
import Button from '@mui/material/Button';

export type ButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function MuiButton({ children }: ButtonProps) {
  return (
    <Button variant="contained">
      {children}
    </Button>
  );
}
