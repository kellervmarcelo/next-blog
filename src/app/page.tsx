import PostList from '@/components/PostList';
import SpinLoader from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <div>
      <header>
        <h1 className='text-6xl font-bold text-center my-8'>Aqui é a Header</h1>
      </header>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <p className='text-sm stroke-slate-500 mt-2'>Aqui é o footer</p>
      </footer>
    </div>
  );
}
