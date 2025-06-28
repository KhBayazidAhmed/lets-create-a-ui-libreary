'use client';

import { Button, Input, Card, CardHeader, CardContent } from '@demo-ui/library';
import { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            UI Component Demo App
          </h1>
          <p className="text-xl text-gray-600">
            Example application showcasing the @demo-ui/library components
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Button Examples */}
          <Card variant="bordered">
            <CardHeader>
              <h2 className="text-2xl font-semibold">Button Components</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Variants</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Sizes</h3>
                  <div className="flex flex-wrap gap-2 items-center">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">States</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button>Normal</Button>
                    <Button disabled>Disabled</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Input Examples */}
          <Card variant="bordered">
            <CardHeader>
              <h2 className="text-2xl font-semibold">Input Components</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  label="Name"
                  placeholder="Enter your name"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />

                <Input
                  label="Email"
                  type="email"
                  placeholder="user@example.com"
                  helperText="We'll never share your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                  error={password.length > 0 && password.length < 8 ? "Password must be at least 8 characters" : ""}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Input
                  label="Filled Input"
                  variant="filled"
                  placeholder="Filled variant"
                />
              </div>
            </CardContent>
          </Card>

          {/* Interactive Example */}
          <Card variant="bordered" className="lg:col-span-2">
            <CardHeader>
              <h2 className="text-2xl font-semibold">Interactive Example</h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Login Form</h3>
                  <div className="space-y-4">
                    <Input
                      label="Email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                      label="Password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex gap-2">
                      <Button variant="primary">Sign In</Button>
                      <Button variant="outline">Cancel</Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Form Values</h3>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <pre className="text-sm">
                      {JSON.stringify({
                        name: inputValue,
                        email: email,
                        password: password ? '•'.repeat(password.length) : ''
                      }, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card variant="bordered" padding="lg">
            <CardContent>
              <h2 className="text-2xl font-semibold mb-4">🎉 Component System Demo</h2>
              <p className="text-gray-600 mb-6">
                This example demonstrates a working UI component system with:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <ul className="space-y-2">
                  <li>✅ Reusable React components</li>
                  <li>✅ TypeScript support</li>
                  <li>✅ Tailwind CSS styling</li>
                  <li>✅ Consistent design system</li>
                </ul>
                <ul className="space-y-2">
                  <li>✅ Accessible components</li>
                  <li>✅ Multiple variants & sizes</li>
                  <li>✅ Interactive examples</li>
                  <li>✅ Easy integration</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
