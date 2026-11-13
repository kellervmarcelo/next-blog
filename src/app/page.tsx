import Container from '@/components/Container';
import Header from '@/components/Header';
import { PostHeading } from '@/components/PostHeading';
import PostList from '@/components/PostList';
import SpinLoader from '@/components/SpinLoader';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group cursor-pointer'>
        <Link className='w-full h-full rounded-xl overflow-hidden' href='#'>
          <Image
            className='group-hover:scale-105 transition-all object-cover object-center w-full h-full'
            src='/images/bryen_0.png'
            width={1200}
            height={720}
            alt='título do post'
            loading='eager'
          />
        </Link>
        <div className='flex flex-col gap-4 sm:justify-center'>
          <time className='text-slate-600 text-sm/tight' dateTime='2025-04-20'>
            20/04/2026 10:00
          </time>
          <PostHeading url='/' as='h1'>
            Lorem Ipsum
          </PostHeading>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae cumque earum eius veniam iste similique aut, accusantium
            quisquam exercitationem mollitia? Voluptatibus earum iste at aut
            quaerat vel aliquid cum voluptates?
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <p className='text-sm stroke-slate-500 mt-2'>Aqui é o footer</p>
      </footer>
    </Container>
  );
}
