import React from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    error?: string;
    helperText?: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'outline' | 'filled';
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({
        label,
        error,
        helperText,
        size = 'md',
        variant = 'outline',
        className,
        ...props
    }, ref) => {
        const baseClasses = 'w-full rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

        const variantClasses = {
            outline: 'border-gray-300 bg-white focus:border-primary-500 focus:ring-primary-500',
            filled: 'border-transparent bg-gray-100 focus:bg-white focus:border-primary-500 focus:ring-primary-500'
        };

        const sizeClasses = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-4 py-2 text-base',
            lg: 'px-6 py-3 text-lg'
        };

        const errorClasses = error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
            : '';

        return (
            <div className="space-y-1">
                {label && (
                    <label className="block text-sm font-medium text-gray-700">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={cn(
                        baseClasses,
                        variantClasses[variant],
                        sizeClasses[size],
                        errorClasses,
                        className
                    )}
                    {...props}
                />
                {error && (
                    <p className="text-sm text-red-600">{error}</p>
                )}
                {helperText && !error && (
                    <p className="text-sm text-gray-600">{helperText}</p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input'; 