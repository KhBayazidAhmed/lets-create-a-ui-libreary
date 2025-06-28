import { NextResponse } from 'next/server';

const components = [
    {
        name: 'Button',
        slug: 'button',
        description: 'A customizable button component with multiple variants and sizes.',
        category: 'Form',
        version: '1.0.0'
    },
    {
        name: 'Input',
        slug: 'input',
        description: 'A versatile input component with labels, validation, and helper text.',
        category: 'Form',
        version: '1.0.0'
    },
    {
        name: 'Card',
        slug: 'card',
        description: 'A flexible container component for organizing content.',
        category: 'Layout',
        version: '1.0.0'
    }
];

export async function GET() {
    return NextResponse.json({
        components,
        total: components.length
    });
} 