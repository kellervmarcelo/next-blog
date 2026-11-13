import Container from '@/components/Container';
import Header from '@/components/Header';
import PostList from '@/components/PostList';
import SpinLoader from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <p className='py-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi est
        fugiat tempore ut animi odit autem iure soluta rem, id modi tenetur,
        earum dolores eaque voluptatibus eius! Ab, rem officia!
      </p>
      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>

      <footer>
        <p className='text-sm stroke-slate-500 mt-2'>Aqui é o footer</p>
      </footer>
    </Container>
  );
}
