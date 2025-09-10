import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type feedback = {
  SubmitDate: string
  SubmitDevice: string
}

export function countRoles(): object {
  const roles = [
    {
      id: 5,
      title: 'lecturer',
    },
    {
      id: 4,
      title: 'FAOCC',
    },
    {
      id: 3,
      title: 'adjunct',
    },
    {
      id: 2,
      title: 'administrator',
    },
    {
      id: 1,
      title: 'other',
    },
  ]
  return {}
}
