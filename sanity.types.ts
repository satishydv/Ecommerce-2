// Auto-generated types from Sanity schema
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
