import { NextRequest, NextResponse } from 'next/server';

const componentFiles = {
  button: `// Button component source code
import React from 'react';

export const Button = ({ children, variant = 'primary', ...props }) => {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      {...props}
    >
      {children}
    </button>
  );
};`,

  input: `// Input component source code  
import React from 'react';

export const Input = ({ label, ...props }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input {...props} />
    </div>
  );
};`,

  card: `// Card component source code
import React from 'react';

export const Card = ({ children, ...props }) => {
  return (
    <div className="card" {...props}>
      {children}
    </div>
  );
};`
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!componentFiles[slug as keyof typeof componentFiles]) {
    return NextResponse.json(
      { error: 'Component not found' },
      { status: 404 }
    );
  }

  const fileContent = componentFiles[slug as keyof typeof componentFiles];

  return new NextResponse(fileContent, {
    headers: {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*',
    },
  });
} 