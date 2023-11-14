import { postsQuery } from '@/lib/queries';
import { sanityFetch, token } from '@/lib/sanity.fetch';
import { draftMode } from 'next/headers';
import Posts from '../components/Posts';
import PreviewPosts from '../components/PreviewPosts';
import PreviewProvider from '../components/PreviewProvider';
import { IPost } from '@/typing';

export default async function Home() {
  const posts = await sanityFetch<IPost[]>({ query: postsQuery });
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPosts posts={posts} />
      </PreviewProvider>
    );
  }

  return <Posts posts={posts} />;
}

export const revalidate = 60;
