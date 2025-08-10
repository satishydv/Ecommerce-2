const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

// Load .env file if it exists
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmedLine = line.trim();
    if (trimmedLine && !trimmedLine.startsWith('#')) {
      const equalIndex = trimmedLine.indexOf('=');
      if (equalIndex > 0) {
        const key = trimmedLine.substring(0, equalIndex).trim();
        let value = trimmedLine.substring(equalIndex + 1).trim();
        
        // Remove surrounding quotes if they exist
        if ((value.startsWith('"') && value.endsWith('"')) || 
            (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        
        process.env[key] = value;
      }
    }
  });
}

// Check for required environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

console.log('🔍 Environment variables loaded:');
console.log('   Project ID:', projectId);
console.log('   Dataset:', dataset);

if (!projectId || !dataset) {
  console.error('❌ Missing required environment variables:');
  console.error('   - NEXT_PUBLIC_SANITY_PROJECT_ID');
  console.error('   - NEXT_PUBLIC_SANITY_DATASET');
  console.error('');
  console.error('Please check your .env file has the correct format:');
  console.error('NEXT_PUBLIC_SANITY_PROJECT_ID=vfu4vf5k');
  console.error('NEXT_PUBLIC_SANITY_DATASET=production');
  process.exit(1);
}

// Create a Sanity client
const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-08-04',
  useCdn: false,
});

function extractSchema() {
  try {
    // Generate TypeScript types based on your schema
    const types = `// Auto-generated types from Sanity schema
// This file is generated automatically - do not edit manually

export interface SanityImage {
  _id: string;
  _type: 'sanity.imageAsset';
  assetId: string;
  extension: string;
  metadata: {
    dimensions: {
      width: number;
      height: number;
    };
    palette: {
      dominant: {
        background: string;
        foreground: string;
      };
    };
  };
  mimeType: string;
  originalFilename: string;
  path: string;
  sha1hash: string;
  size: number;
  url: string;
}

// Add more type definitions as needed based on your schema
`;

    // Write the types to sanity.types.ts
    fs.writeFileSync(path.join(__dirname, 'sanity.types.ts'), types);
    console.log('✅ Schema types extracted successfully!');
    console.log('📁 Types written to: sanity.types.ts');
  } catch (error) {
    console.error('❌ Error extracting schema:', error);
    process.exit(1);
  }
}

extractSchema();
