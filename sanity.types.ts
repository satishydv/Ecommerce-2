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

export interface SanityImageHotspot {
  x: number;
  y: number;
  height: number;
  width: number;
}

export interface SanityImageCrop {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface SanityImageAsset {
  _ref: string;
  _type: 'reference';
}

export interface SanityImageWithHotspot {
  _type: 'image';
  asset: SanityImageAsset;
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
}

export interface BlockContent {
  _type: 'block';
  style: string;
  children: Array<{
    _type: 'span';
    text: string;
    marks?: string[];
  }>;
  markDefs?: Array<{
    _type: string;
    _key: string;
  }>;
}

export interface Address {
  _id: string;
  _type: 'address';
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country?: string;
  default?: boolean;
}

export interface Author {
  _id: string;
  _type: 'author';
  name: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  image?: SanityImageWithHotspot;
  bio?: BlockContent[];
}

export interface BlogCategory {
  _id: string;
  _type: 'blogCategory';
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  description?: string;
}

export interface Blog {
  _id: string;
  _type: 'blog';
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  excerpt?: string;
  mainImage?: SanityImageWithHotspot;
  publishedAt: string;
  author?: {
    _type: 'reference';
    _ref: string;
  } | {
    name: string;
    image?: SanityImageWithHotspot;
  };
  blogcategories?: Array<{
    _type: 'reference';
    _ref: string;
  } | {
    title: string;
    slug?: string;
  }>;
  body?: BlockContent[];
  isLatest?: boolean;
}

export interface Category {
  _id: string;
  _type: 'category';
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  description?: string;
  image?: SanityImageWithHotspot;
  productCount?: number;
}

export interface Brand {
  _id: string;
  _type: 'brand';
  name: string;
  title?: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  logo?: SanityImageWithHotspot;
  image?: SanityImageWithHotspot;
  description?: string;
}

export interface Product {
  _id: string;
  _type: 'product';
  name: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  description?: string;
  price: number;
  currency: string;
  images?: SanityImageWithHotspot[];
  category?: {
    _type: 'reference';
    _ref: string;
  };
  categories?: Array<{
    _type: 'reference';
    _ref: string;
  } | string>;
  brand?: {
    _type: 'reference';
    _ref: string;
  };
  variant: string;
  status: string;
  stock: number;
  featured?: boolean;
  deal?: boolean;
  dealPrice?: number;
  dealEndDate?: string;
  discount?: number;
}

export interface Order {
  _id: string;
  _type: 'order';
  orderNumber: string;
  clerkUserId: string;
  customerName: string;
  email: string;
  products: Array<{
    _key: string;
    product: {
      _type: 'reference';
      _ref: string;
    };
    quantity: number;
  }>;
  totalPrice: number;
  currency: string;
  amountDiscount: number;
  address?: Address;
  status: string;
  orderDate: string;
  invoice?: {
    id: string;
    number: string;
    hosted_invoice_url: string;
  };
}

// Query result types
export type PRODUCTS_QUERYResult = Product[];
export type SINGLE_PRODUCT_QUERYResult = Product;
export type CATEGORIES_QUERYResult = Category[];
export type BRANDS_QUERYResult = Brand[];
export type BLOGS_QUERYResult = Blog[];
export type SINGLE_BLOG_QUERYResult = Blog;
export type BLOG_CATEGORIES_QUERYResult = BlogCategory[];
export type AUTHORS_QUERYResult = Author[];
export type ORDERS_QUERYResult = Order[];
export type MY_ORDERS_QUERYResult = Order[];
