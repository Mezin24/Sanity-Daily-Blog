import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity.client';
import { Image } from '@/typing';

const builder = imageUrlBuilder(client);

export function urlFor(source: Image) {
  return builder.image(source);
}
