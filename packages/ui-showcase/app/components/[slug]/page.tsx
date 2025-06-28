import { ComponentPreview } from '@/components/ComponentPreview';
import { CodeBlock } from '@/components/CodeBlock';
import { notFound } from 'next/navigation';

const componentData = {
    button: {
        name: 'Button',
        description: 'A customizable button component with multiple variants and sizes.',
        props: [
            { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost'", default: "'primary'", description: 'Button style variant' },
            { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Button size' },
            { name: 'disabled', type: 'boolean', default: 'false', description: 'Whether the button is disabled' },
            { name: 'children', type: 'React.ReactNode', default: '-', description: 'Button content' },
            { name: 'className', type: 'string', default: '-', description: 'Additional CSS classes' },
        ],
        examples: [
            {
                title: 'Basic Usage',
                code: `import { Button } from '@demo-ui/library';

export default function Example() {
  return (
    <div className="space-x-2">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
}`
            },
            {
                title: 'Different Sizes',
                code: `import { Button } from '@demo-ui/library';

export default function Example() {
  return (
    <div className="space-x-2">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}`
            }
        ]
    },
    input: {
        name: 'Input',
        description: 'A versatile input component with labels, validation, and helper text.',
        props: [
            { name: 'label', type: 'string', default: '-', description: 'Input label text' },
            { name: 'error', type: 'string', default: '-', description: 'Error message to display' },
            { name: 'helperText', type: 'string', default: '-', description: 'Helper text below input' },
            { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Input size' },
            { name: 'variant', type: "'outline' | 'filled'", default: "'outline'", description: 'Input style variant' },
        ],
        examples: [
            {
                title: 'Basic Usage',
                code: `import { Input } from '@demo-ui/library';

export default function Example() {
  return (
    <div className="space-y-4">
      <Input label="Email" placeholder="Enter your email" />
      <Input label="Password" type="password" />
    </div>
  );
}`
            },
            {
                title: 'With Validation',
                code: `import { Input } from '@demo-ui/library';

export default function Example() {
  return (
    <div className="space-y-4">
      <Input 
        label="Username" 
        placeholder="Enter username"
        error="Username is already taken"
      />
      <Input 
        label="Email" 
        placeholder="user@example.com"
        helperText="We'll never share your email"
      />
    </div>
  );
}`
            }
        ]
    },
    card: {
        name: 'Card',
        description: 'A flexible container component for organizing content.',
        props: [
            { name: 'variant', type: "'default' | 'bordered' | 'shadow'", default: "'default'", description: 'Card style variant' },
            { name: 'padding', type: "'none' | 'sm' | 'md' | 'lg'", default: "'md'", description: 'Internal padding' },
            { name: 'children', type: 'React.ReactNode', default: '-', description: 'Card content' },
            { name: 'className', type: 'string', default: '-', description: 'Additional CSS classes' },
        ],
        examples: [
            {
                title: 'Basic Usage',
                code: `import { Card, CardHeader, CardContent } from '@demo-ui/library';

export default function Example() {
  return (
    <Card variant="bordered">
      <CardHeader>
        <h3 className="text-lg font-semibold">Card Title</h3>
      </CardHeader>
      <CardContent>
        <p>This is the card content.</p>
      </CardContent>
    </Card>
  );
}`
            }
        ]
    }
};

export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const component = componentData[resolvedParams.slug as keyof typeof componentData];

    if (!component) {
        notFound();
    }

    return (
        <div className="p-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">{component.name}</h1>
                    <p className="text-xl text-gray-600">{component.description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Preview</h2>
                        <ComponentPreview componentName={resolvedParams.slug} />
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Props</h2>
                        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Prop
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Type
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Default
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {component.props.map((prop, index) => (
                                        <tr key={index}>
                                            <td className="px-4 py-3 text-sm font-medium text-gray-900">
                                                {prop.name}
                                            </td>
                                            <td className="px-4 py-3 text-sm text-gray-600 font-mono">
                                                {prop.type}
                                            </td>
                                            <td className="px-4 py-3 text-sm text-gray-600 font-mono">
                                                {prop.default}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Examples</h2>
                    <div className="space-y-8">
                        {component.examples.map((example, index) => (
                            <div key={index}>
                                <h3 className="text-lg font-medium text-gray-900 mb-4">{example.title}</h3>
                                <CodeBlock code={example.code} title={example.title} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
} 