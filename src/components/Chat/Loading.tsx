import React from 'react'

interface LoadingProps {
  message: string
}

export default function Loading({ message }: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center margin-4">
      <svg
        className="animate-spin h-8 w-8 text-yellow-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          className="opacity-75"
          fill="#93c5fd"
          d="M4 12a8 8 0 018-8v8H4z"
        />
      </svg>
      <p className="mt-1 text-gray-600">{message}</p>
    </div>
  )
}
