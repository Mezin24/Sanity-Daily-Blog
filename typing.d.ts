import { SanityDocument } from 'next-sanity';

interface Base {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

interface IPost extends SanityDocument {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}

interface Author extends SanityDocument {
  bio: Block[];
  image: image;
  name: string;
  slug: Slug;
}

interface Image {
  _type: 'image';
  asset: 'reference';
}

interface Reference {
  _type: 'string';
  asset: 'reference';
}

interface Slug {
  _type: 'slug';
  current: 'string';
}

interface Block {
  _type: 'block';
  _key: string;
  children: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}

interface Category extends SanityDocument {
  description: string;
  title: string;
}

interface MainImage {
  _type: 'image';
  asset: Reference;
}

interface Title {
  _type: 'string';
  current: string;
}
