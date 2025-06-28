import axios from 'axios';

export async function listCommand() {
    console.log('📦 Available UI Components:\n');

    try {
        const response = await axios.get('http://localhost:3000/api/components/list');
        const { components } = response.data;

        components.forEach((component: any) => {
            console.log(`📘 ${component.name} (${component.slug})`);
            console.log(`   ${component.description}`);
            console.log(`   Category: ${component.category} | Version: ${component.version}\n`);
        });

        console.log(`Total: ${components.length} components available`);
        console.log('\nTo install a component, run: ui-cli add <component-name>');

    } catch (error: any) {
        console.error('❌ Failed to fetch components:', error.message);
        process.exit(1);
    }
} 