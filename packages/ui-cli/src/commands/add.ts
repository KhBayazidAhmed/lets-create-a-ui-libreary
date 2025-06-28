import axios from 'axios';
import { promises as fs } from 'fs';
import { join } from 'path';

interface AddOptions {
    path: string;
}

export async function addCommand(component: string, options: AddOptions) {
    console.log(`Installing ${component} component...`);

    try {
        // Fetch component from API
        const response = await axios.get(
            `http://localhost:3000/api/components/${component}`
        );

        // Ensure directory exists
        const componentPath = join(process.cwd(), options.path);
        await fs.mkdir(componentPath, { recursive: true });

        // Write component file
        const filePath = join(componentPath, `${component}.tsx`);
        await fs.writeFile(filePath, response.data);

        console.log(`✅ ${component} component added to ${options.path}/`);
        console.log(`
Usage:
import { ${capitalizeFirst(component)} } from './${options.path}/${component}';
    `);

    } catch (error: any) {
        console.error(`❌ Failed to install ${component}:`, error.message);
        process.exit(1);
    }
}

function capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
} 