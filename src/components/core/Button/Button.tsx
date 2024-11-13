import React from 'react'

interface ButtonProps {
  label: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      {label}
    </button>
  )
}
