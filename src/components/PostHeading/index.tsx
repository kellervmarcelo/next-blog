import Link from 'next/link';

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};

export function PostHeading({
  children,
  url,
  as: Heading = 'h2',
}: PostHeadingProps) {
  const headingVariants = {
    h1: 'text-3xl font-extrabold sm:text-5xl',
    h2: 'text-2xl/tight font-extrabold sm:text-4xl',
  };

  return (
    <Heading className={headingVariants[Heading]}>
      <Link href={url}>{children}</Link>
    </Heading>
  );
}
