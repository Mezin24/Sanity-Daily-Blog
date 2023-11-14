import { urlFor } from '@/lib/urlFor';
import { IPost } from '@/typing';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import ClientSideRoute from './ClientSideRoute';

type Props = {
  posts: IPost[];
};

export default function Posts({ posts }: Props) {
  return (
    <div>
      <hr className='border-[#f7ab0a] mb-10' />

      <div className='grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24'>
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className='group cursor-pointer'>
              <div className='relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
                <Image
                  className='object-cover object-left lg:object-center'
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                />
                <div className='absolute bottom-0 w-full bg-opacity-30 backdrop-blur-sm bg-black rounded drop-shadow-lg text-white p-5 flex justify-between'>
                  <div>
                    <p className='font-bold'>{post.title}</p>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>

                  <div className='flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center'>
                    {post.categories.map((category) => (
                      <div
                        key={category._id}
                        className='bg-[#f7ab0a] text-center text-black px-3 py-1 rounded-full text-sm font-semibold'
                      >
                        {category.title}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className='mt-5 flex-1'>
                <p className='underline text-lg font-bold'>{post.title}</p>
                <div className='text-gray-400 line-clamp-2 mt-2 text-sm'>
                  {post.description}
                </div>
              </div>

              <div className='mt-5 font-bold flex items-center group-hover:underline'>
                Read Post
                <ArrowUpRightIcon className='ml-2 h-4 w-4' />
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}
