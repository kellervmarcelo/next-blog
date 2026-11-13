import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <h1 className='text-4xl sm:text-5xl sm:my-6 lg:my-8 lg:text-6xl font-extrabold text-center my-5'>
        <Link href='/'>The Blog</Link>
      </h1>
    </header>
  );
}
