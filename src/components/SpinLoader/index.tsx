import { twMerge } from 'tailwind-merge';

type SpinLoaderProps = {
  containerClasses?: string;
  loaderClasses?: string;
};

export default function SpinLoader({
  containerClasses,
  loaderClasses,
}: SpinLoaderProps) {
  return (
    <div
      className={twMerge(`flex items-center justify-center`, containerClasses)}
    >
      <div
        className={twMerge(
          `size-10 border-slate-900 border-5 rounded-full border-t-transparent animate-spin`,
          loaderClasses,
        )}
      ></div>
    </div>
  );
}
