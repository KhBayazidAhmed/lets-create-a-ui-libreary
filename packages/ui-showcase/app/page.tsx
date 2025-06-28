import Link from 'next/link';

export default function Home() {
  const components = [
    {
      name: 'Button',
      description: 'Customizable button component with multiple variants and sizes',
      href: '/components/button',
      status: 'Ready'
    },
    {
      name: 'Input',
      description: 'Versatile input component with labels, validation, and helper text',
      href: '/components/input',
      status: 'Ready'
    },
    {
      name: 'Card',
      description: 'Flexible container component for organizing content',
      href: '/components/card',
      status: 'Ready'
    }
  ];

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            UI Component System Demo
          </h1>
          <p className="text-xl text-gray-600">
            A collection of reusable React components built with TypeScript and Tailwind CSS.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Getting Started
          </h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium mb-2">Installation</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
              <code>npm install @demo-ui/library</code>
            </div>

            <h3 className="text-lg font-medium mt-4 mb-2">Usage</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
              <code>{`import { Button, Input, Card } from '@demo-ui/library';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input label="Name" placeholder="Enter your name" />
    </div>
  );
}`}</code>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component) => (
              <Link
                key={component.name}
                href={component.href}
                className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {component.name}
                  </h3>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {component.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {component.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">
            🚀 Features
          </h2>
          <ul className="text-blue-800 space-y-1">
            <li>• TypeScript support with full type definitions</li>
            <li>• Tailwind CSS for styling with customizable themes</li>
            <li>• Accessible components following WCAG guidelines</li>
            <li>• Tree-shakable exports for optimal bundle size</li>
            <li>• Comprehensive documentation and examples</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
