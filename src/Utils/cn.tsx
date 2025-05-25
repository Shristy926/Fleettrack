import clsx from 'clsx'; // You might need to install 'clsx' or 'classnames'
import { twMerge } from 'tailwind-merge'; // And 'tailwind-merge' for Tailwind conflicts

// utils/cn.ts
export function cn(...args: (string | boolean | undefined | null)[]) {
  return args.filter(Boolean).join(' ');
}