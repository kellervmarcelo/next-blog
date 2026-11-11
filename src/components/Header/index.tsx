'use client';

export default function Header() {
  return (
    <div onClick={() => console.log('aqui')}>
      <h1 className='text-4xl font-bold text-amber-500 hover:text-white hover:bg-amber-400 transition-colors'>
        Texto no meu h1
      </h1>
    </div>
  );
}
