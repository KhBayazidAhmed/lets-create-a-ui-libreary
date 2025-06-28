'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const components = [
    { name: 'Button', href: '/components/button' },
    { name: 'Input', href: '/components/input' },
    { name: 'Card', href: '/components/card' },
];

export function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto">
            <div className="p-6">
                <Link href="/" className="text-xl font-bold text-gray-900">
                    UI Components
                </Link>
                <p className="text-sm text-gray-600 mt-1">Demo Library</p>
            </div>

            <div className="px-6 pb-6">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                    Components
                </h3>
                <ul className="space-y-1">
                    {components.map((component) => (
                        <li key={component.href}>
                            <Link
                                href={component.href}
                                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === component.href
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }`}
                            >
                                {component.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
} 