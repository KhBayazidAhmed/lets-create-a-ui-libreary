'use client';

import React from 'react';
import { Button, Input, Card, CardHeader, CardContent } from '@demo-ui/library';

interface ComponentPreviewProps {
    componentName: string;
}

const ComponentExamples = {
    button: () => (
        <div className="space-x-2 space-y-2 flex flex-wrap items-center bg-gray-50 text-gray-500">
            <Button variant="primary" className="bg-gray-50 text-gray-500">Primary</Button>
            <Button variant="secondary" className="bg-gray-50 text-gray-500">Secondary</Button>
            <Button variant="outline" className="bg-gray-50 text-gray-500">Outline</Button>
            <Button variant="ghost" className="bg-gray-50 text-gray-500">Ghost</Button>
            <Button size="sm" className="bg-gray-50 text-gray-500">Small</Button>
            <Button size="lg" className="bg-gray-50 text-gray-500">Large</Button>
            <Button disabled className="bg-gray-50 text-gray-500">Disabled</Button>
        </div>
    ),

    input: () => (
        <div className="space-y-4 max-w-md bg-gray-50 text-gray-500">
            <Input label="Email" placeholder="Enter your email" />
            <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                helperText="Must be at least 8 characters"
            />
            <Input
                label="Username"
                placeholder="Enter username"
                error="Username is already taken"
            />
            <Input variant="filled" label="Filled Input" placeholder="Filled variant" />
        </div>
    ),

    card: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl bg-gray-50 text-gray-500">
            <Card variant="bordered">
                <CardHeader>
                    <h3 className="text-lg font-semibold">Bordered Card</h3>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-600">This is a card with border variant.</p>
                </CardContent>
            </Card>

            <Card variant="shadow">
                <CardHeader>
                    <h3 className="text-lg font-semibold">Shadow Card</h3>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-600">This card has a shadow effect.</p>
                </CardContent>
            </Card>
        </div>
    )
};

export function ComponentPreview({ componentName }: ComponentPreviewProps) {
    const ExampleComponent = ComponentExamples[componentName as keyof typeof ComponentExamples];

    if (!ExampleComponent) {
        return (
            <div className="p-8 border border-gray-200 rounded-lg bg-gray-50">
                <p className="text-gray-500">Preview not available for {componentName}</p>
            </div>
        );
    }

    return (
        <div className="p-8 border border-gray-200 rounded-lg bg-white">
            <ExampleComponent />
        </div>
    );
} 