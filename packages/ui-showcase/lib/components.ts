export interface ComponentInfo {
    name: string;
    slug: string;
    description: string;
    category: string;
    code: string;
    examples: {
        name: string;
        code: string;
        description: string;
    }[];
}

export const components: ComponentInfo[] = [
    {
        name: 'Button',
        slug: 'button',
        description: 'A customizable button component with multiple variants and sizes.',
        category: 'Form',
        code: 'Button component code here',
        examples: [
            {
                name: 'Basic Usage',
                description: 'Default button variations',
                code: '<Button>Click me</Button>'
            }
        ]
    }
];

export function getComponentBySlug(slug: string): ComponentInfo | undefined {
    return components.find(component => component.slug === slug);
} 