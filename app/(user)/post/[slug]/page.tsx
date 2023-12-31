import { client } from '@/lib/sanity.client';
import { urlFor } from '@/lib/urlFor';
import { IPost } from '@/typing';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/app/components/RichTextComponents';

interface Props {
  params: {
    slug: string;
  };
}

const PostPage = async ({ params: { slug } }: Props) => {
  const query = groq`
    *[_type == 'post' && slug.current == $slug][0] {
      ...,
      author->,
      categories[]->
    }
  `;

  const post: IPost = await client.fetch(
    query,
    { slug },
    { next: { revalidate: 60 } }
  );

  return (
    <article className='px-10 pb-28'>
      <section className='space-y-2 border border-[#f7ab0a] text-white'>
        <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
          <div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
            <Image
              className='object-cover object-center mx-auto '
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
        </div>
      </section>

      <section className='p-5 bg-[#f7ab0a] w-full'>
        <div className='flex flex-col md:flex-row justify-between gap-y-5'>
          <div>
            <h1 className='text-4xl font-extrabold'>{post.title}</h1>
            <p>
              {new Date(post._createdAt).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </div>
          <div className='flex items-center space-x-2'>
            <Image
              className='rounded-full'
              src={urlFor(post.author.image).url()}
              alt={post.author.name}
              height={40}
              width={40}
            />
            <div className='w-64'>
              <h3 className='text-lg font-bold'>{post.author.name}</h3>
              <div>{/* Author BIO */}</div>
            </div>
          </div>
        </div>
        <div>
          <h2 className='italic pt-10'>{post.description}</h2>
          <div className='flex items-center justify-end space-x-2'>
            {post.categories.map((category) => (
              <p
                key={category._id}
                className='bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4'
              >
                {category.title}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className='mt-10'>
        <PortableText value={post.body} components={RichTextComponents} />
      </section>
    </article>
  );
};
export default PostPage;
