
import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

export default function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>{label}</button>
  );
}