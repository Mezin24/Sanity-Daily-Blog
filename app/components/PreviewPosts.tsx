'use client';

import { postsQuery } from '@/lib/queries';
import type { SanityDocument } from '@sanity/client';
import { useLiveQuery } from '@sanity/preview-kit';
import Posts from './Posts';
import { IPost } from '@/typing';

interface Props {
  posts: IPost[];
}

export default function PreviewPosts({ posts = [] }: Props) {
  const [data] = useLiveQuery(posts, postsQuery);

  return <Posts posts={data} />;
}
